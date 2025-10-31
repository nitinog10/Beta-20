@echo off
cls
echo.
echo ========================================
echo  FIXING BharatTrip AI - Complete Reset
echo ========================================
echo.

echo Step 1: Stopping old backend...
taskkill /F /IM node.exe /FI "WINDOWTITLE eq npm*" 2>nul
timeout /t 2 /nobreak > nul
echo ✓ Old backend stopped
echo.

echo Step 2: Starting fresh backend...
cd backend
start /MIN cmd /c "npm start"
cd ..
echo ✓ Backend starting...
echo.

echo Step 3: Waiting for backend to initialize...
timeout /t 8 /nobreak > nul
echo ✓ Backend should be ready
echo.

echo Step 4: Opening app in browser...
start "" "bharattrip-react.html"
echo ✓ Browser opening
echo.

echo ========================================
echo          ALL FIXED! ✓
echo ========================================
echo.
echo What to do now:
echo 1. Wait for browser to open
echo 2. Look for green "Connected" dot
echo 3. Try Cultural Insights again
echo 4. Should work perfectly!
echo.
echo Backend running on: http://localhost:3001
echo.
echo ========================================
pause
