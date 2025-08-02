#!/bin/bash

# AWS S3 Deployment Script for Portfolio
# Make sure to configure AWS CLI first: aws configure

# Configuration
BUCKET_NAME="your-portfolio-bucket-name"  # Change this to your bucket name
DISTRIBUTION_ID="your-cloudfront-distribution-id"  # Change this after creating CloudFront

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting deployment to AWS S3...${NC}"

# Check if AWS CLI is configured
if ! aws sts get-caller-identity > /dev/null 2>&1; then
    echo -e "${RED}❌ AWS CLI not configured. Run 'aws configure' first.${NC}"
    exit 1
fi

# Build the project
echo -e "${YELLOW}📦 Building project...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully!${NC}"

# Check if bucket exists
if ! aws s3 ls "s3://$BUCKET_NAME" > /dev/null 2>&1; then
    echo -e "${RED}❌ Bucket $BUCKET_NAME does not exist or you don't have access.${NC}"
    echo -e "${YELLOW}Please create the bucket first or check your bucket name.${NC}"
    exit 1
fi

# Sync files to S3
echo -e "${YELLOW}📤 Uploading files to S3...${NC}"
aws s3 sync dist/ s3://$BUCKET_NAME --delete --cache-control "public, max-age=31536000" --exclude "*.html"
aws s3 sync dist/ s3://$BUCKET_NAME --delete --cache-control "public, max-age=0, must-revalidate" --include "*.html"

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Upload to S3 failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Files uploaded to S3 successfully!${NC}"

# Invalidate CloudFront cache (if distribution ID is provided)
if [ "$DISTRIBUTION_ID" != "your-cloudfront-distribution-id" ]; then
    echo -e "${YELLOW}🔄 Invalidating CloudFront cache...${NC}"
    aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ CloudFront cache invalidated!${NC}"
    else
        echo -e "${YELLOW}⚠️  CloudFront invalidation failed, but deployment was successful.${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  CloudFront distribution ID not set. Skipping cache invalidation.${NC}"
fi

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${YELLOW}Your portfolio is now live at:${NC}"
if [ "$DISTRIBUTION_ID" != "your-cloudfront-distribution-id" ]; then
    echo -e "${GREEN}CloudFront URL: https://your-distribution-domain.cloudfront.net${NC}"
else
    echo -e "${GREEN}S3 Website URL: http://$BUCKET_NAME.s3-website-region.amazonaws.com${NC}"
fi