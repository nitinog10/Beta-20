```
// Backend Server for BharatTrip AI
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer');
const { Configuration, OpenAIApi } = require('openai');
const fs = require('fs');
const util = require('util');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../')));

// File storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/reviews'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Utility functions
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const getReviews = async () => {
    try {
        const data = await readFileAsync(path.join(__dirname, '../uploads/reviews/reviews.json'), 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading reviews file:', error);
        return [];
    }
};

const saveReviews = async (reviews) => {
    try {
        await writeFileAsync(path.join(__dirname, '../uploads/reviews/reviews.json'), JSON.stringify(reviews, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing reviews file:', error);
    }
};

// Reviews endpoints
app.post('/api/reviews', upload.single('image'), async (req, res) => {
    try {
        const { userId, placeId, rating, comment, title } = req.body;
        const imagePath = req.file? `/uploads/reviews/${req.file.filename}` : null;

        const review = {
            id: `review_${Date.now()}`,
            userId,
            placeId,
            rating: parseInt(rating),
            comment,
            title,
            imagePath,
            createdAt: new Date().toISOString(),
            likes: 0,
            replies: []
        };

        const reviews = await getReviews();
        reviews.push(review);
        await saveReviews(reviews);

        res.json({ success: true, review });
    } catch (error) {
        console.error('Error saving review:', error);
        res.status(500).json({ success: false, error: 'Failed to save review' });
    }
});

app.get('/api/reviews/:placeId', async (req, res) => {
    try {
        const { placeId } = req.params;
        const reviews = await getReviews();
        const placeReviews = reviews.filter(review => review.placeId === placeId);
        res.json({ success: true, reviews: placeReviews });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch reviews' });
    }
});

// Tourist Guide Data
const touristGuides = {
    "golden-temple": [
        {
            id: "guide1",
            name: "Harpreet Singh",
            experience: "10+ years",
            languages: ["English", "Hindi", "Punjabi"],
            speciality: "Religious & Cultural Tours",
            rating: 4.8,
            contact: "+91-9876543210",
            image: "/guide-images/harpreet.jpg",
            background: "Expert in Sikh history and Golden Temple architecture. Certified guide with extensive knowledge of Punjab's culture.",
            price: "₹2000/day",
            reviews: 150
        },
        {
            id: "guide2",
            name: "Mandeep Kaur",
            experience: "8 years",
            languages: ["English", "Hindi", "Punjabi", "French"],
            speciality: "Heritage Walks",
            rating: 4.7,
            contact: "+91-9876543211",
            image: "/guide-images/mandeep.jpg",
            background: "Former history professor, now a full-time guide. Expert in local cuisine and traditions.",
            price: "₹1800/day",
            reviews: 120
        }
    ],
    "kedarnath": [
        {
            id: "guide3",
            name: "Rajesh Rawat",
            experience: "15+ years",
            languages: ["English", "Hindi", "Garhwali"],
            speciality: "Himalayan Treks & Temple History",
            rating: 4.9,
            contact: "+91-9876543212",
            image: "/guide-images/rajesh.jpg",
            background: "Local mountaineer and spiritual guide. Expert in Kedarnath temple history and safe mountain navigation.",
            price: "₹2500/day",
            reviews: 200
        },
        {
            id: "guide4",
            name: "Sunita Negi",
            experience: "12 years",
            languages: ["English", "Hindi", "Garhwali", "Sanskrit"],
            speciality: "Spiritual Tours",
            rating: 4.8,
            contact: "+91-9876543213",
            image: "/guide-images/sunita.jpg",
            background: "Sanskrit scholar and experienced trek guide. Deep knowledge of local mythology and customs.",
            price: "₹2200/day",
            reviews: 180
        }
    ]
};

const defaultGuides = [
    {
        id: "guide-default1",
        name: "Rahul Sharma",
        experience: "7 years",
        languages: ["English", "Hindi"],
        speciality: "General Tourism",
        rating: 4.6,
        contact: "+91-9876543214",
        image: "/guide-images/rahul.jpg",
        background: "Professional tour guide with knowledge of multiple Indian destinations. Expert in local history and culture.",
        price: "₹1500/day",
        reviews: 90
    }
];

// Tourist Guide Endpoints
app.get('/api/tourist-guides/:location', (req, res) => {
    try {
        const { location } = req.params;
        const locationGuides = touristGuides[location] || defaultGuides;
        res.json({ success: true, guides: locationGuides });
    } catch (error) {
        console.error('Error fetching tourist guides:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch tourist guides' });
    }
});

// OpenAI Configuration
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
        
        const start = new Date(startDate);
        const end = new Date(endDate);
        const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
        
        console.log(`[Itinerary] Generating ${duration}-day itinerary for ${destination} (${startDate} to ${endDate})`);
        
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
    }${duration > 1? `,
    {
      "day": 2,
      "title": "Day 2: Exploration",
      "activities": [...]
    }` : ''}${duration > 2? `
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
            const cleanedResponse = responseText.replace(/```json\n?|\n?```/g, '');
            itineraryData = JSON.parse(cleanedResponse);
            
            if (!itineraryData.dailyPlan || itineraryData.dailyPlan.length!== duration) {
                console.log(`Warning: Generated ${itineraryData.dailyPlan?.length || 0} days, expected ${duration}. Adjusting...`);
                
                if (itineraryData.dailyPlan && itineraryData.dailyPlan.length < duration) {
                    for (let i = itineraryData.dailyPlan.length + 1; i <= duration; i++) {
                        itineraryData.dailyPlan.push({
                            day: i,
                            title: `Day ${i}: ${i === duration? 'Departure & Final Experiences' : 'Continued Exploration'}`,
                            activities: [
                                {
                                    name: `Day ${i} Activities`,
                                    description: `Explore more of ${destination} with activities suited to your interests: ${interest