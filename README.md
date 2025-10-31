# BharatTrip AI - Your Smart Travel Friend 🇮🇳

A modern, AI-powered travel planning web application designed to help users explore and plan trips across India with personalized recommendations and smart features.

**🧠 NEW:** Smart Insights Engine - AI analyzes weather, crowd density, and transport to recommend the best time and route to visit! [Learn More →](FEATURES_SHOWCASE.md)

## 🚀 Quick Start

### Windows:
```bash
# Double-click or run:
start-react.bat
```

### Mac/Linux:
```bash
chmod +x start-react.sh
./start-react.sh
```

### Manual Setup:
```bash
# 1. Setup environment (first time only)
setup-env.bat      # Windows
./setup-env.sh     # Mac/Linux

# 2. Install backend dependencies
cd backend
npm install

# 3. Start backend
npm start

# 4. Open bharattrip-react.html in your browser
```

📚 **Documentation**: 
- [🚀 Quick Start](QUICK_START.md) - Get running in 2 minutes
- [🎉 NEW Features](NEW_FEATURES.md) - Cultural Insights & Smart Planner 🆕
- [✨ Complete Guide](REACT_VERSION_GUIDE.md) - All features & usage
- [🧠 Smart Insights](SMART_INSIGHTS_GUIDE.md) - AI analysis & recommendations
- [🎯 Hackathon Demo](FEATURES_SHOWCASE.md) - Presentation guide 🏆
- [🔧 Troubleshooting](TROUBLESHOOTING.md) - Fix common issues ⚠️
- [🎤 Voice AI Setup](AI_TRIP_ADVISOR_CONFIG.md) - ElevenLabs configuration
- [⚙️ Backend APIs](backend/README.md) - All 16 endpoints

## 🌟 Features

### 1. **Home Dashboard**
- Quick trip planning with AI-powered suggestions
- Smart search functionality
- Curated categories: Heritage, Trekking, Beaches, Food Trails, Spiritual Tourism
- Discover hidden gems carousel featuring off-beat destinations

### 2. **AI Trip Planner with Smart Insights** 🧠
- Multi-interest selection (Heritage, Nature, Food, Adventure, Wellness, Culture)
- Date picker for travel planning
- Budget-based recommendations (Low/Medium/Premium)
- Multiple travel mode options (Train, Flight, Bus, Self-drive)
- **NEW: Smart Insights Analysis** 🆕
  - **Visit Score** (0-100) based on weather, crowds, and climate
  - **Weather Forecast** with 5-day predictions
  - **Crowd Density** analysis and best visiting times
  - **Public Transport** recommendations with cost estimates
  - **Peak Hours** warnings and off-peak suggestions
  - **Route Optimization** for efficient travel
- Auto-generated AI itineraries with day-wise activities

### 3. **Interactive Explore Map**
- Filter nearby attractions by category
- Distance-based search (1-50 km radius)
- Eco-friendly accommodation options
- Local food and events markers
- Real-time crowd heatmaps (when integrated with Google Popular Times API)

### 4. **AI Chatbot & Voice Assistant** 🤖🎤
- **Text Chat**: Powered by OpenAI GPT-3.5 for intelligent conversations
- **Voice Assistant**: ElevenLabs AI Trip Advisor (floating widget)
- Support for multiple Indian languages (Hindi, Tamil, Bengali, Telugu, etc.)
- Voice input & natural voice conversation capability
- Instant travel recommendations
- Translation services
- Budget planning assistance
- Always accessible on any page

### 5. **Cultural Insights** 🎭 🆕
- **AI-powered cultural intelligence** for any Indian destination
- Festivals and events with dates
- Local customs and traditions
- Cultural etiquette (do's and don'ts)
- Useful local language phrases
- Food and dining culture
- Photography guidelines
- Multilingual support (English, Hindi, Tamil, etc.)

### 6. **Smart Multi-City Planner** 🗺️ 🆕
- **Multi-destination trip planning** with route optimization
- AI-calculated optimal city sequence
- Budget breakdown by category (transport, stay, food, activities)
- **Group budget calculator** with per-person split
- **Eco Score** - Carbon footprint analysis and green alternatives
- Public transport recommendations
- Day allocation per city
- Cost-saving tips and time optimization

### 7. **User Profile**
- Save and manage trip itineraries
- Travel preferences customization
- Expense tracking
- AI landmark recognition from uploaded photos

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for external resources (fonts, icons)

### Installation

1. Clone or download the project files
2. Open `index.html` in your web browser
3. No server setup required for basic functionality!

### File Structure
```
BharatTrip-AI/
├── index.html      # Main HTML file with all sections
├── styles.css      # Complete styling with Indian motifs
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## 🎨 Design Features

- **Clean, Modern UI**: Soft rounded corners, subtle shadows, and smooth transitions
- **Indian Design Motifs**: Traditional color patterns in section headers
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Gradient Accents**: Eye-catching gradients using saffron and orange tones
- **Accessible Navigation**: Both top navigation bar and bottom mobile navigation

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Poppins)

### Planned Integrations
- **Google Maps API**: For interactive map functionality
- **OpenAI/Llama API**: For AI-powered recommendations
- **OpenWeather API**: For real-time weather data
- **Google Popular Times API**: For crowd density information
- **Backend**: Node.js/Flask with SQLite/Firebase (for production)

## 📱 Mobile Responsive

The application is fully responsive with:
- Collapsible navigation for mobile
- Bottom navigation bar for easy thumb access
- Touch-friendly buttons and controls
- Optimized card layouts for smaller screens

## 🎯 Key Features Implementation

### Trip Planning Algorithm
The app generates personalized itineraries based on:
- User interests selection
- Budget constraints
- Travel dates and duration
- Preferred mode of transportation

### Smart Suggestions
Categories are designed to cover diverse Indian travel experiences:
- **Heritage**: Historical monuments and cultural sites
- **Nature**: Hill stations, forests, and wildlife
- **Beaches**: Coastal destinations
- **Food Trails**: Culinary tourism routes
- **Spiritual**: Temples, ashrams, and pilgrimage sites

### Voice Recognition
Integrated Web Speech API for:
- Voice commands in multiple Indian languages
- Hands-free trip planning
- Accessibility features

## 🔮 Future Enhancements

1. **Real-time Data Integration**
   - Live weather updates
   - Current crowd levels at attractions
   - Dynamic pricing for accommodations

2. **Social Features**
   - Share itineraries with friends
   - Community reviews and tips
   - Travel buddy matching

3. **Advanced AI Features**
   - Photo-based destination recommendations
   - Personalized travel style learning
   - Multi-day trip optimization

4. **Booking Integration**
   - Direct hotel/transport booking
   - Payment gateway integration
   - Cancellation management

## 🤝 Contributing

Feel free to enhance the application by:
1. Adding new features
2. Improving the UI/UX
3. Integrating real APIs
4. Adding backend functionality

## 📄 License

This project is created for the MANIT Hackathon and is open for educational and demonstration purposes.

## 🙏 Acknowledgments

- Inspired by MakeMyTrip, Airbnb, and Incredible India
- Icons by Font Awesome
- Images from Unsplash (for demonstration)

---

**Made with ❤️ for exploring Incredible India!**
