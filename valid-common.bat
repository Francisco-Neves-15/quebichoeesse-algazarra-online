@echo off

echo Checking for .jsx files...
call npm run check:jsx
if errorlevel 1 (
    echo JSX check failed!
    exit /b 1
)

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

echo Checking css imports...
call npm run check:css
if errorlevel 1 (
    echo CSS check failed!
    exit /b 1
)

echo Running build check (validates CSS, PostCSS, and Next.js config)...
call npm run build:check
if errorlevel 1 (
    echo Build check failed! This may indicate CSS import errors, PostCSS issues, or other runtime errors.
    exit /b 1
)