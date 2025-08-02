@echo off
REM AWS S3 Deployment Script for Portfolio (Windows)
REM Make sure to configure AWS CLI first: aws configure

REM Configuration
set BUCKET_NAME=your-portfolio-bucket-name
set DISTRIBUTION_ID=your-cloudfront-distribution-id

echo 🚀 Starting deployment to AWS S3...

REM Check if AWS CLI is configured
aws sts get-caller-identity >nul 2>&1
if errorlevel 1 (
    echo ❌ AWS CLI not configured. Run 'aws configure' first.
    pause
    exit /b 1
)

REM Build the project
echo 📦 Building project...
call npm run build

if errorlevel 1 (
    echo ❌ Build failed!
    pause
    exit /b 1
)

echo ✅ Build completed successfully!

REM Check if bucket exists
aws s3 ls "s3://%BUCKET_NAME%" >nul 2>&1
if errorlevel 1 (
    echo ❌ Bucket %BUCKET_NAME% does not exist or you don't have access.
    echo Please create the bucket first or check your bucket name.
    pause
    exit /b 1
)

REM Sync files to S3
echo 📤 Uploading files to S3...
aws s3 sync dist/ s3://%BUCKET_NAME% --delete --cache-control "public, max-age=31536000" --exclude "*.html"
aws s3 sync dist/ s3://%BUCKET_NAME% --delete --cache-control "public, max-age=0, must-revalidate" --include "*.html"

if errorlevel 1 (
    echo ❌ Upload to S3 failed!
    pause
    exit /b 1
)

echo ✅ Files uploaded to S3 successfully!

REM Invalidate CloudFront cache (if distribution ID is provided)
if not "%DISTRIBUTION_ID%"=="your-cloudfront-distribution-id" (
    echo 🔄 Invalidating CloudFront cache...
    aws cloudfront create-invalidation --distribution-id %DISTRIBUTION_ID% --paths "/*"
    
    if not errorlevel 1 (
        echo ✅ CloudFront cache invalidated!
    ) else (
        echo ⚠️  CloudFront invalidation failed, but deployment was successful.
    )
) else (
    echo ⚠️  CloudFront distribution ID not set. Skipping cache invalidation.
)

echo 🎉 Deployment completed successfully!
echo Your portfolio is now live!

pause