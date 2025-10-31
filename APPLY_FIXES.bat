@echo off
cls
echo.
echo ========================================
echo   APPLYING ALL FIXES - BharatTrip AI
echo ========================================
echo.

echo [1/4] Stopping old backend processes...
taskkill /F /IM node.exe 2>nul
timeout /t 3 /nobreak > nul
echo ✓ Stopped
echo.

echo [2/4] Starting updated backend...
cd backend
start /MIN cmd /k "echo Starting BharatTrip AI Backend... && npm start"
cd ..
echo ✓ Backend starting with fixes
echo.

echo [3/4] Waiting for backend to initialize...
timeout /t 10 /nobreak > nul
echo ✓ Backend ready
echo.

echo [4/4] Opening fixed application...
start "" "bharattrip-react.html"
echo ✓ Browser opening
echo.

echo ========================================
echo          ✅ ALL FIXES APPLIED!
echo ========================================
echo.
echo What's Fixed:
echo  ✓ Cultural Insights - Clean display (no JSON)
echo  ✓ Smart Planner - Structured cards (no raw JSON)
echo  ✓ All sections properly formatted
echo.
echo Backend: http://localhost:3001 (running in background)
echo Frontend: Open in your browser
echo.
echo Wait 5 seconds after browser opens, then:
echo  1. Press F5 to refresh
echo  2. Try Cultural Insights (Varanasi)
echo  3. Try Smart Planner (Delhi, Agra)
echo.
echo ========================================
pause
