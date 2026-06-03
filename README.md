# Beta-20

## Overview

BharatTrip AI is an intelligent travel planning platform tailored for India. It leverages AI to provide personalized trip recommendations, cultural insights, and smart multi-city planning. The project is built using a React frontend and a Node.js backend, with additional scripts for environment setup, backend checks, and automated fixes. The repository includes detailed documentation for quick start, feature showcase, troubleshooting, and new features integration. The platform is intended for travel enthusiasts and planners looking for a smart, AI-driven approach to trip planning in India. The folder structure is organized to separate frontend, backend, and static assets, with batch and shell scripts for environment and service management.

## Architecture

```markdown
## Architecture

### Overview
The BharatTrip AI project is structured to facilitate easy setup, development, and maintenance. The codebase is organized into distinct layers and modules, with clear documentation and automation scripts to streamline common tasks.

### Layers and Modules
The project is divided into the following main layers and modules:

- **Frontend**: Contains the React application responsible for the user interface and user interactions.
- **Backend**: Houses the server-side logic, API endpoints, and data processing scripts.
- **Documentation**: Includes markdown files that provide guides, setup instructions, feature showcases, and troubleshooting tips.
- **Automation Scripts**: Batch and shell scripts that automate common tasks such as environment setup, backend checks, and application restarts.
- **Assets**: Contains images and other static assets used by the application.

### Data Flow
Data flows through the system in the following manner:
1. **User Interaction**: Users interact with the frontend via the React application.
2. **API Requests**: The frontend sends API requests to the backend for data retrieval and processing.
3. **Backend Processing**: The backend processes these requests, interacts with any necessary databases or external services, and generates responses.
4. **Response Handling**: The frontend receives the responses and updates the UI accordingly.

### Key Design Patterns
- **MVC (Model-View-Controller)**: The backend follows an MVC pattern, separating concerns into models (data), views (responses), and controllers (request handling).
- **Modularization**: The codebase is modular, with distinct files and directories for different functionalities (e.g., `backend/generate-alternatives.js` for alternative trip generation).
- **Environment Configuration**: Uses environment variables for configuration, stored in files like `backend/env.example`.

### Main Entry Points
- **Frontend**: The main entry point for the React application is `index.html`, which bootstraps the React app.
- **Backend**: The primary entry point for the backend server is `backend/server.js`, which initializes the Express server and defines API routes.
- **Automation Scripts**: Key scripts include `setup-env.bat` and `setup-env.sh` for environment setup, and `start-react.bat` and `start-react.sh` for starting the React application.

### Practical Notes for Developers
- **Environment Setup**: Use `setup-env.bat` or `setup-env.sh` to configure the environment variables.
- **Running the Application**: Start the React frontend with `start-react.bat` or `start-react.sh`, and ensure the backend is running with `backend/server.js`.
- **Documentation**: Refer to `README.md` and other markdown files for detailed guides and instructions.
- **Automation**: Utilize batch files like `CHECK_BACKEND.bat` and `RESTART_BACKEND.bat` for common tasks.
```

## Folder Structure

```
├── AI_TRIP_ADVISOR_CONFIG.md
├── APPLY_FIXES.bat
├── CHECK_BACKEND.bat
├── CLEANUP_COMPLETE.md
├── FEATURES_SHOWCASE.md
├── FINAL_SUMMARY.md
├── FIX_NOW.bat
├── NEW_FEATURES.md
├── PERSONALIZED_TRIP_PLANNER_INTEGRATION.md
├── QUICK_START.md
├── REACT_VERSION_GUIDE.md
├── README.md
├── RESTART_BACKEND.bat
├── SMART_INSIGHTS_GUIDE.md
├── TROUBLESHOOTING.md
├── bharattripai.html
├── image.png
├── index.html
├── setup-env.bat
├── setup-env.sh
├── start-react.bat
├── start-react.sh
├── temp_planner.txt
├── test.html
├── trip-planner.html
├── ziro.png
├── Beach images data/
│   ├── Agonda Beach.jpg
│   ├── Auroville Beach.jpg
│   ├── Baga Beach.jpg
│   ├── Cherai Beach.jpg
│   ├── Colva Beach.jpg
│   ├── Digha Beach.jpg
│   ├── Ganpatipule Beach.png
│   ├── Gokarna Beach.jpg
│   ├── Kovalam Beach.jpg
│   ├── Mandrem Beach.jpg
│   ├── Marina Beach.jpg
│   ├── Om Beach.jpg
│   ├── Palolem Beach.jpg
│   ├── Paradise Beach.jpg
│   ├── Puri Beach.jpg
│   ├── Radhanagar-Beach.png
│   ├── Rushikonda Beach.jpg
│   ├── Tarkarli Beach.png
│   ├── Varkala Beach.jpg
│   ├── Velsao Beach.jpg
│   └── image.png
├── backend/
│   ├── README.md
│   ├── env.example
│   ├── generate-alternatives.js
│   ├── package.json
│   ├── server.js
│   └── test-apis.js
├── mountain images data/
│   ├── Anamudi (1).jpg
│   ├── Aravalli Range.jpg
│   ├── Chembra Peak.png
│   ├── Dzukou Valley.jpg
│   ├── Eastern Ghats.jpg
│   ├── Himalayan Ladakh Range.jpg
│   ├── Kailash Range.jpg
│   ├── Kamet.jpg
│   ├── Kedarnath.jpg
│   ├── Kudremukh.jpg
│   ├── Nanda Devi.jpg
│   ├── Nilgiri Hills.jpg
│   ├── Nun Kun (Nun Peak).jpg
│   ├── Pir Panjal Range.jpg
│   ├── Sandakphu.jpg
│   ├── Stok Kangri.jpg
│   ├── Trishul.jpg
│   ├── Tungnath.jpg
│   ├── Western Ghats.jpg
│   └── kangchenjunga.jpeg
├── nitinog10-Beta-20-fe6032d/
│   ├── AI_TRIP_ADVISOR_CONFIG.md
│   ├── APPLY_FIXES.bat
│   ├── CHECK_BACKEND.bat
│   ├── CLEANUP_COMPLETE.md
│   ├── FEATURES_SHOWCASE.md
│   ├── FINAL_SUMMARY.md
│   ├── FIX_NOW.bat
│   ├── NEW_FEATURES.md
│   ├── PERSONALIZED_TRIP_PLANNER_INTEGRATION.md
│   ├── QUICK_START.md
│   ├── REACT_VERSION_GUIDE.md
│   ├── README.md
│   ├── RESTART_BACKEND.bat
│   ├── SMART_INSIGHTS_GUIDE.md
│   ├── TROUBLESHOOTING.md
│   ├── bharattripai.html
│   ├── image.png
│   ├── index.html
│   ├── setup-env.bat
│   ├── setup-env.sh
│   ├── start-react.bat
│   ├── start-react.sh
│   ├── temp_planner.txt
│   ├── test.html
│   ├── trip-planner.html
│   ├── ziro.png
│   ├── Beach images data/
│   │   ├── Agonda Beach.jpg
│   │   ├── Auroville Beach.jpg
│   │   ├── Baga Beach.jpg
│   │   ├── Cherai Beach.jpg
│   │   ├── Colva Beach.jpg
│   │   ├── Digha Beach.jpg
│   │   ├── Ganpatipule Beach.png
│   │   ├── Gokarna Beach.jpg
│   │   ├── Kovalam Beach.jpg
│   │   ├── Mandrem Beach.jpg
│   │   ├── Marina Beach.jpg
│   │   ├── Om Beach.jpg
│   │   ├── Palolem Beach.jpg
│   │   ├── Paradise Beach.jpg
│   │   ├── Puri Beach.jpg
│   │   ├── Radhanagar-Beach.png
│   │   ├── Rushikonda Beach.jpg
│   │   ├── Tarkarli Beach.png
│   │   ├── Varkala Beach.jpg
│   │   ├── Velsao Beach.jpg
│   │   └── image.png
│   ├── backend/
│   │   ├── README.md
│   │   ├── env.example
│   │   ├── generate-alternatives.js
│   │   ├── package.json
│   │   ├── server.js
│   │   └── test-apis.js
│   ├── mountain images data/
│   │   ├── Anamudi (1).jpg
│   │   ├── Aravalli Range.jpg
│   │   ├── Chembra Peak.png
│   │   ├── Dzukou Valley.jpg
│   │   ├── Eastern Ghats.jpg
│   │   ├── Himalayan Ladakh Range.jpg
│   │   ├── Kailash Range.jpg
│   │   ├── Kamet.jpg
│   │   ├── Kedarnath.jpg
│   │   ├── Kudremukh.jpg
│   │   ├── Nanda Devi.jpg
│   │   ├── Nilgiri Hills.jpg
│   │   ├── Nun Kun (Nun Peak).jpg
│   │   ├── Pir Panjal Range.jpg
│   │   ├── Sandakphu.jpg
│   │   ├── Stok Kangri.jpg
│   │   ├── Trishul.jpg
│   │   ├── Tungnath.jpg
│   │   ├── Western Ghats.jpg
│   │   └── kangchenjunga.jpeg
│   └── religion images data/
│       ├── Prem-Mandir-Vrindavan.jpg
│       ├── Rameshwaram.jpg
│       ├── Tajulmasajid bhopal.jpg
│       ├── delhi-gurudwara-bangla-sahib.jpg
│       ├── golden temple amritsar.jpeg
│       ├── jagannath puri.jpg
│       ├── kamakhya devi temple.jpg
│       ├── kedarnath.jpg
│       ├── sharif dargah ajmer.jpg
│       ├── shirdi.jpg
│       └── st john church McLeodGanj.jpg
└── religion images data/
    ├── Prem-Mandir-Vrindavan.jpg
    ├── Rameshwaram.jpg
    ├── Tajulmasajid bhopal.jpg
    ├── delhi-gurudwara-bangla-sahib.jpg
    ├── golden temple amritsar.jpeg
    ├── jagannath puri.jpg
    ├── kamakhya devi temple.jpg
    ├── kedarnath.jpg
    ├── sharif dargah ajmer.jpg
    ├── shirdi.jpg
    └── st john church McLeodGanj.jpg
```

## Dependencies

No dependency manifest found.

## File Documentation

### `AI_TRIP_ADVISOR_CONFIG.md`

#### Module Overview

This file provides the configuration details for the BharatTrip Maps AI, an intelligent Indian tourism map assistant embedded in the BharatTrip AI travel planning application. It outlines the setup, integration, and usage guidelines for the ElevenLabs voice assistant widget.

#### Dependencies

- **ElevenLabs Conversational AI**: Provides the voice assistant capabilities and integration framework.

#### Configuration

##### Agent Details
- **Name**: BharatTrip Maps AI
- **Agent ID**: `agent_1101k8xp04j6ebesx1jnqhm7djwb`
- **Type**: Conversational AI with voice capabilities
- **Language Support**: English, Hindi, and other Indian languages

##### System Prompt / Agent Instructions
```markdown
You are BharatTrip Maps AI, an intelligent Indian tourism map assistant built into the BharatTrip AI travel planning application.

Your role is to help travelers explore India by providing:

1. NEARBY ATTRACTIONS
   - Suggest popular tourist spots based on user's location
   - Provide historical context and cultural significance
   - Recommend best times to visit
   - Share visitor tips and crowd levels

2. LOCAL EATERIES & FOOD
   - Recommend authentic Indian restaurants and street food
   - Suggest must-try local dishes
   - Provide price ranges and dietary options
   - Share food safety tips

3. CULTURAL PLACES
   - Guide users to temples, mosques, churches, gurudwaras
   - Explain cultural etiquette and dress codes
   - Share festival dates and special events
   - Provide photography guidelines

4. EVENTS & FESTIVALS
   - Inform about ongoing local events
   - Share festival calendars
   - Suggest cultural performances
   - Recommend local markets and fairs

5. TRAVEL ROUTES & NAVIGATION
   - Suggest optimal routes between destinations
   - Provide travel mode recommendations (train, bus, flight, car)
   - Share travel time estimates
   - Warn about traffic or weather conditions

6. MAP GUIDANCE
   - Help users navigate the interactive weather map
   - Explain weather layer meanings (temperature, wind, precipitation, clouds, pressure)
   - Guide on switching between map styles (satellite, dark, terrain)
   - Assist with location search and live location features

INTERACTION STYLE:
- Be conversational and friendly
- Use Indian context and cultural references
- Provide concise but helpful answers
- Ask clarifying questions when needed
- Use emojis occasionally for warmth (🗺️ 🏛️ 🍲 ☀️)
- Switch between English and Hindi if user prefers

CONSTRAINTS:
- Focus only on Indian destinations
- Provide realistic travel advice
- Don't make up information - say "I don't know" if unsure
- Prioritize user safety and comfort
- Respect cultural sensitivities
```

##### Configuration Steps
1. **Access ElevenLabs Dashboard**
   - Go to [ElevenLabs Conversational AI](https://elevenlabs.io/conversational-ai)
   - Log in to your account
   - Navigate to your agent: `agent_1101k8xp04j6ebesx1jnqhm7djwb`

2. **Update Agent Settings**
   - **Basic Information**
     ```markdown
     Name: BharatTrip Maps AI
     Description: Intelligent Indian tourism map assistant
     Primary Language: English (India)
     Secondary Languages: Hindi, Tamil, Bengali
     ```
   - **Voice Settings**
     ```markdown
     Voice: Select a warm, friendly Indian accent
     Speed: Medium (clear and easy to understand)
     Stability: High (consistent pronunciation)
     Similarity: Medium-High
     ```
   - **Conversation Settings**
     ```markdown
     First Message: "Hello! I'm BharatTrip Maps AI, your voice guide for exploring India. Ask me about nearby places, food recommendations, or how to use the weather map! 🗺️"

     Conversation Style: Friendly and informative
     Context Window: Large (remember conversation history)
     Max Response Length: 100-150 words (concise but helpful)
     ```

3. **Knowledge Base Integration (Optional)**
   - **Indian Destinations Database**
     ```markdown
     - Major cities and tourist spots
     - Popular festivals and dates
     - Common travel routes
     - Regional cuisines
     - Cultural etiquette guidelines
     ```
   - **App-Specific Knowledge**
     ```markdown
     - How to use the weather map
     - Weather layer explanations
     - Map style options
     - Search functionality
     - Live location features
     ```

4. **Testing Prompts**
   - **Navigation Help**
     ```markdown
     - "How do I search for a location?"
     - "What do the weather colors mean?"
     - "Show me the satellite view"
     ```
   - **Travel Recommendations**
     ```markdown
     - "What should I visit in Jaipur?"
     - "Where can I find good biryani?"
     - "Best time to visit Kerala?"
     ```
   - **Map Features**
     ```markdown
     - "What's the temperature layer?"
     - "How do I see wind patterns?"
     - "Can you show my current location?"
     ```

##### Widget Appearance
- **Position**
  ```css
  Bottom-right corner of screen
  Accessible from all pages
  Floating above content (z-index: 9999)
  ```
- **Visual Style**
  ```markdown
  Color Scheme: Matches app theme (red-orange gradient)
  Size: Compact when closed, expandable when active
  Animation: Smooth fade-in on page load
  Icon: Microphone or map marker
  ```

##### User Experience Flow
- **Scenario 1: New User Exploring Map**
  ```markdown
  User opens Explore page
  → Sees floating AI widget
  → Clicks widget
  → AI greets: "Hi! I see you're on the Explore page. Want to know how to use the weather map or looking for places nearby?"
  → User asks about weather layers
  → AI explains with visual references
  ```
- **Scenario 2: Planning Trip**
  ```markdown
  User on Trip Planner page
  → Clicks AI widget
  → Asks: "Best 3-day itinerary for Goa"
  → AI suggests beaches, water sports, food spots
  → Offers to help add destinations to planner
  ```
- **Scenario 3: Food Recommendation**
  ```markdown
  User searches "Mumbai" on map
  → Clicks AI widget
  → Asks: "Where should I eat?"
  → AI suggests street food at Juhu Beach, vada pav spots, fine dining
  → Provides price ranges and timings
  ```

##### Integration with App Features
- **Sync with Map**
  When user interacts with map, AI can reference:
  - Current map view location
  - Active weather layer
  - Selected map style
  - Search history
- **Sync with Trip

### `APPLY_FIXES.bat`

This batch file automates the process of applying fixes to the BharatTrip AI application, ensuring that backend processes are updated and the frontend is launched with the necessary changes.

#### Dependencies

- **taskkill**: Used to forcefully terminate processes.
- **timeout**: Provides a delay between steps.
- **cd**: Changes the current directory.
- **start**: Launches a new command prompt or application.

#### Functions

| Step | Command | Description |
|------|---------|-------------|
| 1/4  | `taskkill /F /IM node.exe` | Forcefully stops any running `node.exe` processes. |
| 2/4  | `start /MIN cmd /k "echo Starting BharatTrip AI Backend... && npm start"` | Opens a new minimized command prompt to start the backend. |
| 3/4  | `timeout /t 10 /nobreak` | Waits for 10 seconds to allow the backend to initialize. |
| 4/4  | `start "" "bharattrip-react.html"` | Launches the frontend application in a new window. |

#### Notes

- Ensure that the `backend` directory exists and contains the necessary `package.json` file with `npm start` script.
- The `bharattrip-react.html` file should be located in the same directory as this batch file.
- The script assumes the backend runs on `http://localhost:3001` and the frontend is an HTML file.
- After running the script, wait 5 seconds before pressing F5 to refresh the frontend and test the fixes.

### `CHECK_BACKEND.bat`

This batch file runs a series of checks to verify the status and functionality of the BharatTrip AI Backend service. It uses `curl` to test backend endpoints and provides a simple troubleshooting guide if issues are detected.

#### Dependencies

- **curl**: A command-line tool for making HTTP requests.

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `curl -s http://localhost:3001/api/health` | None | HTTP response | Checks the health endpoint of the backend service. |
| `curl -X POST http://localhost:3001/api/cultural/insights -H "Content-Type: application/json" -d "{\"destination\":\"Test\"}"` | None | HTTP response | Posts a test request to the cultural insights endpoint. |

#### Configuration

- **Endpoint URLs**:
  - Health check: `http://localhost:3001/api/health`
  - Cultural insights: `http://localhost:3001/api/cultural/insights`

#### Notes

- If the health check returns "OK", the backend is running.
- If the cultural insights endpoint returns an error, the backend may need to be restarted.
- Follow the troubleshooting steps listed in the script to restart the backend and ensure all endpoints are operational.

### `CLEANUP_COMPLETE.md`

##### Module Overview
This file documents the final cleanup and organization of the BharatTrip AI project, detailing removed files, current structure, and essential components for a production-ready deployment.

#### Dependencies

None. This is a markdown file providing project summary and instructions.

#### Functions

None. This is a markdown file providing project summary and instructions.

#### Configuration

None. This is a markdown file providing project summary and instructions.

#### Notes

- The project is now streamlined for easy deployment and maintenance.
- All unnecessary files have been removed, and only essential components remain.
- Comprehensive documentation is provided for quick setup and understanding of the project.

### `FEATURES_SHOWCASE.md`

#### Module Overview

This file provides a comprehensive overview of BharatTrip AI's features, showcasing its unique capabilities in travel planning for India. It highlights the integration of AI, real-time data, and user-centric design to offer unparalleled travel insights.

#### Dependencies

- **OpenWeatherMap API**: Provides real-time weather data and forecasts.
- **Google Maps API**: Offers location-based services, including geocoding and route optimization.
- **OpenAI GPT-3.5**: Powers the text-based AI chat for detailed trip planning.
- **ElevenLabs**: Enables the voice AI trip advisor for hands-free assistance.
- **Leaflet**: Used for rendering the interactive weather intelligence map.

#### Classes

| Class | Purpose | Key Methods |
|-------|---------|-------------|
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| N/A | N/A | N/A | N/A |

#### Configuration

- **Visit Score Algorithm**: Calculates a destination's visit score based on weather, crowd levels, and transport conditions.
- **Crowd Prediction Algorithm**: Estimates crowd levels considering day of the week, time of day, seasonal factors, and local events.
- **Route Optimization Algorithm**: Selects the best transport route based on user preferences, cost, time, and weather conditions.

#### Constants

- **Optimal Temperature Range**: 15-28°C for the visit score algorithm.
- **Optimal Humidity Range**: 40-70% for the visit score algorithm.
- **Rain Penalty**: -5 points per rainy day in the visit score algorithm.
- **Crowd Level Indicators**:
  - Green: Low crowd
  - Yellow: Medium crowd

#### Notes

- The visit score algorithm penalizes destinations with temperatures outside the optimal range, high humidity, rainy days, and peak crowd times.
- The crowd prediction algorithm significantly increases crowd levels for weekends, peak hours, tourist seasons, and local festivals.
- Route optimization prioritizes cost-effectiveness, time efficiency, and user comfort, adapting to real-time weather conditions.

### `FINAL_SUMMARY.md`

##### Module Overview
This file provides a comprehensive summary of the BharatTrip AI project after cleanup, detailing the changes made, current project structure, removed files, and key features. It serves as a quick reference for team members and new collaborators.

#### Dependencies

- None. This is a markdown file for documentation purposes.

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| None | N/A | N/A | This file does not contain any functions. |

#### Configuration

- None. Configuration details are mentioned within the context of the project structure and features.

#### Constants

- None. This file does not define any constants.

#### Notes

- This documentation is intended for internal use within the team and should not be exposed to external parties without review.
- The project is now significantly easier to maintain and understand, thanks to the cleanup.
- Ensure to follow the documentation order for onboarding new team members to get them up to speed quickly.
- The project is marked as production-ready, making it suitable for immediate deployment or demonstration in hackathons.

### `FIX_NOW.bat`

This batch file automates the process of resetting the BharatTrip AI application by stopping the old backend, starting a fresh backend, and opening the application in a browser.

#### Dependencies

- **taskkill**: Used to forcefully terminate running processes.
- **timeout**: Pauses the script execution for a specified number of seconds.
- **start**: Launches a new command prompt window and runs a specified program.

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `taskkill` | `/F /IM node.exe /FI "WINDOWTITLE eq npm*"` | None | Stops the old backend process. |
| `timeout` | `/t 2 /nobreak` | None | Pauses script for 2 seconds. |
| `timeout` | `/t 8 /nobreak` | None | Pauses script for 8 seconds. |
| `start` | `/MIN cmd /c "npm start"` | None | Starts the backend in a minimized command prompt. |
| `start` | `"bharattrip-react.html"` | None | Opens the application in the default browser. |

#### Notes

- Ensure that the backend directory is correctly referenced and contains the necessary `package.json` file.
- The script assumes the backend runs on `http://localhost:3001`.
- The script waits for the backend to initialize before opening the browser.
- The script pauses at the end to allow the user to observe the backend running and the application loading in the browser.

### `NEW_FEATURES.md`

##### Module Overview

This file documents the new features added to BharatTrip AI: Cultural Insights and Smart Multi-City Planner. It outlines what these features do, how to use them, example outputs, and technical implementation details.

#### Dependencies

- **OpenAI GPT-3.5**: For generating cultural insights.
- **React**: Frontend framework for building UI components.
- **Axios**: For making API calls.
- **Styled-components**: For theming and styling components.

#### Classes

None.

#### Functions

None.

#### Configuration

- **API Endpoints**:
  - `/api/cultural/insights`
  - `/api/planner/smart`
  - `/api/budget/calculate`
  - `/api/eco/routes`

#### Constants

None.

#### Notes

- **Cultural Insights**:
  - Uses AI to generate insights, so results may vary slightly.
  - Supports multiple languages, but currently limited to English, Hindi, and Tamil.
- **Smart Planner**:
  - Optimizes routes based on AI calculations, which may not always align with user preferences.
  - Eco score is an estimate and may not reflect actual carbon footprint.
- **General**:
  - Both features are fully responsive and work across desktop, tablet, and mobile devices.
  - UI follows consistent theme with gradient buttons, card-based design, and color-coded information.

### `PERSONALIZED_TRIP_PLANNER_INTEGRATION.md`

#### Module Overview

This document outlines the integration of the personalized AI trip planner into the BharatTrip AI application. It replaces the previous basic trip planner with enhanced features and improved user experience.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `axios` | For making HTTP requests to the backend API. |
| `react` | Core library for building the user interface. |
| `react-router-dom` | For handling navigation within the application. |
| `moment` | For date and time manipulation. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `TripPlannerPage` | Main component for the trip planner interface. | `handleInputChange`, `generateItinerary`, `fetchAlternatives` |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `generateItinerary` | `destination`, `interests`, `dates`, `budget`, `travelMode` | `itinerary` | Sends a request to the backend to generate a personalized itinerary. |
| `fetchAlternatives` | `activityId` | `alternatives` | Fetches alternative activities for a given activity ID. |

#### Configuration

| Key | Description |
| --- | --- |
| `API_BASE_URL` | The base URL for the backend API. |

#### Notes

- Ensure the backend server is running before testing the frontend.
- The system has fallback mechanisms to handle cases where new API endpoints are not available.
- The new design is responsive and should be tested on both mobile and desktop devices.
- The personalization feature relies on user preferences, which should be handled securely.

### `QUICK_START.md`

##### 🚀 BharatTrip AI - Quick Start Guide

This guide helps you set up and run the BharatTrip AI project quickly. It includes steps to configure your environment, install dependencies, and start the application.

#### Dependencies

- `npm`: Node Package Manager, used for installing project dependencies.
- `dotenv`: Loads environment variables from a `.env` file into `process.env`.

#### Setup Environment

Choose your OS to set up the environment:

##### Windows:

```bash
##### Double-click setup-env.bat
##### OR run in terminal:
setup-env.bat
```

##### Mac/Linux:

```bash
chmod +x setup-env.sh
./setup-env.sh
```

#### Install Backend

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
cd..
```

#### Start Everything

Start the application:

##### Windows:

```bash
##### Double-click start.bat
##### OR run:
start.bat
```

##### Mac/Linux:

```bash
chmod +x start.sh
./start.sh
```

#### That's it! 🎉

- Backend will start at: `http://localhost:3001`
- Your browser will open with BharatTrip AI
- Look for the green "Backend Connected" indicator

#### ✅ What's Working Now

- ✨ **AI Chatbot** - Ask travel questions in multiple languages
- 🗺️ **Interactive Maps** - With your Google Maps API
- 🌤️ **Live Weather** - Real weather data
- 🤖 **AI Trip Planning** - Personalized itineraries
- 📍 **Location Search** - Find any place in India

#### 🧪 Test Your Setup

```bash
cd backend
npm test
```

This will verify all your APIs are working correctly!

#### 🔒 Security Note

Your API keys are stored in `backend/.env`. **NEVER** share this file or commit it to Git!

---

#### 🎤 AI Trip Advisor (Voice Assistant)

The app includes an ElevenLabs voice assistant widget that appears as a floating button.

##### What It Does

- Voice-enabled travel guidance
- Helps navigate the weather map
- Recommends nearby attractions and food
- Answers travel questions about India

##### Configuration

To customize the voice assistant, follow the guide in [AI_TRIP_ADVISOR_CONFIG.md](AI_TRIP_ADVISOR_CONFIG.md)

The agent should be configured as **"BharatTrip Maps AI"** with expertise in:

- Indian tourism and destinations
- Map navigation and weather layers
- Travel routes and recommendations
- Local culture and food

---

#### 🚨 Troubleshooting

**"Backend Offline"?**

- Check if port 3001 is free
- Make sure you ran `npm install` in backend folder

**No AI Responses?**

- Your OpenAI key might need credits
- Check console for error messages

**Map Not Loading?**

- Refresh the page after backend connects
- Check browser console for errors

---

**Enjoy exploring India with BharatTrip AI! 🇮🇳**

### `REACT_VERSION_GUIDE.md`

#### Module Overview

This file provides a comprehensive guide to the React-based version of BharatTrip AI, detailing new features, architecture, usage, customization, performance, troubleshooting, security, deployment, and future enhancements.

#### Dependencies

- **React**: Core library for building UI components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Leaflet**: JavaScript library for interactive maps.
- **OpenAI API**: For AI-generated content and chatbot.
- **Google Maps API**: For geocoding and map display.
- **OpenWeather API**: For real-time weather data.

#### Classes

| Class | Purpose | Key Methods |
|-------|---------|-------------|
| App | Main application component | `render()` |
| HomePage | Displays the home page | `render()` |
| ExplorePage | Handles the explore page with map | `render()`, `handleSearch()` |
| TripPlannerPage | Manages trip planning functionality | `render()`, `generateItinerary()` |
| ChatPage | Interface for AI chatbot | `render()`, `sendMessage()` |
| ProfilePage | User profile and settings | `render()` |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `handleSearch` | `query` | `void` | Searches for a location and updates the map |
| `generateItinerary` | `destination`, `interests`, `dates` | `void` | Generates a trip itinerary using AI |
| `sendMessage` | `message` | `void` | Sends a message to the AI chatbot |

#### Configuration

- **API_BASE**: Base URL for backend API, default is `localhost:3001/api`.

#### Constants

- **WEATHER_LAYERS**: Array of weather layers for the map.

#### Notes

- Ensure all API keys are securely stored in the backend `.env` file.
- Frontend makes requests to the backend, which then calls external APIs.
- CORS is enabled for development; restrict in production.
- For production, deploy frontend to Vercel/Netlify and backend to Railway/Render.
- Future enhancements include user authentication, trip saving, real-time collaboration, and a mobile app.

### `README.md`

#### Module Overview

This file serves as the primary documentation for the `nitinog10/Beta-20` project, providing an overview of the project, its features, and instructions for getting started.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `React` | Frontend framework for building user interfaces |
| `Node.js` | Backend runtime environment |
| `npm` | Node package manager for managing project dependencies |

#### Project Structure

| Directory | Description |
| --- | --- |
| `Root Directory` | Contains configuration files, automation scripts, documentation, HTML files, and image assets |
| `backend/` | Houses backend services, server logic, environment configurations, and API test scripts |
| `Beach images data/` | Stores images used for showcasing or integrating into trip planning features |

#### Getting Started

##### Prerequisites

- Node.js
- npm

##### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/nitinog10/Beta-20.git
   cd Beta-20
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up the environment:
   ```sh
  ./setup-env.sh
   ```

##### Running the Project

- Start the React frontend:
  ```sh
 ./start-react.sh
  ```
- Start the Node.js backend:
  ```sh
  cd backend
  node server.js
  ```

#### Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

#### License

This project is licensed under the MIT License.

#### Notes

- Ensure you have the necessary permissions to execute the setup and start scripts.
- The `setup-env.sh` script may require administrative privileges depending on your system configuration.

### `RESTART_BACKEND.bat`

This batch file automates the restart process for the BharatTrip AI Backend service. It stops any existing backend processes, starts a fresh server instance, and notifies the user when the backend is ready to use.

#### Dependencies

No external dependencies are required for this script to function.

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `taskkill` | `/F /IM node.exe /FI "WINDOWTITLE eq npm*"` | N/A | Kills any running node processes with a title containing "npm". |
| `timeout` | `/t 2 /nobreak` | N/A | Pauses the script for 2 seconds. |
| `start` | `cmd /k "npm start"` | N/A | Starts a new command prompt and runs `npm start` in the `backend` directory. |

#### Configuration

No configuration is required for this script to function.

#### Notes

- Ensure that the backend directory is present in the same location as this script.
- This script assumes the backend runs on `http://localhost:3001`.
- The `pause` command at the end keeps the command window open until the user presses a key, allowing for manual verification of the backend status.

### `SMART_INSIGHTS_GUIDE.md`

#### Module Overview

This file provides a comprehensive guide on how the Smart Insights feature uses AI to analyze various data sources and deliver intelligent travel recommendations.

#### Dependencies

- **OpenWeatherMap API**: Provides real-time weather data.
- **Google Maps Directions API**: Offers route optimization and transport data.
- **Historical Data**: Used for crowd density pattern analysis.

#### Classes

| Class | Purpose | Key Methods |
|-------|---------|-------------|
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `calculateVisitScore` | `temp`, `humidity`, `rainDays` | `score` | Calculates a visit score based on temperature, humidity, and rain days. |

#### Configuration

- API keys for OpenWeatherMap and Google Maps stored in `.env` file.

#### Constants

- Ideal temperature range: 15-28°C
- Ideal humidity range: 40-70%
- Rain penalty: 5 points per rainy day

#### Notes

- Ensure backend is running and API keys are correctly set in `.env`.
- Destination should be a valid Indian city; consider adding state names for clarity.
- Low visit scores (<60) indicate unfavorable conditions; consider alternative dates or preparations.

### `TROUBLESHOOTING.md`

#### Module Overview

This file provides a troubleshooting guide for common issues encountered while working with the BharatTrip AI backend. It offers quick fixes, diagnostic steps, and preventive measures to ensure smooth operation.

#### Dependencies

None. This is a markdown file for documentation purposes.

#### Notes

- **Most Common Fix:** Restarting the backend resolves 90% of issues.
- Keep the backend terminal visible to catch errors immediately.
- Always restart the backend after making code changes.

#### Error Messages Decoded

| Error                  | Meaning                 | Fix                  |
|------------------------|-------------------------|----------------------|
| "Check backend connection" | Can't reach API         | Restart backend      |
| "404 Not Found"        | Endpoint missing        | Backend has old code |
| "500 Internal Error"   | Backend crashed         | Check terminal for errors |
| "Network error"        | Backend offline         | Start backend        |
| "Invalid API key"      | Wrong credentials       | Check .env file      |

#### Functions

None. This is a markdown file for documentation purposes.

#### Configuration

- Ensure `backend/.env` contains valid API keys.
- Verify `OPENAI_API_KEY` starts with `sk-`.
- Check API credits/quota.

#### Constants

None. This is a markdown file for documentation purposes.

### `bharattripai.html`

File too large for inline documentation.

### `index.html`

Empty file.

### `setup-env.bat`

**Module Overview**

This batch file sets up the environment for the BharatTrip AI project by creating a `.env` file from `env.config`. It checks if the `.env` file already exists and prompts the user to confirm if they want to overwrite it. If the file is created successfully, it informs the user that their API keys have been configured and provides important security notes.

**Dependencies**

This file does not rely on external libraries or dependencies.

**Functions**

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `echo` | None | None | Prints messages to the console. |
| `cd` | Directory path | None | Changes the current directory. |
| `set /p` | Variable, Prompt | User input | Prompts the user for input and stores it in a variable. |
| `if` | Condition | None | Conditionally executes code blocks. |
| `copy` | Source, Destination | None | Copies files from source to destination. |
| `pause` | None | None | Pauses execution and waits for user input. |

**Configuration**

No configuration settings are defined within this file.

**Notes**

- The `.env` file contains sensitive API keys for services like OpenAI, Weather API, and Google Maps.
- Never share or commit the `.env` file to version control.
- Keep API keys secret and consider regenerating them after development.
- If the `.env` file creation fails, manually rename `env.config` to `.env`.

### `setup-env.sh`

This script sets up the environment for the BharatTrip AI project by creating a `.env` file from `env.config` and prompting the user to overwrite it if it already exists.

#### Dependencies

No external dependencies are used in this script.

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `setup-env` | None | None | Main function to set up the environment. |

#### Configuration

No configuration is required for this script.

#### Notes

- The script checks if the `.env` file already exists and asks for confirmation before overwriting it.
- If the `.env` file creation fails, the user is instructed to manually rename `env.config` to `.env`.
- Important security notes are printed to remind users to keep `.env` and API keys secure.

### `start-react.bat`

**Module Overview**

This batch file initiates the BharatTrip AI application, starting both the backend server and the React frontend. It ensures the backend is running before launching the frontend in a browser.

**Dependencies**

- `cmd`: Command-line interpreter for executing backend server commands.
- `npm`: Node Package Manager for running the backend server.

**Functions**

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `start`  | URL        | None    | Opens a URL in the default browser. |

**Configuration**

- `backend`: Directory where the backend server is located.
- `bharattrip-react.html`: The entry point for the React frontend.

**Notes**

- The batch file waits 5 seconds after starting the backend to ensure it has time to initialize.
- To stop the application, close the backend terminal window.
- The backend runs on `http://localhost:3001` and the frontend is served via `bharattrip-react.html`.

### `start-react.sh`

#### Module Overview

The `start-react.sh` script initializes and starts the BharatTrip AI application, specifically the React frontend, and ensures the backend server is running. It's designed to streamline the development process by automating the startup sequence and opening the application in the default web browser.

#### Dependencies

- **Bash**: The script is written in Bash, leveraging its scripting capabilities to automate tasks.
- **Node.js**: Used to start the backend server via `npm start`.
- **OS Detection**: The script uses the `$OSTYPE` variable to determine the operating system and open the React application in the default browser.

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| None | None | None | This script does not define functions but contains a sequence of commands to start the backend server and open the React frontend. |

#### Notes

- The script assumes the backend server code is located in the `backend` directory and the React frontend is accessible via `bharattrip-react.html`.
- It waits for 5 seconds after starting the backend server to ensure it's up and running before opening the React application.
- The script uses `xdg-open` on Linux to open the browser, which should be available in most Linux distributions. If not, it falls back to a manual instruction.
- The script captures the backend server's PID and ensures it's terminated when the script is interrupted (e.g., by pressing Ctrl+C).
- Ensure the script has execute permissions (`chmod +x start-react.sh`) before running it.

By following these guidelines, you should be able to start the BharatTrip AI application with minimal manual intervention, streamlining your development workflow.

### `temp_planner.txt`

##### `temp_planner.txt` Documentation

#### Module Overview

This file defines the `EnhancedTripPlannerPage` component, which allows users to input travel preferences and generate a personalized itinerary using either an AI planner or a smart planner.

#### Dependencies

- `useState` from `react`: Manages component state.
- `fetch`: Makes HTTP requests to the backend API.

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `EnhancedTripPlannerPage` | None | JSX | Renders the trip planner page and handles user interactions. |
| `generateItinerary` | None | Promise | Sends user input to the backend to generate an itinerary. |
| `toggleInterest` | `interest` (string) | None | Toggles the selected interest in the form data. |
| `handleViewOnMap` | `location` (object) | None | Stores the selected location in local storage and navigates to the explore page. |

#### Notes

- The `generateItinerary` function validates user input before making the API call.
- The `activeTab` state determines which planner (AI or smart) is used to generate the itinerary.
- The component uses Tailwind CSS for styling.

### `test.html`

#### Module Overview

`test.html` is a simple web application showcasing a basic React setup with Tailwind CSS for styling. It includes a navigation bar that allows users to switch between a home page and a trip planner page.

#### Dependencies

| Dependency | Purpose |
| --- | --- |
| `react@17` | Core library for building user interfaces. |
| `react-dom@17` | Provides DOM-specific methods to render React components. |
| `@babel/standalone` | Allows us to write JSX and ES6+ code directly in HTML. |
| `tailwindcss` | Utility-first CSS framework for styling. |
| `font-awesome` | Provides icons for the navigation bar. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `App` | None | None | The main component that manages the state and renders the navigation and pages. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `App` | Main component for the application | `useState`, `setCurrentPage` |

#### Notes

- The application uses React hooks (`useState`) to manage state.
- The navigation bar dynamically changes styles based on the current page.
- The `type="text/babel"` attribute in the script tag allows Babel to transpile JSX and ES6+ syntax directly in the HTML file.
- Ensure the `id="root"` div exists in the HTML body for React to attach the application.

### `trip-planner.html`

##### `trip-planner.html` Documentation

#### Module Overview

This file defines the main interface for the BharatTrip AI Planner, a tool that allows users to generate travel itineraries using AI. It includes the UI components and logic for selecting trip details and displaying the generated itinerary.

#### Dependencies

- **Tailwind CSS**: Provides utility classes for styling.
- **Font Awesome**: Offers icon components.
- **React**: Core library for building the UI.
- **Babel**: Allows the use of modern JavaScript features.

#### Functions

| Function             | Parameters      | Returns         | Description                                                                                       |
|----------------------|-----------------|-----------------|---------------------------------------------------------------------------------------------------|
| `TripPlannerPage`    | None            | React Component | Main component that renders the trip planner interface and handles user interactions.            |
| `toggleInterest`     | `interest`      | None            | Toggles the selection of an interest, updating the `selectedInterests` state.                    |
| `isFormValid`        | None            | `boolean`       | Checks if the form inputs are valid before generating an itinerary.                              |
| `generateItinerary`  | None            | None            | Asynchronously generates an itinerary based on user inputs and updates the `itinerary` state.     |

#### Notes

- The `generateItinerary` function currently uses hardcoded data for demonstration purposes. In a real-world scenario, this would involve an API call to an AI service.
- The form validation in `isFormValid` ensures that essential fields are filled out before generating an itinerary.
- The UI is designed to be responsive, utilizing Tailwind CSS classes for layout and styling.

### `backend/README.md`

##### BharatTrip AI Backend Setup Guide

#### Module Overview

This `README.md` file provides a comprehensive guide for setting up and running the BharatTrip AI backend. It covers dependency installation, environment configuration, API endpoint details, testing instructions, troubleshooting tips, and deployment methods.

#### Dependencies

- `npm`: Package manager for Node.js
- `dotenv`: Loads environment variables from `.env` file
- `express`: Web framework for Node.js
- `axios`: Promise-based HTTP client for making API requests
- `openai`: Official SDK for interacting with OpenAI APIs
- `openweathermap`: SDK for accessing OpenWeatherMap APIs
- `@googlemaps/node-js-client`: Client library for Google Maps APIs

#### Configuration

- `.env`: Contains API keys and environment-specific configurations

#### API Endpoints

| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/health` | GET | Check if backend is running |
| `/api/chatbot` | POST | Interact with AI chatbot |
| `/api/weather/:location` | GET | Get weather for a location |
| `/api/weather/:location?lat=x&lon=y` | GET | Get weather by coordinates |
| `/api/places/search` | POST | Search for places |
| `/api/places/nearby` | POST | Find nearby places |
| `/api/geocode/:address` | GET | Convert address to coordinates |
| `/api/trip/plan` | POST | Plan a trip |
| `/api/landmark/recognize` | POST | Recognize landmarks from images |
| `/api/recommendations/analyze` | POST | Get AI-powered travel recommendations |
| `/api/crowd/density` | POST | Get real-time crowd density |
| `/api/transport/routes` | POST | Get public transport routes |
| `/api/climate/trends/:destination?months=x` | GET | Get climate trends analysis |

#### Testing the Backend

- Use `cURL` or the provided frontend (`bharattrip-integrated.html`) to test API endpoints.

#### Troubleshooting

- Check for common issues like port conflicts, missing dependencies, invalid API keys, and CORS settings.

#### Production Deployment

- Use `PM2` or `Docker` for deploying the backend in production.
- Set `NODE_ENV=production` and configure secure API keys and CORS origins.

#### API Rate Limits

- Be mindful of rate limits for external APIs like OpenAI, OpenWeatherMap, and Google Maps.

#### Support

- For issues, check console logs, verify API keys, ensure required Google APIs are enabled, and check network connectivity.

### `backend/env.example`

##### Module Overview

The `backend/env.example` file contains environment variable configurations for the BharatTrip AI backend. It serves as a template for developers to set up their local development environment by copying it to `.env` and filling in the necessary API keys and server configurations.

#### Dependencies

No direct imports are listed in this file, but it relies on environment variables to be set for the backend to function correctly.

#### Configuration

| Configuration | Purpose | Description |
|--------------|---------|-------------|
| `PORT`       | Server  | Port number for the backend server. |
| `OPENAI_API_KEY` | API | API key for accessing the OpenAI services. |
| `WEATHER_API_KEY` | API | API key for accessing the OpenWeatherMap services. |
| `GOOGLE_MAPS_API_KEY` | API | API key for accessing the Google Maps services. |

#### Notes

- Developers must copy this file to `.env` and replace placeholder values with actual API keys from respective service providers.
- Ensure the necessary APIs are enabled in the Google Cloud Console for the `GOOGLE_MAPS_API_KEY`.

### `backend/generate-alternatives.js`

##### Module Overview

The `backend/generate-alternatives.js` file is designed to generate alternative activities for a given day in an itinerary, using an AI model to suggest options based on the current plan, destination, and user preferences.

##### Dependencies

| Import | Purpose |
| --- | --- |
| `openai` | Provides access to the AI model for generating alternative activities. |
| `parseResponse`, `generateFallbackAlternatives` | Utility functions for handling the AI model's response and generating fallback alternatives. |

##### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `generateAlternatives` | `currentDay`, `currentActivities`, `destination`, `preferences` | `{ success: boolean, error: string, alternatives: array }` | Fetches alternative activities from the AI model and returns them, or fallback alternatives if an error occurs. |

##### Notes

- The function `generateAlternatives` relies on the `openai` module to interact with the AI model. Ensure the `openai-config.js` file is correctly configured with the necessary API keys and settings.
- The `parseResponse` function expects a JSON string from the AI model and validates its structure. If the response is invalid, an error is thrown.
- In case of an error while generating alternatives, the function returns a set of fallback alternatives defined in `generateFallbackAlternatives`.
- Always handle the `error` property in the returned object to manage any issues during the alternative generation process.

### `backend/package.json`

##### Backend `package.json`

#### Module Overview

This file defines the dependencies and scripts for the `bharattrip-ai-backend` project. It ensures that the backend server runs smoothly with necessary libraries and tools for development and testing.

#### Dependencies

| Package | Purpose |
| --- | --- |
| `express` | Provides a robust set of features for web and app servers. |
| `cors` | Enables cross-origin resource sharing. |
| `dotenv` | Loads environment variables from a `.env` file. |
| `axios` | Promise-based HTTP client for making API requests. |
| `openai` | Interface for interacting with the OpenAPI service. |
| `multer` | Middleware for handling multipart/form-data, used mainly for uploading files. |
| `nodemon` | Development tool that watches for file changes and restarts the server. |

#### Scripts

| Script | Purpose |
| --- | --- |
| `start` | Starts the server using `node server.js`. |
| `dev` | Starts the server in development mode with `nodemon`. |
| `test` | Runs the API tests using `node test-apis.js`. |
| `test:api` | Runs the API tests using `node test-apis.js`. |

#### Notes

- Ensure that all environment variables are set in the `.env` file before running the server.
- The `nodemon` script is only available in development mode. Use `start` for production.
- The `test` and `test:api` scripts are aliases and perform the same function.

### `backend/server.js`

##### backend/server.js Documentation

#### Module Overview

This file sets up and configures the backend server for BharatTrip AI. It handles API endpoints for reviews, tourist guides, chatbot, weather, places, and geocoding.

#### Dependencies

- `express`: Web framework for handling HTTP requests.
- `cors`: Middleware to enable Cross-Origin Resource Sharing.
- `axios`: Promise-based HTTP client for making API requests.
- `dotenv`: Loads environment variables from a `.env` file.
- `path`: Provides utilities for working with file and directory paths.
- `multer`: Middleware for handling `multipart/form-data`, primarily used for uploading files.
- `openai`: SDK for interacting with the OpenAI API.
- `fs`: Node.js file system module.
- `util`: Provides utility functions.

#### Functions

| Function        | Parameters                  | Returns                    | Description                                                                                       |
|-----------------|-----------------------------|----------------------------|---------------------------------------------------------------------------------------------------|
| `getReviews`    | None                        | Promise resolving to array | Reads and returns the reviews from the JSON file.                                                 |
| `saveReviews`   | `reviews` (array)           | Promise                    | Saves the reviews to the JSON file.                                                               |
| `readFileAsync` | `filename` (string), `encoding` (string) | Promise resolving to data  | Promisified version of `fs.readFile`.                                                             |
| `writeFileAsync`| `filename` (string), `data` (string), `encoding` (string) | Promise                    | Promisified version of `fs.writeFile`.                                                            |

#### Configuration

- `PORT`: Server port, defaults to 3001 if not set in environment variables.
- `WEATHER_API_KEY`: API key for OpenWeatherMap.
- `GOOGLE_MAPS_API_KEY`: API key for Google Maps.
- `OPENAI_API_KEY`: API key for OpenAI.

#### Constants

- `touristGuides`: Object containing predefined tourist guides for specific locations.
- `defaultGuides`: Array of default tourist guides to be used if no specific guides are found.

#### Notes

- Ensure environment variables are correctly set for API keys.
- File uploads are stored in `../uploads/reviews` directory.
- Geocoding fallback to Nominatim if Google Geocoding API returns no results.

### `backend/test-apis.js`

#### Module Overview

This file contains a script to test various API endpoints of the BharatTrip AI service. It ensures that all core, AI, and smart insights features are functioning correctly by sending requests and logging the responses.

#### Dependencies

| Import | Purpose |
|--------|---------|
| `axios` | HTTP client for making API requests. |
| `dotenv` | Loads environment variables from a `.env` file. |
| `checkServerHealth` | Utility function to check if the server is up before running tests. |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `testAPIs` | None | None | Executes a series of tests for different API endpoints and logs the results. |

#### Configuration

- `API_BASE_URL`: The base URL for the BharatTrip AI APIs.
- `colors`: An object containing ANSI color codes for console output.

#### Notes

- Ensure the `.env` file is properly configured with all necessary API keys.
- Verify that required Google APIs are enabled in the Google Cloud Console.
- Check for sufficient API credits/quota for each service being tested.
- The script will log specific troubleshooting tips if a test fails.

### `nitinog10-Beta-20-fe6032d/AI_TRIP_ADVISOR_CONFIG.md`

#### Module Overview

This file provides configuration details for the BharatTrip Maps AI voice assistant, a conversational AI integrated into the BharatTrip AI travel planning application. It guides users on setting up the assistant on the ElevenLabs dashboard, customizing its behavior, and integrating it with app features for an enhanced user experience.

#### Dependencies

- **ElevenLabs Conversational AI**: The platform hosting the voice assistant.
- **BharatTrip AI Application**: The travel planning app where the assistant is embedded.

#### Configuration

##### Agent Details
- **Name**: BharatTrip Maps AI
- **Agent ID**: `agent_1101k8xp04j6ebesx1jnqhm7djwb`
- **Type**: Conversational AI with voice capabilities
- **Language Support**: English, Hindi, and other Indian languages

##### System Prompt / Agent Instructions
Provides detailed instructions to be copied into the ElevenLabs agent configuration, defining the assistant's role, interaction style, constraints, and example responses.

##### Configuration Steps
Steps to access the ElevenLabs dashboard, update agent settings, and optionally integrate a knowledge base.

##### Widget Appearance
Specifies the position, visual style, and animation of the AI widget within the BharatTrip AI application.

##### User Experience Flow
Describes user scenarios for interacting with the AI, including exploring the map, planning a trip, and seeking food recommendations.

##### Integration with App Features
Details how the AI syncs with the map, trip planner, and chat features for a cohesive user experience.

##### Sample Conversation Scripts
Provides example dialogues between users and the AI for map guidance, destination recommendations, and weather assistance.

##### Success Metrics
Outlines metrics to track the effectiveness of the AI, including usage, feature adoption, and quality metrics.

##### Continuous Improvement
Guidelines for regular updates and integrating user feedback to enhance the AI's performance.

##### Troubleshooting
Common issues and solutions for problems like the widget not appearing, voice not working, and the AI not understanding queries.

##### Additional Resources
Links to ElevenLabs documentation, conversational AI best practices, Indian tourism guidelines, and Google Maps API documentation.

#### Notes

- Ensure the agent ID is correctly entered in the ElevenLabs dashboard.
- Regularly review and update the system prompt to align with app updates and user feedback.
- Monitor success metrics to identify areas for improvement.
- Keep user privacy and data security in mind when configuring and updating the AI.

### `nitinog10-Beta-20-fe6032d/APPLY_FIXES.bat`

##### nitin0g10-Beta-20-fe6032d/APPLY_FIXES.bat

#### Module Overview

This batch script automates the process of applying fixes to the BharatTrip AI application. It stops any running backend processes, starts the updated backend, waits for it to initialize, and then opens the fixed application in a browser.

#### Dependencies

- **taskkill**: Used to forcefully terminate processes.
- **timeout**: Used to add delays between steps.
- **cd**: Changes the current directory.
- **start**: Launches a new command prompt window or a program.

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `taskkill /F /IM node.exe` | None | None | Forcefully terminates all `node.exe` processes. |
| `start /MIN cmd /k "echo Starting BharatTrip AI Backend... && npm start"` | None | None | Opens a new command prompt in minimized mode to start the backend. |
| `start "" "bharattrip-react.html"` | None | None | Opens the fixed application in the default web browser. |

#### Notes

- Ensure that the `bharattrip-react.html` file is in the same directory as this script.
- The script assumes that the backend is located in a `backend` subdirectory.
- The script runs in a Windows environment and uses batch commands.
- The `timeout` commands add a delay to ensure that the backend has enough time to start and initialize.
- The script uses `echo` to provide visual feedback on the progress of the fixes being applied.
- After the browser opens, wait 5 seconds before pressing F5 to refresh and test the fixes.

### `nitinog10-Beta-20-fe6032d/CHECK_BACKEND.bat`

##### Module Overview

This file, `nitinog10-Beta-20-fe6032d/CHECK_BACKEND.bat`, is a batch script designed to verify the operational status of the BharatTrip AI Backend service. It performs health checks on the backend's main endpoint and tests a specific endpoint to ensure it's functioning correctly.

##### Dependencies

This script does not rely on external libraries or imports. It uses built-in `curl` commands to make HTTP requests.

##### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `curl` | URL, HTTP method, headers, data | HTTP response | Makes HTTP requests to backend endpoints |

##### Configuration

No configurable parameters are present in this script. It operates on fixed endpoints and data.

##### Notes

- The script checks the health endpoint at `http://localhost:3001/api/health`.
- If the backend is not running, it will return an error when testing the endpoint at `http://localhost:3001/api/cultural/insights`.
- In case of an error, the script provides a solution to restart the backend using `RESTART_BACKEND.bat`.
- The `pause` command at the end keeps the command window open until the user presses a key, allowing for manual inspection of the output.

### `nitinog10-Beta-20-fe6032d/CLEANUP_COMPLETE.md`

##### Module Overview
This file documents the final cleanup and organization of the BharatTrip AI project, detailing removed files, current structure, and essential documentation.

#### Dependencies

None. This is a markdown file providing project overview and cleanup summary.

#### Configuration

None. This file does not contain any configuration settings.

#### Notes

- The project is now production-ready and well-documented.
- All unnecessary files have been removed, leaving only essential components.
- The backend and frontend are fully integrated and tested.
- Deployment instructions and checklists are provided for easy setup.
- Comprehensive documentation ensures all team members can quickly get up to speed.

### `nitinog10-Beta-20-fe6032d/FEATURES_SHOWCASE.md`

##### Module Overview
This file showcases the complete features of BharatTrip AI, the intelligent travel platform for India. It highlights the unique selling points, technical innovations, and user benefits of the platform.

#### Dependencies

- **OpenWeatherMap API**: Provides real-time weather data.
- **Google Maps API**: Offers location search, geocoding, and route optimization.
- **OpenAI GPT-3.5**: Powers the text-based AI chat for trip planning.
- **ElevenLabs**: Enables the voice AI trip advisor.
- **Leaflet**: Used for rendering the interactive weather map.

#### Classes

No classes are defined in this markdown file.

#### Functions

No functions are defined in this markdown file.

#### Configuration

No configuration settings are specified in this markdown file.

#### Constants

No constants are defined in this markdown file.

#### Notes

- The file is primarily a showcase document, not a technical implementation.
- It highlights the competitive advantages and unique features of BharatTrip AI.
- The technical innovation section provides a high-level overview of the AI architecture and algorithms used.
- The impact metrics section demonstrates the benefits users can expect from using the platform.

### `nitinog10-Beta-20-fe6032d/FINAL_SUMMARY.md`

##### Module Overview
This file provides a comprehensive summary of the BharatTrip AI project after cleanup, detailing the changes made, current project structure, removed files, and key features. It serves as a guide for understanding the project's current state, how to run it, and what to showcase in a hackathon.

#### Dependencies

- None. This is a markdown file intended for documentation purposes only.

#### Configuration

- **Project Structure**: Clearly outlines the organization of the project post-cleanup.
- **Start Scripts**: Provides scripts for starting the project on different operating systems.
- **Environment Configuration**: Points to the `env.config` file within the backend folder for API keys.

#### Notes

- **Security**: Emphasizes the secure handling of API keys and the configuration of CORS.
- **Deployment**: Offers guidance on deploying both the frontend and backend, highlighting free and paid options.
- **Success Metrics**: Quantifies the improvements made through the cleanup process.
- **Next Steps**: Simplifies the process for running the project post-cleanup.

### `nitinog10-Beta-20-fe6032d/FIX_NOW.bat`

##### Module Overview

This batch file `FIX_NOW.bat` automates the process of fixing the BharatTrip AI system by stopping the old backend, starting a fresh backend, and opening the application in a browser. It ensures the system is reset and ready for use.

#### Dependencies

No explicit dependencies are listed in this file, but it relies on the following to be present in the environment:
- `node.exe` for running the backend.
- `npm` for managing the backend dependencies.
- A web browser to open `bharattrip-react.html`.

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `taskkill` | `/F /IM node.exe /FI "WINDOWTITLE eq npm*"` | None | Kills the old backend process. |
| `timeout` | `/t 2 /nobreak` | None | Pauses execution for 2 seconds. |
| `start` | `/MIN cmd /c "npm start"` | None | Starts the backend in a minimized command window. |
| `timeout` | `/t 8 /nobreak` | None | Pauses execution for 8 seconds to allow backend initialization. |
| `start` | `"bharattrip-react.html"` | None | Opens the application in the default web browser. |

#### Notes

- The script assumes the backend runs on `http://localhost:3001`.
- It waits for the user to confirm the backend is running and the application is ready before pausing.
- Ensure the backend directory exists and contains the necessary `package.json` and `node_modules`.
- The script does not handle errors or exceptions; it assumes the environment is correctly set up.

### `nitinog10-Beta-20-fe6032d/NEW_FEATURES.md`

##### Module Overview
This file documents the new features added to BharatTrip AI: Cultural Insights and Smart Multi-City Planner. It outlines what each feature does, how to use them, example outputs, and technical implementation details.

#### Dependencies

- **OpenAI GPT-3.5**: For generating cultural insights.
- **React**: Frontend framework for building UI components.
- **Axios**: For making API requests.
- **Styled-components**: For theming and styling UI elements.

#### Classes

None

#### Functions

None

#### Configuration

None

#### Constants

None

#### Notes

- **Cultural Insights** uses AI to generate comprehensive cultural information for Indian destinations. It supports multiple languages and provides detailed insights on festivals, customs, etiquette, language, food, and tips.
- **Smart Multi-City Planner** allows users to plan trips across multiple Indian cities with AI-optimized routes, budget splitting, and eco-scores. It supports unlimited destinations and provides detailed cost estimates and eco-friendly recommendations.
- Both features are fully responsive and match the existing theme of BharatTrip AI.
- The navigation has been updated to include the new features, maintaining consistent design elements across all pages.

### `nitinog10-Beta-20-fe6032d/PERSONALIZED_TRIP_PLANNER_INTEGRATION.md`

##### Module Overview

This document outlines the integration of the personalized AI trip planner into the BharatTrip AI application. The integration replaces the previous basic trip planner with enhanced AI features and improved user experience.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `OpenAI` | Provides AI capabilities for itinerary generation and activity suggestions. |
| `Axios` | Handles HTTP requests to the backend API. |
| `React` | Framework used for building the frontend components. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `TripPlannerPage` | Main component for the trip planner interface. | `handleInputChange`, `generateItinerary`, `getAlternatives` |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `generateItinerary` | `destination`, `interests`, `dates`, `budget`, `travelMode` | `itinerary` | Calls the backend API to generate a structured itinerary. |
| `getAlternatives` | `activityId` | `alternatives` | Fetches alternative activities for a given activity ID. |

#### Configuration

| Key | Description |
| --- | --- |
| `API_ENDPOINT` | Base URL for the backend API. |
| `OPENAI_API_KEY` | API key for accessing the OpenAI service. |

#### Notes

- Ensure the backend API is running before testing the frontend.
- The system gracefully falls back to the original planner if the new endpoints are unavailable.
- The new endpoints `/api/generate-itinerary` and `/api/get-alternatives` should be tested thoroughly for reliability and performance.

### `nitinog10-Beta-20-fe6032d/QUICK_START.md`

##### Module Overview

This document provides a quick start guide for setting up and running the BharatTrip AI project. It outlines the necessary steps to configure the environment, install dependencies, and run the application. It also includes information on the features available, security considerations, and troubleshooting tips.

#### Dependencies

- **Node.js**: Required to run the backend.
- **npm**: Node package manager used to install dependencies.
- **ElevenLabs**: Voice assistant widget for the AI Trip Advisor.

#### Classes

| Class | Purpose | Key Methods |
|-------|---------|-------------|
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| N/A | N/A | N/A | N/A |

#### Configuration

- **Environment Variables**: API keys and configuration settings are stored in `backend/.env`.

#### Constants

- **Port**: The backend runs on `http://localhost:3001`.

#### Notes

- **Security**: Never share or commit the `.env` file containing API keys.
- **Troubleshooting**: Refer to the troubleshooting section for common issues and solutions.
- **Voice Assistant**: The AI Trip Advisor is configured as "BharatTrip Maps AI" with expertise in Indian tourism, map navigation, and travel recommendations.

---

Enjoy exploring India with BharatTrip AI! 🇮🇳

### `nitinog10-Beta-20-fe6032d/REACT_VERSION_GUIDE.md`

##### Module Overview

This file provides a comprehensive guide for the React version of BharatTrip AI, detailing new features, architecture, usage, customization, performance, troubleshooting, security, deployment, and future enhancements.

#### Dependencies

- **React**: Core library for building UI components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Leaflet**: JavaScript library for interactive maps.
- **OpenAI API**: For AI-driven features like chatbot and trip planning.
- **Google Maps API**: For geocoding and map display.
- **OpenWeather API**: For real-time weather data.

#### Classes

| Class         | Purpose                        | Key Methods            |
|---------------|--------------------------------|------------------------|
| App           | Main application component     | render()               |
| HomePage      | Home page component            | render()               |
| ExplorePage   | Explore page component         | render(), searchLocation() |
| TripPlannerPage | Trip planner component        | render(), generateItinerary() |
| ChatPage      | Chat interface component       | render(), sendMessage() |
| ProfilePage   | User profile component         | render()               |

#### Functions

| Function          | Parameters               | Returns     | Description                                        |
|-------------------|--------------------------|-------------|----------------------------------------------------|
| searchLocation    | location: string          | void        | Geocodes and centers map on the provided location  |
| generateItinerary | destination: string, interests: string[], dates: DateRange | void        | Generates AI-driven trip itinerary                |
| sendMessage       | message: string           | void        | Sends user message to AI chatbot                   |

#### Configuration

- **API_BASE**: Base URL for backend API, default is `localhost:3001/api`.

#### Constants

- **WEATHER_LAYERS**: Array of weather layers available on the map.

#### Notes

- Ensure backend is running before using frontend features.
- All API keys are stored server-side in the `.env` file.
- CORS is enabled for development; restrict in production.
- Frontend only communicates with the backend, never directly with external APIs.

### `nitinog10-Beta-20-fe6032d/README.md`

#### Module Overview

This README file provides an overview of the `nitinog10-Beta-20-fe6032d` module, detailing its purpose, dependencies, and usage instructions for the AI-driven travel advisory system.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `express` | Web framework for Node.js |
| `mongoose` | ODM for MongoDB |
| `dotenv` | Loads environment variables from a `.env` file |
| `axios` | Promise-based HTTP client for making requests |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `TravelAdvisor` | Manages trip recommendations and cultural insights | `getRecommendations()`, `getCulturalInsights()` |
| `EnvironmentSetup` | Handles environment setup and configuration | `initialize()`, `validate()` |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `startServer` | `port` | `void` | Starts the Node.js server |
| `fetchData` | `url` | `Promise<data>` | Fetches data from a given URL |
| `logError` | `message` | `void` | Logs an error message |

#### Configuration

- `.env`: Environment variables file for sensitive data.
- `config.json`: Configuration settings for the application.

#### Notes

- Ensure the `.env` file is properly configured before running the server.
- The `setup-env.sh` script must be executed to set up the environment correctly.
- Always validate the environment configuration before starting the server.

### `nitinog10-Beta-20-fe6032d/RESTART_BACKEND.bat`

##### Module Overview

This batch file, `RESTART_BACKEND.bat`, is designed to restart the backend server for the BharatTrip AI application. It stops any existing backend processes and then starts a fresh instance of the backend server.

##### Dependencies

- **taskkill**: Used to forcefully terminate running processes.
- **timeout**: Introduces a delay in the script execution.
- **cd**: Changes the current directory.
- **start**: Launches a new command prompt window and runs a command in that window.

##### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `taskkill` | `/F /IM node.exe /FI "WINDOWTITLE eq npm*"` | None | Kills any running node processes with a title containing "npm". |
| `timeout` | `/t 2 /nobreak` | None | Pauses the script for 2 seconds. |
| `cd` | `backend` | None | Changes the current directory to the `backend` folder. |
| `start` | `cmd /k "npm start"` | None | Starts a new command prompt and runs `npm start` to start the backend server. |

##### Configuration

- **Backend URL**: `http://localhost:3001`

##### Notes

- Ensure that the backend directory is present in the root of the project.
- The script assumes that the backend server runs on port `3001`. Adjust the URL in the script if this changes.
- The `pause` command at the end keeps the command window open until the user presses a key, allowing for manual inspection of the backend output.

### `nitinog10-Beta-20-fe6032d/SMART_INSIGHTS_GUIDE.md`

##### 🧠 Smart Travel Insights - AI-Powered Analysis Guide

#### Module Overview

This file provides a comprehensive guide for the Smart Insights feature, which uses AI to analyze multiple data sources and deliver intelligent recommendations for the best time to visit destinations, optimal routes, and crowd avoidance strategies.

#### Dependencies

- **OpenWeatherMap API**: Provides real-time weather data.
- **Google Maps Directions API**: Offers route optimization and transport data.
- **AI-powered pattern analysis**: Analyzes crowd density and seasonal trends.

#### Classes

| Class | Purpose | Key Methods |
|-------|---------|-------------|
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `calculateVisitScore` | `temp`, `humidity`, `rainDays` | `score` | Calculates a visit score based on temperature, humidity, and rain days. |

#### Configuration

- **API Endpoints**:
  - `/api/recommendations/analyze`
  - `/api/crowd/density`
  - `/api/transport/routes`
  - `/api/climate/trends/:destination?months=6`

#### Constants

- **Visit Score Interpretation**:
  - `80-100`: Excellent
  - `60-79`: Good
  - `40-59`: Fair
  - `0-39`: Poor

- **Weather Comfort Levels**:
  - `Pleasant (15-25°C)`
  - `Warm (25-35°C)`
  - `Hot (>35°C)`

- **Crowd Levels**:
  - `Low (0-30%)`
  - `Medium (30-60%)`
  - `High (60-100%)`

#### Notes

- Ensure valid Indian city names are used for destination input.
- Check API keys in `.env` if insights are not generating.
- Consider different dates or prepare accordingly if the visit score is below 60.

### `nitinog10-Beta-20-fe6032d/TROUBLESHOOTING.md`

##### Module Overview
This file provides a troubleshooting guide for common issues encountered while working with the Nitinog10-Beta-20-fe6032d project. It outlines steps to diagnose and resolve problems related to the backend, API endpoints, and feature functionality.

#### Dependencies

None. This is a markdown file intended for human readers, not a code module.

#### Notes

- **Most Common Fix:** Restarting the backend resolves 90% of issues.
- **Keep Backend Terminal Visible:** This allows you to see errors immediately and take action.
- **Always Restart After Code Changes:** Follow the prevention steps outlined in the document to avoid common pitfalls.

### `nitinog10-Beta-20-fe6032d/bharattripai.html`

File too large for inline documentation.

### `nitinog10-Beta-20-fe6032d/index.html`

Empty file.

### `nitinog10-Beta-20-fe6032d/setup-env.bat`

##### Module Overview

This batch file, `nitinog10-Beta-20-fe6032d/setup-env.bat`, automates the setup of the development environment for the BharatTrip AI project. It creates a `.env` file from `env.config`, ensuring all necessary API keys are configured for local development.

##### Dependencies

No external dependencies are used in this script.

##### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `copy` | `env.config .env /Y` | N/A | Copies `env.config` to `.env` if it doesn't already exist, overwriting it if prompted. |

##### Configuration

No configuration settings are defined within this script.

##### Notes

- The script checks if the `.env` file already exists and prompts the user to overwrite it if necessary.
- If the `.env` file creation fails, the user is instructed to manually rename `env.config` to `.env`.
- Security notes are printed to remind users to keep API keys secure and not to share or commit the `.env` file.

### `nitinog10-Beta-20-fe6032d/setup-env.sh`

##### Module Overview

This script, `setup-env.sh`, sets up the environment for the BharatTrip AI project by creating a `.env` file from `env.config`. It ensures that the `.env` file, which contains essential API keys, is correctly configured and warns about security best practices for handling these keys.

##### Dependencies

- **Bash**: The shell in which this script runs.

##### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `setup-env.sh` | None | 0 or 1 | Sets up the `.env` file and checks for its existence. |

##### Configuration

- **env.config**: Template file used to create the `.env` file.
- **.env**: Final configuration file containing API keys.

##### Notes

- The script checks if `.env` already exists and prompts the user to confirm if they want to overwrite it.
- If the `.env` file fails to create, the user is instructed to manually rename `env.config` to `.env`.
- Security notes are printed to remind users to handle API keys securely.

### `nitinog10-Beta-20-fe6032d/start-react.bat`

##### Module Overview

This batch file `nitinog10-Beta-20-fe6032d/start-react.bat` automates the startup process for the BharatTrip AI application. It starts the backend server and opens the React frontend in a browser, ensuring both components are running and accessible.

##### Dependencies

No explicit imports are listed in this file, but it relies on the following:
- `npm` for starting the backend server.
- A local HTML file `bharattrip-react.html` for the React frontend.

##### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `@echo off` | None | None | Disables command echoing for cleaner output. |
| `echo` | Text | None | Prints text to the console. |
| `cd` | Directory | None | Changes the current directory. |
| `start` | Command/URL | None | Opens a new command window to run the command or opens the URL. |
| `timeout` | Duration | None | Pauses execution for a specified time. |

##### Configuration

No explicit configuration settings are defined within this file. It assumes the backend server runs on `http://localhost:3001` and the React frontend is served from `bharattrip-react.html`.

##### Notes

- The script waits 5 seconds after starting the backend server to ensure it has time to initialize.
- To stop the application, close the backend terminal window.
- Ensure `npm` is installed and configured correctly to start the backend server.
- The script opens the frontend in a new browser window. Ensure your default browser settings allow new tabs to open.

### `nitinog10-Beta-20-fe6032d/start-react.sh`

##### `nitinog10-Beta-20-fe6032d/start-react.sh`

#### Module Overview

This script initiates the BharatTrip AI application, starting both the backend server and the React frontend, and then opens the application in the default web browser.

#### Dependencies

- **Bash**: The script is written in Bash, leveraging its scripting capabilities to automate the startup process.

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| None | None | None | This script does not define any functions. It is a linear script that executes commands in sequence. |

#### Configuration

- **OSTYPE**: The script uses the `OSTYPE` environment variable to determine the operating system and open the appropriate browser.

#### Notes

- The script assumes that the `backend` directory contains a Node.js application that can be started with `npm start`.
- The script waits for 5 seconds after starting the backend server before attempting to open the React frontend in the browser.
- The script uses `xdg-open` on Linux to open the browser, which may not work on all Linux distributions.
- The script sets up a trap to handle the `INT` signal (Ctrl+C) to gracefully shut down the backend server when the script is terminated.

Feel free to ask if you have any questions or need further clarification on any part of the script.

### `nitinog10-Beta-20-fe6032d/temp_planner.txt`

##### `nitinog10-Beta-20-fe6032d/temp_planner.txt` Documentation

#### Module Overview

This file defines the `EnhancedTripPlannerPage` component, which allows users to input travel preferences and generate a personalized itinerary using either an AI planner or a smart planner.

#### Dependencies

- `useState` from `react`: Manages component state.
- `fetch`: Makes HTTP requests to the backend API.

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `EnhancedTripPlannerPage` | None | JSX | Renders the trip planner page and handles itinerary generation. |
| `generateItinerary` | None | Promise | Sends user input to the backend to generate an itinerary. |
| `toggleInterest` | `interest` (string) | None | Toggles the selected interest in the form data. |
| `handleViewOnMap` | `location` (object) | None | Stores the selected location in local storage and navigates to the explore page. |

#### Configuration

- `API_BASE`: The base URL for the backend API.

#### Notes

- The `generateItinerary` function requires both a destination and at least one interest to be selected.
- The `handleViewOnMap` function is currently unused in this component but is included for future functionality.

### `nitinog10-Beta-20-fe6032d/test.html`

##### `nitinog10-Beta-20-fe6032d/test.html`

#### Module Overview

This file is a simple HTML document that serves as a test environment for a React application. It sets up a basic web page with a navigation bar and a couple of pages: a home page and a trip planner page. The purpose is to demonstrate the use of React for creating a single-page application with dynamic routing.

#### Dependencies

| Dependency | Purpose |
| --- | --- |
| React | Core library for building user interfaces. |
| ReactDOM | Library for rendering React components to the DOM. |
| Babel | JavaScript compiler that allows us to use JSX and ES6+ syntax. |
| Tailwind CSS | Utility-first CSS framework for styling. |
| Font Awesome | Icon library for adding icons to the web page. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `App` | None | React Component | Main component that manages state and renders other components. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `App` | Main component for the application | `render` |

#### Notes

- The `App` component uses React hooks (`useState`) to manage the state of the current page.
- The navigation bar dynamically changes its appearance based on the current page.
- The `PlannerPage` component is currently a placeholder and does not contain any functionality.
- This file uses external libraries and CDN links for simplicity in testing. For production, consider bundling and optimizing these resources.

### `nitinog10-Beta-20-fe6032d/trip-planner.html`

##### `nitinog10-Beta-20-fe6032d/trip-planner.html`

#### Module Overview

This HTML file renders the BharatTrip AI Planner, a React-based interface for generating travel itineraries. It allows users to input their travel preferences and receive a customized itinerary.

#### Dependencies

- **Tailwind CSS**: Provides utility classes for styling.
- **Font Awesome**: Offers icons used throughout the interface.
- **React**: Core library for building the UI components.
- **Babel**: Allows the use of JSX syntax within script tags.

#### Functions

| Function             | Parameters       | Returns          | Description                                                                                      |
|----------------------|------------------|------------------|--------------------------------------------------------------------------------------------------|
| `TripPlannerPage`    | None             | React Component  | Main component rendering the trip planner interface.                                             |
| `toggleInterest`     | `interest`       | None             | Toggles the selection of an interest, updating the `selectedInterests` state.                    |
| `isFormValid`        | None             | `boolean`        | Checks if the form inputs are valid before generating an itinerary.                              |
| `generateItinerary`  | None             | None             | Asynchronously generates an itinerary based on user inputs and updates the `itinerary` state.    |

#### Configuration

- **React Component State**: 
  - `planType`: Type of trip plan (`single` or `multi`).
  - `destination`: User-selected destination.
  - `selectedInterests`: Array of user-selected interests.
  - `startDate`: Start date of the trip.
  - `endDate`: End date of the trip.
  - `budget`: User-selected budget level.
  - `travelMode`: User-selected travel mode.
  - `itinerary`: Generated itinerary object.

#### Notes

- The `generateItinerary` function currently returns a hardcoded itinerary for demonstration purposes. In a production environment, this should be replaced with an API call to fetch a real itinerary based on user inputs.
- Ensure to handle edge cases such as invalid dates or missing inputs gracefully.
- The UI is designed to be responsive, leveraging Tailwind CSS classes for layout and styling.

### `nitinog10-Beta-20-fe6032d/backend/README.md`

##### BharatTrip AI Backend Setup Guide

#### Module Overview

This file provides a comprehensive guide for setting up and running the BharatTrip AI backend. It covers dependency installation, environment configuration, API endpoint details, testing procedures, troubleshooting tips, production deployment, and API rate limits.

#### Dependencies

- **npm**: Package manager for Node.js
- **dotenv**: Loads environment variables from `.env` file
- **express**: Web framework for Node.js
- **axios**: Promise-based HTTP client for making API requests
- **openai**: Client library for interacting with the OpenAI API
- **openweathermap**: Client library for fetching weather data
- **google-maps**: Client library for accessing Google Maps APIs

#### Configuration

- **.env**: Contains API keys and environment-specific configurations
  - `OPENAI_API_KEY`
  - `WEATHER_API_KEY`
  - `GOOGLE_MAPS_API_KEY`

#### API Endpoints

##### Health Check
- **GET** `/api/health` - Check if backend is running

##### AI Chatbot
- **POST** `/api/chatbot`
```json
{
  "message": "Tell me about places to visit in Jaipur",
  "language": "en"
}
```

##### Weather Data
- **GET** `/api/weather/:location` - Get weather for a location
- **GET** `/api/weather/:location?lat=28.6139&lon=77.2090` - Get weather by coordinates

##### Places Search
- **POST** `/api/places/search`
```json
{
  "query": "restaurants in Mumbai",
  "location": {"lat": 19.0760, "lng": 77.2097},
  "radius": 5000,
  "type": "restaurant"
}
```

##### Nearby Places
- **POST** `/api/places/nearby`
```json
{
  "location": {"lat": 28.6139, "lng": 77.2090},
  "radius": 5000,
  "types": ["tourist_attraction", "restaurant"]
}
```

##### Geocoding
- **GET** `/api/geocode/:address` - Convert address to coordinates

##### Trip Planning
- **POST** `/api/trip/plan`
```json
{
  "destination": "Goa",
  "interests": ["beaches", "food", "culture"],
  "duration": 5,
  "budget": "medium",
  "travelMode": "flight"
}
```

##### Landmark Recognition
- **POST** `/api/landmark/recognize`
```json
{
  "imageBase64": "base64_encoded_image_data"
}
```

##### Smart Insights & Analysis (NEW) 🆕

##### AI-Powered Travel Recommendations
- **POST** `/api/recommendations/analyze`
```json
{
  "destination": "Jaipur",
  "dates": { "start": "2024-11-01", "end": "2024-11-05" },
  "interests": ["heritage", "food", "culture"]
}
```
**Returns:** Weather forecast, crowd analysis, transport recommendations, visit score

##### Real-time Crowd Density
- **POST** `/api/crowd/density`
```json
{
  "placeId": "ChIJL_P_CXMEDTkRw0ZdG-0GVvw",
  "name": "India Gate",
  "location": { "lat": 28.6129, "lng": 77.2295 }
}
```
**Returns:** Current crowd level, best times to visit, AI analysis

##### Public Transport Routes
- **POST** `/api/transport/routes`
```json
{
  "origin": { "lat": 28.7041, "lng": 77.1025 },
  "destination": { "lat": 28.6139, "lng": 77.2090 },
  "mode": "transit"
}
```
**Returns:** Optimized routes, cost estimates, travel tips, alternatives

##### Climate Trends Analysis
- **GET** `/api/climate/trends/:destination?months=6`
**Returns:** Monthly climate patterns, best months to visit, seasonal recommendations

#### Testing the Backend

##### Using cURL
```bash
##### Test health check
curl http://localhost:3001/api/health

##### Test chatbot
curl -X POST http://localhost:3001/api/chatbot \
  -H "Content-Type: application/json" \
  -d '{"message": "Best time to visit Kerala?", "language": "en"}'

##### Test geocoding
curl http://localhost:3001/api/geocode/Taj%20Mahal%20Agra
```

##### Using the Frontend
1. Open `bharattrip-integrated.html` in your browser
2. Check the backend status indicator (bottom right)
3. Test features:
   - **Chatbot**: Ask travel questions
   - **Trip Planner**: Generate AI itineraries
   - **Explore Map**: Search and view places
   - **Weather**: See weather overlays on map

#### Troubleshooting

##### Backend won't start
- Check if port 3001 is already in use
- Verify all dependencies are installed
- Check `.env` file exists with valid API keys

##### API errors
- Ensure API keys are valid and have proper permissions
- Check API quotas and limits
- Verify internet connection

##### CORS issues
- Backend is configured to allow all origins in development
- For production, update CORS settings in `server.js`

#### Production Deployment

##### Using PM2
```bash
npm install -g pm2
pm2 start server.js --name bharattrip-backend
pm2 save
pm2 startup
```

##### Using Docker
```dockerfile
FROM node:16
WORKDIR /app
COPY package*.json./
RUN npm install
COPY ..
EXPOSE 3001
CMD ["node", "server.js"]
```

##### Environment Variables for Production
- Set `NODE_ENV=production`
- Use secure API keys
- Configure proper CORS origins
- Enable HTTPS

#### API Rate Limits

Be aware of rate limits for external APIs:
- **OpenAI**: 3 requests/minute (free tier)
- **OpenWeatherMap**: 60 calls/minute (free tier)
- **Google Maps**: $200 free credit/month

#### Support

For issues or questions:
1. Check console logs for errors
2. Verify API keys are correct
3. Ensure all required Google APIs are

### `nitinog10-Beta-20-fe6032d/backend/env.example`

##### Module Overview

This file, `nitinog10-Beta-20-fe6032d/backend/env.example`, serves as a template for environment variables required by the BharatTrip AI backend. It contains placeholders for sensitive API keys and server configuration settings that the backend service needs to operate correctly.

#### Dependencies

No direct dependencies are listed here as this file is purely for configuration and does not import any modules.

#### Configuration

| Key | Purpose | Description |
| --- | --- | --- |
| `PORT` | Server Configuration | Port number on which the backend server will run. |
| `OPENAI_API_KEY` | API Configuration | API key for accessing the OpenAI services. |
| `WEATHER_API_KEY` | API Configuration | API key for accessing the OpenWeatherMap services. |
| `GOOGLE_MAPS_API_KEY` | API Configuration | API key for accessing the Google Maps services. |

#### Notes

- Copy this file to `.env` and replace the placeholder values with actual API keys from respective services.
- Ensure that the environment variables are kept secure and not exposed in version control.
- The backend will fail to start if these environment variables are not correctly set.

### `nitinog10-Beta-20-fe6032d/backend/generate-alternatives.js`

##### `generate-alternatives.js` Module Overview

This file defines an asynchronous function `generateAlternatives` that leverages the `openai` API to generate alternative activities for a given day in an itinerary. It's designed to provide users with diverse options that cater to their preferences, the destination's local culture, and practical considerations like weather and seasonality.

#### Dependencies

| Import | Description |
|--------|-------------|
| `openai` | Configuration and utility functions for interacting with the `openai` API. |
| `parseResponse`, `generateFallbackAlternatives` | Utility functions from `./utils` to handle response parsing and fallback alternative generation. |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `generateAlternatives` | `currentDay`, `currentActivities`, `destination`, `preferences` | `{ success: boolean, error: string, alternatives: array }` | Asynchronously generates alternative activities for a specified day in an itinerary, using the `openai` API. Returns a success status, an error message if applicable, and the generated alternatives. |

#### Notes

- The function relies on the `openai` API for generating alternatives. Ensure the API key and configuration are correctly set up in `openai-config.js`.
- If the `openai` API call fails, the function falls back to generating a set of predefined alternatives using `generateFallbackAlternatives`.
- The `parseResponse` function expects the API response to be in a specific JSON format. Any deviation from this format will result in an error.
- Always handle the returned `alternatives` array with care, as it may be empty or contain fallback values in case of an error.

### `nitinog10-Beta-20-fe6032d/backend/package.json`

##### Module Overview

This `package.json` file defines the configuration for the backend server of the BharatTrip AI project. It specifies the dependencies required to run the server, the scripts to start and test the server, and metadata about the project.

##### Dependencies

| Package | Purpose |
| --- | --- |
| `express` | Provides a robust set of features for web and mobile applications. |
| `cors` | Enables cross-origin resource sharing. |
| `dotenv` | Loads environment variables from a `.env` file. |
| `axios` | Promise-based HTTP client for the browser and Node.js. |
| `openai` | Interface for the OpenAPI service. |
| `multer` | Middleware for handling `multipart/form-data`, used for uploading files. |

##### Functions

There are no explicit functions defined in this `package.json` file. It primarily serves configuration purposes.

##### Configuration

There are no explicit configuration settings defined within this file. However, it relies on environment variables loaded via the `dotenv` package.

##### Notes

- The `start` script runs the server using `node server.js`.
- The `dev` script uses `nodemon` to automatically restart the server when files change.
- The `test` and `test:api` scripts run tests using `node test-apis.js`.
- Ensure environment variables are set in the `.env` file for services like OpenAPI, Weather, and Google Maps to function correctly.

### `nitinog10-Beta-20-fe6032d/backend/server.js`

##### Module Overview
This file sets up the backend server for BharatTrip AI. It handles API requests, integrates with external services, and manages data storage.

#### Dependencies

- `express`: Web framework for handling HTTP requests.
- `cors`: Middleware to enable Cross-Origin Resource Sharing.
- `axios`: HTTP client for making requests to external APIs.
- `dotenv`: Loads environment variables from a `.env` file.
- `path`: Provides utilities for working with file and directory paths.
- `multer`: Middleware for handling `multipart/form-data`, primarily used for uploading files.
- `openai`: Client library for interacting with the OpenAI API.
- `fs`: Node.js file system module.
- `util`: Provides utility functions.

#### Functions

| Function         | Parameters                 | Returns         | Description                                                                                       |
| ---------------- | -------------------------- | --------------- | ------------------------------------------------------------------------------------------------- |
| `getReviews`     | None                       | Promise<Array>  | Reads and parses the reviews JSON file, returning an array of reviews.                            |
| `saveReviews`    | `reviews` (Array)          | Promise         | Writes the provided reviews array to the reviews JSON file.                                       |
| `readFileAsync`  | `filename`, `encoding`     | Promise<string> | Promisified version of `fs.readFile`.                                                             |
| `writeFileAsync` | `filename`, `data`, `encoding` | Promise        | Promisified version of `fs.writeFile`.                                                            |

#### Configuration

- `PORT`: Server port, defaults to 3001 if not set in environment variables.
- `storage`: Multer storage configuration for file uploads.
- `configuration`: Configuration object for the OpenAI API.
- `WEATHER_API_KEY`: API key for OpenWeatherMap.
- `GOOGLE_MAPS_API_KEY`: API key for Google Maps.

#### Constants

- `touristGuides`: Object containing predefined tourist guides for specific locations.
- `defaultGuides`: Array of default tourist guides to be returned if no specific guides are found.

#### Notes

- Ensure environment variables are correctly set for API keys and other configurations.
- Error handling is implemented for most API calls; check console logs for detailed error messages.
- File uploads are stored in the `../uploads/reviews` directory.
- The `getReviews` and `saveReviews` functions manage the reviews data stored in `reviews.json`.
- Fallback to Nominatim for geocoding if Google Maps API returns no results.

### `nitinog10-Beta-20-fe6032d/backend/test-apis.js`

##### `nitinog10-Beta-20-fe6032d/backend/test-apis.js`

This file contains a script to test various API endpoints of the BharatTrip AI service. It ensures that the APIs are functioning as expected by running a series of test cases.

#### Dependencies

| Module | Purpose |
| --- | --- |
| `axios` | HTTP client for making requests to the API endpoints. |
| `dotenv` | Loads environment variables from a `.env` file into `process.env`. |
| `./utils` | Utility functions, including `checkServerHealth`. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `testAPIs` | None | None | Executes a series of tests for different API endpoints and logs the results. |

#### Configuration

- `API_BASE_URL`: The base URL for the BharatTrip AI APIs.
- `colors`: An object containing ANSI color codes for console output.

#### Notes

- Ensure that the `.env` file contains all necessary API keys for the services being tested.
- The `testAPIs` function checks the health of the server before running the tests.
- If any test fails, the script provides guidance on what to check, such as API keys and enabled services.

---

*Documentation auto-generated by DocuVerse*
