@echo off
echo ====================================
echo Starting BharatTrip AI (React Version)
echo ====================================
echo.

echo Starting Backend Server...
cd backend
start cmd /k "npm start"
cd ..

echo.
echo Waiting for backend to start...
timeout /t 5 /nobreak > nul

echo.
echo Opening BharatTrip AI React in browser...
start "" "bharattrip-react.html"

echo.
echo ====================================
echo BharatTrip AI is now running!
echo ====================================
echo.
echo Backend: http://localhost:3001
echo Frontend: React version with modern UI
echo.
echo Features:
echo  - AI Chatbot (OpenAI)
echo  - Interactive Maps (Leaflet + Google Maps)
echo  - AI Trip Planner
echo  - Dark/Light Mode
echo  - Real-time Backend Status
echo.
echo To stop: Close the backend terminal window
echo ====================================
pause
