@echo off
echo ====================================
echo Restarting BharatTrip AI Backend
echo ====================================
echo.

echo Stopping existing backend processes...
taskkill /F /IM node.exe /FI "WINDOWTITLE eq npm*" 2>nul
timeout /t 2 /nobreak > nul

echo.
echo Starting fresh backend server...
cd backend
start cmd /k "npm start"
cd ..

echo.
echo ====================================
echo Backend restarted successfully!
echo ====================================
echo.
echo Backend running on: http://localhost:3001
echo Refresh your browser to connect
echo.
pause
