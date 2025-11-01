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
    const prompt = `You are an expert travel planner for India. Create a detailed travel itinerary for a trip to ${destination} from ${startDate} to ${endDate}. The traveler's interests are ${interests.join(', ')}. Their budget is ${budget} and their preferred travel mode is ${travelMode}.
    Create a day-by-day plan. For each day, list the activities. For each activity, provide a short, engaging description and a 'Reason to Visit' explaining its significance or what makes it special.
    Respond ONLY with a JSON object that matches the provided schema.`;

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
            contents: prompt,
            config: {
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
    const prompt = `You are a helpful travel assistant. A user is modifying their itinerary for ${destination}. Their current plan for Day ${dayPlan.day} is: ${dayPlan.activities.map(a => a.name).join(', ')}.
    The user said: "${userRequest}".
    Based on their request, suggest three distinct and alternative activities for them to do on that day in ${destination}, keeping in mind their original interests are ${interests.join(', ')}.
    Respond ONLY with a JSON object containing an array of three alternative activities, matching the provided schema.`;

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
            contents: prompt,
            config: {
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

  async generateImage(prompt: string, aspectRatio: '16:9' | '1:1' = '16:9'): Promise<string> {
    this.ensureApiKey();
    try {
        const response = await this.ai.models.generateImages({
            model: 'imagen-3.0-generate-002',
            prompt: prompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/png',
                aspectRatio: aspectRatio,
            },
        });
        
        if (response.generatedImages && response.generatedImages.length > 0) {
            const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
            return `data:image/png;base64,${base64ImageBytes}`;
        } else {
            throw new Error('No image was generated.');
        }

    } catch(error) {
        console.error('Error generating image:', error);
        throw new Error('Failed to generate image.');
    }
  }
}