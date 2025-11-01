// Backend Server for BharatTrip AI
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../')));

// OpenAI Configuration
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// API Keys
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'BharatTrip AI Backend is running!' });
});

// Chatbot endpoint - OpenAI Integration
app.post('/api/chatbot', async (req, res) => {
    try {
        const { message, language = 'en' } = req.body;
        
        // System prompt for travel assistant
        const systemPrompt = `You are BharatTrip AI, an intelligent travel assistant specialized in Indian tourism. 
        You provide helpful, accurate, and culturally sensitive travel advice about destinations in India.
        You can suggest itineraries, recommend places to visit, provide budget estimates, and share local insights.
        Respond in a friendly, conversational tone. If the user asks in Hindi, respond in Hindi.
        Current language preference: ${language}`;

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: message }
            ],
            temperature: 0.7,
            max_tokens: 500
        });

        res.json({
            success: true,
            reply: completion.data.choices[0].message.content
        });
    } catch (error) {
        console.error('Chatbot error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to get chatbot response',
            fallbackReply: 'I apologize, but I\'m having trouble connecting right now. Please try again in a moment.'
        });
    }
});

// Weather endpoint - OpenWeatherMap Integration
app.get('/api/weather/:location', async (req, res) => {
    try {
        const { location } = req.params;
        const { lat, lon } = req.query;
        
        let weatherUrl;
        if (lat && lon) {
            weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
        } else {
            weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location},IN&appid=${WEATHER_API_KEY}&units=metric`;
        }

        const weatherResponse = await axios.get(weatherUrl);
        
        // Get 5-day forecast
        const forecastUrl = lat && lon 
            ? `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
            : `https://api.openweathermap.org/data/2.5/forecast?q=${location},IN&appid=${WEATHER_API_KEY}&units=metric`;
            
        const forecastResponse = await axios.get(forecastUrl);

        res.json({
            success: true,
            current: weatherResponse.data,
            forecast: forecastResponse.data
        });
    } catch (error) {
        console.error('Weather API error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch weather data'
        });
    }
});

// Places API - Google Maps Integration
app.post('/api/places/search', async (req, res) => {
    try {
        const { query, location, radius = 5000, type } = req.body;
        
        // Text search for places
        const placesUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&location=${location.lat},${location.lng}&radius=${radius}&type=${type || 'tourist_attraction'}&key=${GOOGLE_MAPS_API_KEY}`;
        
        const placesResponse = await axios.get(placesUrl);
        
        res.json({
            success: true,
            places: placesResponse.data.results
        });
    } catch (error) {
        console.error('Places API error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch places data'
        });
    }
});

// Nearby places endpoint
app.post('/api/places/nearby', async (req, res) => {
    try {
        const { location, radius = 5000, types = ['tourist_attraction'] } = req.body;
        
        const nearbyUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=${radius}&type=${types.join('|')}&key=${GOOGLE_MAPS_API_KEY}`;
        
        const nearbyResponse = await axios.get(nearbyUrl);
        
        res.json({
            success: true,
            places: nearbyResponse.data.results
        });
    } catch (error) {
        console.error('Nearby places error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch nearby places'
        });
    }
});

// Geocoding endpoint
app.get('/api/geocode/:address', async (req, res) => {
    try {
        const { address } = req.params;
        // Hint Google that we care about Indian locations first
        const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&region=IN&components=country:IN&key=${GOOGLE_MAPS_API_KEY}`;
        
        const geocodeResponse = await axios.get(geocodeUrl);
        
        if (geocodeResponse.data.results.length > 0) {
            const location = geocodeResponse.data.results[0].geometry.location;
            return res.json({
                success: true,
                location,
                formatted_address: geocodeResponse.data.results[0].formatted_address
            });
        }

        // Fallback: OpenStreetMap Nominatim
        console.log('[Geocode] Google ZERO_RESULTS, trying Nominatim…');
        const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address + ', India')}`;
        const nomRes = await axios.get(nominatimUrl, {
            headers: { 'User-Agent': 'BharatTripAI/1.0' }
        });

        if (nomRes.data.length > 0) {
            const loc = nomRes.data[0];
            return res.json({
                success: true,
                location: { lat: parseFloat(loc.lat), lng: parseFloat(loc.lon) },
                formatted_address: loc.display_name
            });
        }

        res.json({ success: false, error: 'Location not found' });
    } catch (error) {
        console.error('Geocoding error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to geocode address'
        });
    }
});

// Enhanced AI Trip Planner endpoint with personalized features
app.post('/api/generate-itinerary', async (req, res) => {
    try {
        const { destination, interests, startDate, endDate, budget, travelMode, userId, preferences } = req.body;
        
        // Calculate duration
        const start = new Date(startDate);
        const end = new Date(endDate);
        const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
        
        console.log(`[Itinerary] Generating ${duration}-day itinerary for ${destination} (${startDate} to ${endDate})`);
        
        // Create personalized prompt based on user preferences
        let personalizedContext = '';
        if (preferences) {
            personalizedContext = `User preferences: Travel style: ${preferences.style}, Pace: ${preferences.pace}, Budget preference: ${preferences.budget}. `;
        }
        
        const prompt = `${personalizedContext}Create a detailed ${duration}-day personalized itinerary for ${destination}, India.

Trip Details:
- Destination: ${destination}
- Duration: EXACTLY ${duration} days (${startDate} to ${endDate})
- Interests: ${interests.join(', ')}
- Budget: ${budget}
- Travel Mode: ${travelMode}

IMPORTANT: You MUST create exactly ${duration} days in the dailyPlan array. No more, no less.

Create a JSON response with this exact structure:
{
  "title": "${destination} ${duration}-Day Adventure",
  "dailyPlan": [
    {
      "day": 1,
      "title": "Day 1: Arrival & First Impressions",
      "activities": [
        {
          "name": "Activity name",
          "description": "Detailed description of the activity",
          "reason": "Why this activity is special and worth visiting"
        }
      ]
    }${duration > 1 ? `,
    {
      "day": 2,
      "title": "Day 2: Exploration",
      "activities": [...]
    }` : ''}${duration > 2 ? `
    ... continue for all ${duration} days` : ''}
  ]
}

Generate exactly ${duration} day objects in the dailyPlan array. Include 3-4 activities per day. Make each activity description engaging and informative. The "reason" should explain the cultural, historical, or experiential significance.

Day progression should be logical:
- Day 1: Arrival, orientation, nearby attractions
- Middle days: Main attractions, experiences
- Last day: Final experiences, departure preparation`;

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are an expert travel planner for India with deep knowledge of local attractions, cuisine, and culture. Always respond with valid JSON only." },
                { role: "user", content: prompt }
            ],
            temperature: 0.7,
            max_tokens: 1500
        });

        let itineraryData;
        try {
            const responseText = completion.data.choices[0].message.content.trim();
            // Remove any markdown formatting
            const cleanedResponse = responseText.replace(/```json\n?|\n?```/g, '');
            itineraryData = JSON.parse(cleanedResponse);
            
            // Validate that we have the correct number of days
            if (!itineraryData.dailyPlan || itineraryData.dailyPlan.length !== duration) {
                console.log(`Warning: Generated ${itineraryData.dailyPlan?.length || 0} days, expected ${duration}. Adjusting...`);
                
                // If we have fewer days than needed, generate additional days
                if (itineraryData.dailyPlan && itineraryData.dailyPlan.length < duration) {
                    for (let i = itineraryData.dailyPlan.length + 1; i <= duration; i++) {
                        itineraryData.dailyPlan.push({
                            day: i,
                            title: `Day ${i}: ${i === duration ? 'Departure & Final Experiences' : 'Continued Exploration'}`,
                            activities: [
                                {
                                    name: `Day ${i} Activities`,
                                    description: `Explore more of ${destination} with activities suited to your interests: ${interests.join(', ')}`,
                                    reason: "Continue discovering the unique charm and attractions of this destination"
                                }
                            ]
                        });
                    }
                }
                
                // If we have more days than needed, trim to the correct duration
                if (itineraryData.dailyPlan && itineraryData.dailyPlan.length > duration) {
                    itineraryData.dailyPlan = itineraryData.dailyPlan.slice(0, duration);
                }
            }
            
        } catch (parseError) {
            console.error('JSON parsing error:', parseError);
            // Fallback: Generate the correct number of days
            itineraryData = {
                title: `${destination} ${duration}-Day Travel Itinerary`,
                dailyPlan: []
            };
            
            for (let i = 1; i <= duration; i++) {
                itineraryData.dailyPlan.push({
                    day: i,
                    title: `Day ${i}: ${i === 1 ? 'Arrival & Exploration' : i === duration ? 'Final Day & Departure' : 'Continued Discovery'}`,
                    activities: [
                        {
                            name: `${destination} Exploration`,
                            description: `Discover the best of ${destination} with activities tailored to your interests: ${interests.join(', ')}. Enjoy local attractions, cuisine, and culture.`,
                            reason: "Experience the authentic local culture and must-see attractions"
                        },
                        {
                            name: "Local Cuisine Experience",
                            description: "Try authentic local dishes and visit popular restaurants or street food spots",
                            reason: "Food is an integral part of understanding local culture"
                        },
                        {
                            name: "Cultural Activity",
                            description: "Engage in cultural activities based on your interests and local offerings",
                            reason: "Immerse yourself in the local way of life and traditions"
                        }
                    ]
                });
            }
        }

        res.json({
            success: true,
            itinerary: itineraryData
        });
    } catch (error) {
        console.error('Enhanced trip planning error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to generate enhanced itinerary'
        });
    }
});

// Get alternative activities endpoint
app.post('/api/get-alternatives', async (req, res) => {
    try {
        const { dayPlan, userRequest, destination, interests } = req.body;
        
        const prompt = `A user is modifying their itinerary for ${destination}. Their current plan for Day ${dayPlan.day} is: ${dayPlan.activities.map(a => a.name).join(', ')}.

The user said: "${userRequest}".

Based on their request, suggest 3 distinct alternative activities for them to do on that day in ${destination}, keeping in mind their interests are ${interests.join(', ')}.

Respond with JSON in this exact format:
{
  "alternatives": [
    {
      "name": "Activity name",
      "description": "Activity description",
      "reason": "Why this is a good alternative"
    }
  ]
}`;

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful travel assistant. Always respond with valid JSON only." },
                { role: "user", content: prompt }
            ],
            temperature: 0.8,
            max_tokens: 600
        });

        let alternatives;
        try {
            const responseText = completion.data.choices[0].message.content.trim();
            const cleanedResponse = responseText.replace(/```json\n?|\n?```/g, '');
            alternatives = JSON.parse(cleanedResponse);
        } catch (parseError) {
            console.error('JSON parsing error for alternatives:', parseError);
            // Fallback alternatives
            alternatives = {
                alternatives: [
                    {
                        name: "Local Market Visit",
                        description: "Explore authentic local markets and street food",
                        reason: "Experience local culture and cuisine"
                    },
                    {
                        name: "Heritage Walk",
                        description: "Guided tour of historical landmarks",
                        reason: "Learn about local history and architecture"
                    },
                    {
                        name: "Nature Spot",
                        description: "Visit nearby parks or natural attractions",
                        reason: "Relax and enjoy natural beauty"
                    }
                ]
            };
        }

        res.json({
            success: true,
            alternatives: alternatives.alternatives
        });
    } catch (error) {
        console.error('Get alternatives error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to get alternative activities'
        });
    }
});

// Original trip planning endpoint (kept for backward compatibility)
app.post('/api/trip/plan', async (req, res) => {
    try {
        const { destination, interests, duration, budget, travelMode } = req.body;
        
        const prompt = `Create a detailed ${duration}-day trip itinerary for ${destination}, India with the following preferences:
        - Interests: ${interests.join(', ')}
        - Budget: ${budget} per day
        - Travel mode: ${travelMode}
        
        Please provide:
        1. Day-by-day itinerary with timings
        2. Estimated costs for each activity
        3. Best places to stay
        4. Local food recommendations
        5. Travel tips
        
        Format the response in a clear, structured way.`;

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are an expert travel planner for India with deep knowledge of local attractions, cuisine, and culture." },
                { role: "user", content: prompt }
            ],
            temperature: 0.7,
            max_tokens: 1000
        });

        res.json({
            success: true,
            itinerary: completion.data.choices[0].message.content
        });
    } catch (error) {
        console.error('Trip planning error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to generate trip plan'
        });
    }
});

// Weather Map Layers endpoint (for map integration)
app.get('/api/weather/map/:layer', async (req, res) => {
    try {
        const { layer } = req.params;
        const { z, x, y } = req.query;
        
        // OpenWeatherMap tile layers
        const tileUrl = `https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png?appid=${WEATHER_API_KEY}`;
        
        const response = await axios.get(tileUrl, {
            responseType: 'stream'
        });
        
        res.setHeader('Content-Type', 'image/png');
        response.data.pipe(res);
    } catch (error) {
        console.error('Weather map error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch weather map tile'
        });
    }
});

// Landmark recognition endpoint (mock for now, can integrate with Google Vision API)
app.post('/api/landmark/recognize', async (req, res) => {
    try {
        const { imageBase64 } = req.body;
        
        // For now, return mock data
        // In production, integrate with Google Vision API
        const mockLandmarks = [
            { name: 'Taj Mahal', location: 'Agra', confidence: 0.95 },
            { name: 'India Gate', location: 'New Delhi', confidence: 0.92 },
            { name: 'Gateway of India', location: 'Mumbai', confidence: 0.89 }
        ];
        
        const randomLandmark = mockLandmarks[Math.floor(Math.random() * mockLandmarks.length)];
        
        res.json({
            success: true,
            landmark: randomLandmark
        });
    } catch (error) {
        console.error('Landmark recognition error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to recognize landmark'
        });
    }
});

// AI-Powered Travel Recommendations with Climate & Crowd Analysis
app.post('/api/recommendations/analyze', async (req, res) => {
    try {
        const { destination, dates, interests } = req.body;
        
        // Fetch weather forecast for destination
        const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${destination},IN&appid=${WEATHER_API_KEY}&units=metric`;
        const weatherResponse = await axios.get(weatherUrl);
        
        // Analyze weather patterns
        const weatherData = weatherResponse.data.list;
        const avgTemp = weatherData.reduce((sum, item) => sum + item.main.temp, 0) / weatherData.length;
        const avgHumidity = weatherData.reduce((sum, item) => sum + item.main.humidity, 0) / weatherData.length;
        const rainDays = weatherData.filter(item => item.weather[0].main.includes('Rain')).length;
        
        // Get location coordinates for crowd analysis
        const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(destination)}&key=${GOOGLE_MAPS_API_KEY}`;
        const geocodeResponse = await axios.get(geocodeUrl);
        const location = geocodeResponse.data.results[0]?.geometry.location;
        
        // Analyze crowd density patterns using AI
        const crowdAnalysisPrompt = `Analyze crowd density and best visiting times for ${destination}, India.
        Consider: ${interests.join(', ')} interests.
        Weather: Avg temp ${avgTemp.toFixed(1)}°C, Humidity ${avgHumidity.toFixed(0)}%
        
        Provide:
        1. Best time to visit (time of day and days of week)
        2. Expected crowd levels (Low/Medium/High)
        3. Peak hours to avoid
        4. Off-peak recommendations
        Format as JSON with keys: bestTime, crowdLevel, peakHours, offPeakTimes, reasoning`;
        
        const crowdAnalysis = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a travel data analyst expert in Indian tourism patterns and crowd management." },
                { role: "user", content: crowdAnalysisPrompt }
            ],
            temperature: 0.7,
            max_tokens: 500
        });
        
        // Transport route optimization
        const transportPrompt = `Suggest optimal public transport routes for ${destination}, India.
        Consider weather (${avgTemp.toFixed(1)}°C, ${rainDays > 5 ? 'rainy' : 'clear'} conditions).
        Interests: ${interests.join(', ')}
        
        Provide:
        1. Best transport modes (metro/bus/auto/taxi)
        2. Recommended routes between attractions
        3. Travel time estimates
        4. Cost estimates
        5. Weather-appropriate transport suggestions
        Format as JSON.`;
        
        const transportAnalysis = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a local transport expert with knowledge of Indian public transport systems." },
                { role: "user", content: transportPrompt }
            ],
            temperature: 0.7,
            max_tokens: 600
        });
        
        // Climate trend analysis
        const climateTrends = {
            currentTemp: avgTemp.toFixed(1),
            humidity: avgHumidity.toFixed(0),
            rainProbability: ((rainDays / weatherData.length) * 100).toFixed(0),
            comfort: avgTemp < 25 ? 'Pleasant' : avgTemp < 35 ? 'Warm' : 'Hot',
            recommendation: avgTemp < 25 && rainDays < 3 ? 'Excellent' : 
                           avgTemp < 30 && rainDays < 5 ? 'Good' : 'Fair'
        };
        
        res.json({
            success: true,
            destination,
            weatherForecast: {
                avgTemperature: avgTemp.toFixed(1),
                avgHumidity: avgHumidity.toFixed(0),
                rainDays: rainDays,
                forecastDays: weatherData.length / 8, // 3-hour intervals
                comfort: climateTrends.comfort,
                recommendation: climateTrends.recommendation
            },
            crowdAnalysis: JSON.parse(crowdAnalysis.data.choices[0].message.content.replace(/```json\n?|\n?```/g, '')),
            transportRecommendations: JSON.parse(transportAnalysis.data.choices[0].message.content.replace(/```json\n?|\n?```/g, '')),
            climateTrends: climateTrends,
            bestVisitScore: calculateVisitScore(avgTemp, avgHumidity, rainDays),
            generatedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error('Recommendations error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to generate recommendations',
            message: error.message
        });
    }
});

// Real-time crowd density estimation
app.post('/api/crowd/density', async (req, res) => {
    try {
        const { placeId, location, name } = req.body;
        
        // Get place details from Google Maps
        const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,opening_hours&key=${GOOGLE_MAPS_API_KEY}`;
        const placeResponse = await axios.get(placeDetailsUrl);
        const placeData = placeResponse.data.result;
        
        // Estimate crowd density based on ratings and current time
        const now = new Date();
        const hour = now.getHours();
        const dayOfWeek = now.getDay();
        
        // Peak hours logic: 10am-12pm and 4pm-7pm on weekdays, all day weekends
        let crowdLevel = 'Medium';
        let crowdPercentage = 50;
        
        if (dayOfWeek === 0 || dayOfWeek === 6) { // Weekend
            crowdPercentage = 70;
            crowdLevel = 'High';
        } else if ((hour >= 10 && hour <= 12) || (hour >= 16 && hour <= 19)) { // Peak hours
            crowdPercentage = 75;
            crowdLevel = 'High';
        } else if (hour >= 6 && hour <= 9) { // Early morning
            crowdPercentage = 30;
            crowdLevel = 'Low';
        } else if (hour >= 20 || hour <= 5) { // Night/early morning
            crowdPercentage = 20;
            crowdLevel = 'Very Low';
        }
        
        // Use AI to provide detailed crowd analysis
        const crowdPrompt = `Analyze current crowd density for ${name || 'this location'} in India.
        Current time: ${now.toLocaleTimeString('en-IN')}
        Day: ${['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek]}
        Rating: ${placeData.rating || 'N/A'}
        Total ratings: ${placeData.user_ratings_total || 'N/A'}
        
        Provide: 1) Detailed crowd analysis, 2) Best times to visit today, 3) Tips to avoid crowds.
        Keep it concise (3-4 sentences).`;
        
        const aiAnalysis = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a crowd management expert analyzing tourist site congestion." },
                { role: "user", content: crowdPrompt }
            ],
            temperature: 0.7,
            max_tokens: 200
        });
        
        res.json({
            success: true,
            placeName: name || placeData.name,
            currentCrowd: {
                level: crowdLevel,
                percentage: crowdPercentage,
                timestamp: now.toISOString()
            },
            analysis: aiAnalysis.data.choices[0].message.content,
            peakHours: ['10:00-12:00', '16:00-19:00'],
            bestTimes: ['06:00-09:00', '14:00-16:00'],
            placeDetails: {
                rating: placeData.rating,
                totalRatings: placeData.user_ratings_total,
                isOpen: placeData.opening_hours?.open_now || null
            }
        });
    } catch (error) {
        console.error('Crowd density error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to get crowd density data'
        });
    }
});

// Public transport updates and route optimization
app.post('/api/transport/routes', async (req, res) => {
    try {
        const { origin, destination, mode, destination_name } = req.body;
        
        // Get directions from Google Maps
        const directionsUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&mode=${mode || 'transit'}&key=${GOOGLE_MAPS_API_KEY}`;
        const directionsResponse = await axios.get(directionsUrl);
        
        if (directionsResponse.data.routes.length === 0) {
            return res.json({
                success: false,
                error: 'No routes found'
            });
        }
        
        const route = directionsResponse.data.routes[0];
        const leg = route.legs[0];
        
        // Use AI to provide context-aware transport recommendations
        const transportPrompt = `Analyze this travel route in India:
        From: ${leg.start_address}
        To: ${leg.end_address}
        Distance: ${leg.distance.text}
        Duration: ${leg.duration.text}
        Mode: ${mode || 'transit'}
        
        Provide: 1) Alternative transport options, 2) Cost estimates, 3) Time-saving tips, 4) Safety recommendations.
        Format as JSON with keys: alternatives, costEstimate, tips, safetyNotes`;
        
        const aiRecommendations = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a local transport advisor familiar with Indian public transport." },
                { role: "user", content: transportPrompt }
            ],
            temperature: 0.7,
            max_tokens: 400
        });
        
        res.json({
            success: true,
            route: {
                distance: leg.distance.text,
                duration: leg.duration.text,
                startAddress: leg.start_address,
                endAddress: leg.end_address,
                steps: leg.steps.map(step => ({
                    instruction: step.html_instructions.replace(/<[^>]*>/g, ''),
                    distance: step.distance.text,
                    duration: step.duration.text,
                    mode: step.travel_mode
                }))
            },
            aiRecommendations: JSON.parse(aiRecommendations.data.choices[0].message.content.replace(/```json\n?|\n?```/g, '')),
            mapPolyline: route.overview_polyline.points
        });
    } catch (error) {
        console.error('Transport routes error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to get transport routes'
        });
    }
});

// Climate trends analysis for destination
app.get('/api/climate/trends/:destination', async (req, res) => {
    try {
        const { destination } = req.params;
        const { months = 6 } = req.query;
        
        // Get historical and forecast weather data
        const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${destination},IN&appid=${WEATHER_API_KEY}&units=metric`;
        const weatherResponse = await axios.get(weatherUrl);
        
        // Analyze climate trends using AI
        const trendsPrompt = `Analyze climate trends for ${destination}, India over the next ${months} months.
        Current conditions: ${weatherResponse.data.list[0].weather[0].description}
        Temperature: ${weatherResponse.data.list[0].main.temp}°C
        
        Provide monthly breakdown:
        - Best months to visit
        - Monsoon/dry season information
        - Temperature ranges
        - Festival seasons
        - Tourist season (peak/off-peak)
        
        Format as JSON with month-wise data.`;
        
        const aiTrends = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a climatologist specializing in Indian weather patterns and tourism seasons." },
                { role: "user", content: trendsPrompt }
            ],
            temperature: 0.7,
            max_tokens: 800
        });
        
        res.json({
            success: true,
            destination,
            currentWeather: weatherResponse.data.list[0],
            forecast: weatherResponse.data.list.slice(0, 8), // Next 24 hours
            climateTrends: JSON.parse(aiTrends.data.choices[0].message.content.replace(/```json\n?|\n?```/g, '')),
            analyzedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error('Climate trends error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to analyze climate trends'
        });
    }
});

// Cultural Insights API - Festivals, Customs, Local Culture
app.post('/api/cultural/insights', async (req, res) => {
    try {
        const { destination, language = 'en' } = req.body;
        
        const culturalPrompt = `Provide comprehensive cultural insights for ${destination}, India in simple, readable format.

Format your response EXACTLY as follows (plain text, not nested JSON):

FESTIVALS:
- List 4-5 major festivals with months (e.g., "Diwali in October-November")

CUSTOMS:
- List 4-5 local customs as simple bullet points

DOS:
- List 4-5 cultural do's

DONTS:
- List 4-5 cultural don'ts

PHRASES:
- List 5-6 useful phrases with translations (format: "Namaste - Hello")

FOOD:
Write 2-3 sentences about local food culture and dining etiquette.

TIPS:
- List 3-4 practical cultural tips

Keep it concise and practical. ${language !== 'en' ? `Include ${language} where helpful.` : ''}`;
        
        const culturalInsights = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a cultural anthropologist and expert on Indian traditions, customs, and regional cultures." },
                { role: "user", content: culturalPrompt }
            ],
            temperature: 0.7,
            max_tokens: 1200
        });
        
        const content = culturalInsights.data.choices[0].message.content;
        
        // Simple line-by-line parsing
        const lines = content.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        
        const parsedContent = {
            festivals: [],
            customs: [],
            etiquette: { dos: [], donts: [] },
            language: [],
            food: '',
            tips: []
        };
        
        let currentSection = null;
        
        for (const line of lines) {
            if (/FESTIVALS:/i.test(line)) {
                currentSection = 'festivals';
            } else if (/CUSTOMS:/i.test(line)) {
                currentSection = 'customs';
            } else if (/DOS:/i.test(line)) {
                currentSection = 'dos';
            } else if (/DONTS?:/i.test(line)) {
                currentSection = 'donts';
            } else if (/PHRASES:/i.test(line)) {
                currentSection = 'language';
            } else if (/FOOD:/i.test(line)) {
                currentSection = 'food';
            } else if (/TIPS:/i.test(line)) {
                currentSection = 'tips';
            } else if (line.startsWith('-') || line.startsWith('•')) {
                const cleanLine = line.replace(/^[-•*]\s*/, '');
                if (currentSection === 'festivals') parsedContent.festivals.push(cleanLine);
                else if (currentSection === 'customs') parsedContent.customs.push(cleanLine);
                else if (currentSection === 'dos') parsedContent.etiquette.dos.push(cleanLine);
                else if (currentSection === 'donts') parsedContent.etiquette.donts.push(cleanLine);
                else if (currentSection === 'language') parsedContent.language.push(cleanLine);
                else if (currentSection === 'tips') parsedContent.tips.push(cleanLine);
            } else if (currentSection === 'food' && line.length > 10) {
                parsedContent.food += (parsedContent.food ? ' ' : '') + line;
            }
        }
        
        res.json({
            success: true,
            destination,
            culturalInsights: parsedContent,
            language,
            generatedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error('Cultural insights error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch cultural insights',
            message: error.message
        });
    }
});

// Smart Planner API - Advanced trip planning with multi-destination support
app.post('/api/planner/smart', async (req, res) => {
    try {
        const { destinations, duration, budget, interests, preferences } = req.body;
        
        const plannerPrompt = `Create a multi-destination trip plan for India.

Destinations: ${Array.isArray(destinations) ? destinations.join(' → ') : destinations}
Duration: ${duration} days
Budget: ${budget} per person
Interests: ${interests.join(', ')}

Format your response as follows:

ROUTE:
- City 1 (X days)
- City 2 (Y days)
- etc.

TIMELINE:
Day 1-2: City - Activities
Day 3-4: City - Activities
etc.

RECOMMENDATIONS:
- Recommendation 1
- Recommendation 2
- etc.

TIPS:
- Tip 1
- Tip 2
- etc.

Keep it concise and practical.`;
        
        const smartPlan = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are an expert travel planner specializing in multi-city Indian tours with budget optimization." },
                { role: "user", content: plannerPrompt }
            ],
            temperature: 0.7,
            max_tokens: 1500
        });
        
        const content = smartPlan.data.choices[0].message.content;
        
        // Parse plain text response
        const lines = content.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        
        const parsedPlan = {
            route: [],
            timeline: [],
            recommendations: [],
            tips: []
        };
        
        let currentSection = null;
        
        for (const line of lines) {
            if (/ROUTE:/i.test(line)) {
                currentSection = 'route';
            } else if (/TIMELINE:/i.test(line)) {
                currentSection = 'timeline';
            } else if (/RECOMMENDATIONS:/i.test(line)) {
                currentSection = 'recommendations';
            } else if (/TIPS:/i.test(line)) {
                currentSection = 'tips';
            } else if (line.startsWith('-') || line.startsWith('•') || /^Day\s+\d/.test(line)) {
                const cleanLine = line.replace(/^[-•*]\s*/, '');
                if (currentSection === 'route') {
                    parsedPlan.route.push(cleanLine);
                } else if (currentSection === 'timeline') {
                    parsedPlan.timeline.push(cleanLine);
                } else if (currentSection === 'recommendations') {
                    parsedPlan.recommendations.push(cleanLine);
                } else if (currentSection === 'tips') {
                    parsedPlan.tips.push(cleanLine);
                }
            }
        }
        
        res.json({
            success: true,
            smartPlan: parsedPlan,
            totalDuration: duration,
            estimatedBudget: budget,
            generatedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error('Smart planner error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to create smart plan',
            message: error.message
        });
    }
});

// Budget calculator with group split functionality
app.post('/api/budget/calculate', async (req, res) => {
    try {
        const { itinerary, numberOfPeople, splitEqually } = req.body;
        
        const budgetPrompt = `Calculate budget for this trip (${numberOfPeople} people, ${splitEqually ? 'equal split' : 'individual'}):

Provide estimates in INR:
- Transport: ₹X
- Stay: ₹Y  
- Food: ₹Z
- Activities: ₹A
- Total: ₹Total
- Per Person: ₹PerPerson

Keep it simple with realistic Indian prices.`;
        
        const budgetAnalysis = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a budget travel expert helping travelers optimize costs in India." },
                { role: "user", content: budgetPrompt }
            ],
            temperature: 0.7,
            max_tokens: 800
        });
        
        const budgetContent = budgetAnalysis.data.choices[0].message.content;
        
        // Simple number extraction
        const extractAmount = (text, key) => {
            const regex = new RegExp(`${key}[:\\s]*₹?([\\d,]+)`, 'i');
            const match = text.match(regex);
            return match ? match[1].replace(/,/g, '') : '0';
        };
        
        const breakdown = {
            breakdown: {
                transport: extractAmount(budgetContent, 'Transport'),
                stay: extractAmount(budgetContent, 'Stay|Accommodation'),
                food: extractAmount(budgetContent, 'Food'),
                activities: extractAmount(budgetContent, 'Activities')
            },
            total: extractAmount(budgetContent, 'Total'),
            perPerson: extractAmount(budgetContent, 'Per Person')
        };
        
        res.json({
            success: true,
            budgetBreakdown: breakdown,
            numberOfPeople,
            generatedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error('Budget calculator error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to calculate budget'
        });
    }
});

// Eco-friendly route suggestions
app.post('/api/eco/routes', async (req, res) => {
    try {
        const { origin, destination, preferences } = req.body;
        
        const ecoPrompt = `Eco-friendly travel options from ${origin} to ${destination}, India:

Provide:
- Eco Score: X/100
- Best green transport option
- Carbon savings estimate
- 2-3 eco-friendly recommendations

Keep it brief and practical.`;
        
        const ecoAnalysis = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are an eco-tourism expert promoting sustainable travel in India." },
                { role: "user", content: ecoPrompt }
            ],
            temperature: 0.7,
            max_tokens: 700
        });
        
        const ecoContent = ecoAnalysis.data.choices[0].message.content;
        
        // Extract eco score
        const scoreMatch = ecoContent.match(/eco\s+score[:\s]*(\d+)/i);
        const ecoScore = scoreMatch ? parseInt(scoreMatch[1]) : 75;
        
        // Extract recommendations
        const recommendations = ecoContent.replace(/eco\s+score[:\s]*\d+/i, '').trim();
        
        res.json({
            success: true,
            ecoRoutes: {
                ecoScore: ecoScore,
                recommendations: recommendations
            },
            origin,
            destination,
            generatedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error('Eco routes error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to generate eco routes'
        });
    }
});

// Helper function to calculate visit score
function calculateVisitScore(temp, humidity, rainDays) {
    let score = 100;
    
    // Temperature scoring (ideal: 15-28°C)
    if (temp < 15 || temp > 35) score -= 30;
    else if (temp < 20 || temp > 32) score -= 15;
    
    // Humidity scoring (ideal: 40-70%)
    if (humidity < 30 || humidity > 80) score -= 20;
    else if (humidity < 40 || humidity > 75) score -= 10;
    
    // Rain scoring
    score -= (rainDays * 5);
    
    return Math.max(0, Math.min(100, score));
}

// Start server
app.listen(PORT, () => {
    console.log(`🚀 BharatTrip AI Backend running on http://localhost:${PORT}`);
    console.log(`📍 API Endpoints:`);
    console.log(`   - Health Check: GET /api/health`);
    console.log(`   - Chatbot: POST /api/chatbot`);
    console.log(`   - Weather: GET /api/weather/:location`);
    console.log(`   - Places Search: POST /api/places/search`);
    console.log(`   - Nearby Places: POST /api/places/nearby`);
    console.log(`   - Geocoding: GET /api/geocode/:address`);
    console.log(`   - Trip Planning: POST /api/trip/plan`);
    console.log(`   - 🧠 AI Recommendations: POST /api/recommendations/analyze`);
    console.log(`   - 👥 Crowd Density: POST /api/crowd/density`);
    console.log(`   - 🚇 Transport Routes: POST /api/transport/routes`);
    console.log(`   - 🌦️ Climate Trends: GET /api/climate/trends/:destination`);
    console.log(`   - 🎭 Cultural Insights: POST /api/cultural/insights`);
    console.log(`   - 🗺️ Smart Planner: POST /api/planner/smart`);
    console.log(`   - 💰 Budget Calculator: POST /api/budget/calculate`);
    console.log(`   - 🌿 Eco Routes: POST /api/eco/routes`);
});
