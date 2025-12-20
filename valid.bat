@echo off
echo Running typecheck...
call npm run typecheck
if errorlevel 1 (
    echo Typecheck failed!
    exit /b 1
)

echo Running lint:errors...
call npm run lint:errors
if errorlevel 1 (
    echo Lint failed!
    exit /b 1
)

echo All validations passed!
exit /b 0 