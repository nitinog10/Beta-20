import { Injectable, signal } from '@angular/core';
import { GoogleGenAI, Type } from '@google/genai';
import { PlanRequest, Itinerary, DayPlan, Activity } from '../models/itinerary.model';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private ai: GoogleGenAI;
  private apiKey: string;

  constructor() {
    this.apiKey = (window as any).process?.env?.API_KEY ?? 'YOUR_API_KEY_HERE';
    if(this.apiKey === 'YOUR_API_KEY_HERE') {
        console.warn("Using a placeholder API key. The application will not function correctly without a valid API key.");
    }
    this.ai = new GoogleGenAI({ apiKey: this.apiKey });
  }

  private ensureApiKey() {
      if (this.apiKey === 'YOUR_API_KEY_HERE') {
          throw new Error('API Key not configured. Please provide a valid Google Gemini API key to use this feature.');
      }
  }

  async generateItinerary(planRequest: PlanRequest): Promise<Itinerary> {
    this.ensureApiKey();
    const { destination, interests, startDate, endDate, budget, travelMode } = planRequest;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const duration = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

    if (duration <= 0 || isNaN(duration)) {
        throw new Error('Invalid date range selected. End date must be after the start date.');
    }
    
    const systemInstruction = `You are an expert travel planner for India. Your response must be a valid JSON object that strictly adheres to the provided schema. Do not include any text, notes, or explanations outside of the JSON structure.`;
    const userPrompt = `Create a detailed travel itinerary for a ${duration}-day trip to ${destination} from ${startDate} to ${endDate}. The itinerary must contain exactly ${duration} daily plans. The traveler's interests are ${interests.join(', ')}. Their budget is ${budget} and their preferred travel mode is ${travelMode}. For each day, list activities. For each activity, provide a short, engaging description and a 'Reason to Visit' explaining its significance or what makes it special.`;

    const itinerarySchema = {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING, description: 'Title of the trip itinerary.' },
        dailyPlan: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              day: { type: Type.INTEGER },
              title: { type: Type.STRING },
              activities: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    description: { type: Type.STRING },
                    reason: { type: Type.STRING, description: 'Reason to visit this specific place.' },
                  },
                  required: ['name', 'description', 'reason']
                },
              },
            },
            required: ['day', 'title', 'activities']
          },
        },
      },
      required: ['title', 'dailyPlan'],
    };

    try {
        const response = await this.ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: userPrompt,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: 'application/json',
                responseSchema: itinerarySchema,
                temperature: 0.7
            },
        });
        const jsonText = response.text.trim();
        return JSON.parse(jsonText) as Itinerary;
    } catch (error) {
        console.error('Error generating itinerary:', error);
        throw new Error('Failed to generate itinerary. Please check your API key and prompt.');
    }
  }

  async getAlternativeActivities(dayPlan: DayPlan, userRequest: string, destination: string, interests: string[]): Promise<Activity[]> {
    this.ensureApiKey();
    const systemInstruction = `You are a helpful travel assistant. Your response must be a valid JSON object that strictly adheres to the provided schema. Do not include any text, notes, or explanations outside of the JSON structure.`;
    const userPrompt = `A user is modifying their itinerary for ${destination}. Their current plan for Day ${dayPlan.day} is: ${dayPlan.activities.map(a => a.name).join(', ')}. The user said: "${userRequest}". Based on their request, suggest three distinct and alternative activities for them to do on that day in ${destination}, keeping in mind their original interests are ${interests.join(', ')}.`;

    const alternativesSchema = {
      type: Type.OBJECT,
      properties: {
        alternatives: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              description: { type: Type.STRING },
              reason: { type: Type.STRING },
            },
            required: ['name', 'description', 'reason']
          },
        }
      },
      required: ['alternatives']
    };

    try {
        const response = await this.ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: userPrompt,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: 'application/json',
                responseSchema: alternativesSchema,
                temperature: 0.8
            },
        });
        const jsonText = response.text.trim();
        const parsed = JSON.parse(jsonText);
        return parsed.alternatives as Activity[];
    } catch (error) {
        console.error('Error getting alternative activities:', error);
        throw new Error('Failed to get alternative activities.');
    }
  }
}