@echo off
setlocal
pushd "%~dp0" || exit /b 1

call npm.cmd run dev
set "status=%errorlevel%"

popd
if not "%status%"=="0" pause
exit /b %status%
