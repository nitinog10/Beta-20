```
const axios = require('axios');
const dotenv = require('dotenv');
const { checkServerHealth } = require('./utils');

dotenv.config();

const API_BASE_URL = 'http://localhost:3001/api';

const colors = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    reset: '\x1b[0m'
};

async function testAPIs() {
    console.log('\n🧪 Testing BharatTrip AI APIs...\n');

    const testCases = [
        {
            name: 'Health Check',
            fn: async () => {
                const health = await axios.get(`${API_BASE_URL}/health`);
                console.log(`${colors.green}✓ Health Check: ${health.data.message}${colors.reset}\n`);
            }
        },
        {
            name: 'AI Chatbot',
            fn: async () => {
                const chatResponse = await axios.post(`${API_BASE_URL}/chatbot`, {
                    message: "What are the top 3 places to visit in Delhi?",
                    language: "en"
                });
                console.log(`${colors.green}✓ Chatbot Response: ${chatResponse.data.reply.substring(0, 100)}...${colors.reset}\n`);
            }
        },
        {
            name: 'Weather API',
            fn: async () => {
                const weather = await axios.get(`${API_BASE_URL}/weather/Delhi`);
                console.log(`${colors.green}✓ Weather: ${weather.data.current.name} - ${weather.data.current.main.temp}°C${colors.reset}\n`);
            }
        },
        {
            name: 'Geocoding',
            fn: async () => {
                const geocode = await axios.get(`${API_BASE_URL}/geocode/Taj Mahal Agra`);
                console.log(`${colors.green}✓ Geocoding: Found ${geocode.data.formatted_address}${colors.reset}\n`);
            }
        },
        {
            name: 'Places Search',
            fn: async () => {
                const places = await axios.post(`${API_BASE_URL}/places/search`, {
                    query: "restaurants in Mumbai",
                    location: { lat: 19.0760, lng: 72.8777 },
                    radius: 5000
                });
                console.log(`${colors.green}✓ Places: Found ${places.data.places.length} restaurants${colors.reset}\n`);
            }
        },
        {
            name: 'Trip Planning AI',
            fn: async () => {
                const trip = await axios.post(`${API_BASE_URL}/trip/plan`, {
                    destination: "Goa",
                    interests: ["beaches", "food"],
                    duration: 3,
                    budget: "medium",
                    travelMode: "flight"
                });
                console.log(`${colors.green}✓ Trip Plan: Generated successfully${colors.reset}\n`);
            }
        },
        {
            name: 'Smart Insights Analysis',
            fn: async () => {
                const insights = await axios.post(`${API_BASE_URL}/recommendations/analyze`, {
                    destination: "Mumbai",
                    dates: { start: "2024-11-01", end: "2024-11-05" },
                    interests: ["heritage", "food"]
                });
                console.log(`${colors.green}✓ Smart Insights: Visit Score = ${insights.data.bestVisitScore}/100${colors.reset}\n`);
            }
        },
        {
            name: 'Crowd Density Analysis',
            fn: async () => {
                const crowd = await axios.post(`${API_BASE_URL}/crowd/density`, {
                    name: "India Gate",
                    location: { lat: 28.6129, lng: 77.2295 }
                });
                console.log(`${colors.green}✓ Crowd Density: ${crowd.data.currentCrowd.level} (${crowd.data.currentCrowd.percentage}%)${colors.reset}\n`);
            }
        },
        {
            name: 'Climate Trends',
            fn: async () => {
                const climate = await axios.get(`${API_BASE_URL}/climate/trends/Delhi?months=6`);
                console.log(`${colors.green}✓ Climate Trends: Analysis generated for 6 months${colors.reset}\n`);
            }
        }
    ];

    for (const test of testCases) {
        console.log(`${test.name}...`);
        try {
            await test.fn();
        } catch (error) {
            console.log(`${colors.red}✗ ${test.name} Failed: ${error.message}${colors.reset}`);
            if (test.name === 'AI Chatbot') {
                console.log(`${colors.yellow}  Check your OpenAI API key in.env${colors.reset}`);
            } else if (test.name === 'Weather API') {
                console.log(`${colors.yellow}  Check your OpenWeatherMap API key in.env${colors.reset}`);
            } else if (test.name === 'Geocoding') {
                console.log(`${colors.yellow}  Check your Google Maps API key in.env${colors.reset}`);
            } else if (test.name === 'Places Search') {
                console.log(`${colors.yellow}  Ensure Places API is enabled in Google Cloud Console${colors.reset}`);
            }
            console.log();
        }
    }

    console.log('\n📊 API Test Summary:');
    console.log('====================');
    console.log('Tested 9 API endpoints:');
    console.log('✓ Core APIs: Health, Weather, Geocoding');
    console.log('✓ AI Features: Chatbot, Trip Planning');
    console.log('✓ Smart Insights: Recommendations, Crowd, Climate');
    console.log('\nIf any tests failed, check:');
    console.log('1. Your.env file has all required API keys');
    console.log('2. API keys are valid and active');
    console.log('3. Required Google APIs are enabled');
    console.log('4. You have sufficient API credits/quota\n');
}

checkServerHealth(`${API_BASE_URL}/health`, testAPIs);
```