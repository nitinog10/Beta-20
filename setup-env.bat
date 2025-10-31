@echo off
echo =====================================
echo Setting up BharatTrip AI Environment
echo =====================================
echo.

cd backend

if exist .env (
    echo .env file already exists!
    echo.
    set /p overwrite="Do you want to overwrite it? (y/n): "
    if /i "%overwrite%" neq "y" (
        echo Setup cancelled.
        pause
        exit
    )
)

echo Creating .env file from env.config...
copy env.config .env /Y > nul

if exist .env (
    echo ✓ .env file created successfully!
    echo.
    echo Your API keys have been configured:
    echo - OpenAI API: Configured
    echo - Weather API: Configured  
    echo - Google Maps API: Configured
    echo.
    echo IMPORTANT SECURITY NOTES:
    echo 1. Never share or commit your .env file
    echo 2. Keep your API keys secret
    echo 3. Consider regenerating API keys after development
    echo.
) else (
    echo ✗ Failed to create .env file
    echo Please manually rename env.config to .env
)

cd ..
echo.
pause
