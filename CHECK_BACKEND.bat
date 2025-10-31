@echo off
echo ====================================
echo Checking BharatTrip AI Backend
echo ====================================
echo.

echo Testing backend endpoints...
echo.

curl -s http://localhost:3001/api/health

echo.
echo.
echo If you see "OK" above, backend is running.
echo.
echo Now checking for new endpoints...
echo.

curl -X POST http://localhost:3001/api/cultural/insights -H "Content-Type: application/json" -d "{\"destination\":\"Test\"}" 2>nul

echo.
echo.
echo If you see error above, backend needs restart!
echo.
echo ====================================
echo SOLUTION:
echo 1. Close the backend terminal window
echo 2. Double-click: RESTART_BACKEND.bat
echo 3. Wait for all 16 endpoints to show
echo 4. Refresh your browser (F5)
echo ====================================
echo.
pause
