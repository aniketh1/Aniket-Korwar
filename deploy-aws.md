# AWS Deployment Guide for Portfolio

## Option 1: S3 + CloudFront (Recommended)

### Prerequisites
1. AWS Account
2. AWS CLI installed
3. Built project files

### Step 1: Build Your Project
```bash
npm run build
```

### Step 2: Create S3 Bucket
1. Go to AWS S3 Console
2. Click "Create bucket"
3. Bucket name: `your-portfolio-bucket-name` (must be globally unique)
4. Region: Choose closest to your users
5. Uncheck "Block all public access"
6. Create bucket

### Step 3: Configure S3 for Static Website Hosting
1. Select your bucket
2. Go to "Properties" tab
3. Scroll to "Static website hosting"
4. Click "Edit"
5. Enable static website hosting
6. Index document: `index.html`
7. Error document: `index.html` (for SPA routing)
8. Save changes

### Step 4: Set Bucket Policy
Go to "Permissions" tab → "Bucket policy" and add:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-portfolio-bucket-name/*"
        }
    ]
}
```

### Step 5: Upload Files
1. Go to "Objects" tab
2. Click "Upload"
3. Upload all files from `dist/` folder
4. Click "Upload"

### Step 6: Create CloudFront Distribution
1. Go to CloudFront Console
2. Click "Create distribution"
3. Origin domain: Select your S3 bucket
4. Origin access: "Origin access control settings"
5. Create new OAC if needed
6. Default root object: `index.html`
7. Custom error pages:
   - Error code: 403
   - Response page path: `/index.html`
   - Response code: 200
   - Error code: 404
   - Response page path: `/index.html`
   - Response code: 200
8. Create distribution

### Step 7: Update S3 Bucket Policy for CloudFront
Replace the bucket policy with:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowCloudFrontServicePrincipal",
            "Effect": "Allow",
            "Principal": {
                "Service": "cloudfront.amazonaws.com"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-portfolio-bucket-name/*",
            "Condition": {
                "StringEquals": {
                    "AWS:SourceArn": "arn:aws:cloudfront::ACCOUNT-ID:distribution/DISTRIBUTION-ID"
                }
            }
        }
    ]
}
```

## Option 2: AWS Amplify (Easiest)

### Step 1: Connect Repository
1. Go to AWS Amplify Console
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Select branch (main/master)

### Step 2: Configure Build Settings
Amplify will auto-detect Vite. Verify build settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Step 3: Deploy
1. Review settings
2. Click "Save and deploy"
3. Wait for deployment to complete

## Option 3: EC2 with Nginx (Advanced)

### Step 1: Launch EC2 Instance
1. Go to EC2 Console
2. Launch instance
3. Choose Amazon Linux 2
4. t2.micro (free tier)
5. Configure security group (HTTP/HTTPS)

### Step 2: Connect and Setup
```bash
# Connect to instance
ssh -i your-key.pem ec2-user@your-instance-ip

# Update system
sudo yum update -y

# Install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18

# Install Nginx
sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx

# Install PM2
npm install -g pm2
```

### Step 3: Deploy Application
```bash
# Clone your repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install dependencies and build
npm install
npm run build

# Copy build files to Nginx
sudo cp -r dist/* /var/www/html/

# Configure Nginx for SPA
sudo nano /etc/nginx/nginx.conf
```

Add this to the server block:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

```bash
# Restart Nginx
sudo systemctl restart nginx
```

## Recommended Deployment Scripts

Create these files in your project root: