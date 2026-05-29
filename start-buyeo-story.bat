@echo off
setlocal

set "ROOT=%~dp0"
set "LOG_DIR=%ROOT%logs"
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

cd /d "%ROOT%"

echo [%date% %time%] Starting Buyeo AI Story proxy...>> "%LOG_DIR%\startup.log"
start "Buyeo Story Proxy" /min /D "%ROOT%story-proxy" node server.js

timeout /t 3 /nobreak > nul

echo [%date% %time%] Starting Buyeo AI Story app...>> "%LOG_DIR%\startup.log"
start "Buyeo Story App" /min /D "%ROOT%" npm.cmd run serve:out

timeout /t 8 /nobreak > nul

set "CHROME=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
if not exist "%CHROME%" set "CHROME=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"

if exist "%CHROME%" (
  echo [%date% %time%] Opening Chrome kiosk mode...>> "%LOG_DIR%\startup.log"
  start "" "%CHROME%" --kiosk --disable-pinch --overscroll-history-navigation=0 --no-first-run "http://127.0.0.1:3000/story"
) else (
  echo Chrome not found. Open http://127.0.0.1:3000/story manually.
  echo [%date% %time%] Chrome not found.>> "%LOG_DIR%\startup.log"
)

endlocal
