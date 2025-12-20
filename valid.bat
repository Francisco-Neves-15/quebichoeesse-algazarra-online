@echo off
echo Starting validation...

call valid-common.bat
if errorlevel 1 (
    exit /b 1
)

echo All validations passed!
exit /b 0