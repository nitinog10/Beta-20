# 🚀 BharatTrip AI - Quick Start Guide

## Your API Keys are Already Configured! ✅

### 1️⃣ **Setup Environment** (Choose your OS):

#### Windows:
```bash
# Double-click setup-env.bat
# OR run in terminal:
setup-env.bat
```

#### Mac/Linux:
```bash
chmod +x setup-env.sh
./setup-env.sh
```

### 2️⃣ **Install Backend**:
```bash
cd backend
npm install
cd ..
```

### 3️⃣ **Start Everything**:

#### Windows:
```bash
# Double-click start.bat
# OR run:
start.bat
```

#### Mac/Linux:
```bash
chmod +x start.sh
./start.sh
```

### 4️⃣ **That's it!** 🎉
- Backend will start at: http://localhost:3001
- Your browser will open with BharatTrip AI
- Look for the green "Backend Connected" indicator

## ✅ What's Working Now:
- ✨ **AI Chatbot** - Ask travel questions in multiple languages
- 🗺️ **Interactive Maps** - With your Google Maps API
- 🌤️ **Live Weather** - Real weather data
- 🤖 **AI Trip Planning** - Personalized itineraries
- 📍 **Location Search** - Find any place in India

## 🧪 Test Your Setup:
```bash
cd backend
npm test
```

This will verify all your APIs are working correctly!

## 🔒 Security Note:
Your API keys are stored in `backend/.env`. **NEVER** share this file or commit it to Git!

---

## 🎤 AI Trip Advisor (Voice Assistant)

The app includes an ElevenLabs voice assistant widget that appears as a floating button.

### What It Does:
- Voice-enabled travel guidance
- Helps navigate the weather map
- Recommends nearby attractions and food
- Answers travel questions about India

### Configuration:
To customize the voice assistant, follow the guide in [AI_TRIP_ADVISOR_CONFIG.md](AI_TRIP_ADVISOR_CONFIG.md)

The agent should be configured as **"BharatTrip Maps AI"** with expertise in:
- Indian tourism and destinations
- Map navigation and weather layers
- Travel routes and recommendations
- Local culture and food

---

## 🚨 Troubleshooting:

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
