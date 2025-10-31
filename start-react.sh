#!/bin/bash

echo "===================================="
echo "Starting BharatTrip AI (React Version)"
echo "===================================="
echo ""

# Start backend server
echo "Starting Backend Server..."
cd backend
npm start &
BACKEND_PID=$!
cd ..

echo ""
echo "Waiting for backend to start..."
sleep 5

echo ""
echo "Opening BharatTrip AI React in browser..."

# Detect OS and open browser accordingly
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open bharattrip-react.html
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    xdg-open bharattrip-react.html 2>/dev/null || echo "Please open bharattrip-react.html in your browser"
else
    echo "Please open bharattrip-react.html in your browser"
fi

echo ""
echo "===================================="
echo "BharatTrip AI is now running!"
echo "===================================="
echo ""
echo "Backend: http://localhost:3001"
echo "Frontend: React version with modern UI"
echo ""
echo "Features:"
echo " - AI Chatbot (OpenAI)"
echo " - Interactive Maps (Leaflet + Google Maps)"
echo " - AI Trip Planner"
echo " - Dark/Light Mode"
echo " - Real-time Backend Status"
echo ""
echo "To stop: Press Ctrl+C"
echo "===================================="

# Wait for Ctrl+C
trap "echo 'Shutting down...'; kill $BACKEND_PID; exit" INT
wait
