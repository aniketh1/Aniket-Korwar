# 🚀 Complete AWS Deployment Guide for Your Portfolio

## 📋 Prerequisites

1. **AWS Account** - [Sign up here](https://aws.amazon.com/)
2. **AWS CLI** - [Install guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
3. **Domain (Optional)** - For custom domain

## 🎯 Recommended Approach: S3 + CloudFront

### Why This Approach?
- ✅ **Cost-effective** (~$1-5/month)
- ✅ **Fast global delivery** via CloudFront CDN
- ✅ **Highly scalable** and reliable
- ✅ **SSL certificate** included
- ✅ **Easy to maintain**

---

## 🛠️ Step-by-Step Setup

### Step 1: Install and Configure AWS CLI

```bash
# Install AWS CLI (if not already installed)
# Windows: Download from AWS website
# Mac: brew install awscli
# Linux: sudo apt install awscli

# Configure AWS CLI
aws configure
```

You'll need:
- **AWS Access Key ID** (from IAM user)
- **AWS Secret Access Key** (from IAM user)
- **Default region** (e.g., us-east-1, eu-west-1)
- **Output format** (json)

### Step 2: Create IAM User (Security Best Practice)

1. Go to **IAM Console** → **Users** → **Create user**
2. Username: `portfolio-deployer`
3. Attach policies:
   - `AmazonS3FullAccess`
   - `CloudFrontFullAccess`
4. Create access keys for CLI access

### Step 3: Create S3 Bucket

```bash
# Replace 'your-unique-bucket-name' with your actual bucket name
aws s3 mb s3://your-unique-bucket-name --region us-east-1
```

Or via AWS Console:
1. Go to **S3 Console**
2. **Create bucket**
3. Bucket name: `your-portfolio-2024` (must be globally unique)
4. Region: Choose closest to your users
5. **Uncheck** "Block all public access"
6. Create bucket

### Step 4: Configure S3 for Static Website Hosting

```bash
# Enable static website hosting
aws s3 website s3://your-unique-bucket-name --index-document index.html --error-document index.html
```

Or via Console:
1. Select your bucket → **Properties**
2. **Static website hosting** → **Edit**
3. **Enable** static website hosting
4. Index document: `index.html`
5. Error document: `index.html`

### Step 5: Create CloudFront Distribution

Via AWS Console:
1. Go to **CloudFront Console**
2. **Create distribution**
3. **Origin domain**: Select your S3 bucket
4. **Origin access**: Origin access control settings (OAC)
5. **Default root object**: `index.html`
6. **Custom error pages**:
   - HTTP Error Code: `403` → Response Page Path: `/index.html` → HTTP Response Code: `200`
   - HTTP Error Code: `404` → Response Page Path: `/index.html` → HTTP Response Code: `200`
7. **Create distribution**

### Step 6: Update Deployment Scripts

Edit the deployment script files:

**For Windows (`deploy-s3.bat`):**
```batch
set BUCKET_NAME=your-actual-bucket-name
set DISTRIBUTION_ID=your-actual-distribution-id
```

**For Linux/Mac (`deploy-s3.sh`):**
```bash
BUCKET_NAME="your-actual-bucket-name"
DISTRIBUTION_ID="your-actual-distribution-id"
```

### Step 7: Deploy Your Portfolio

**Windows:**
```cmd
deploy-s3.bat
```

**Linux/Mac:**
```bash
chmod +x deploy-s3.sh
./deploy-s3.sh
```

---

## 🔄 Automatic Deployment with GitHub Actions

### Step 1: Add Secrets to GitHub Repository

Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**

Add these secrets:
- `AWS_ACCESS_KEY_ID`: Your IAM user access key
- `AWS_SECRET_ACCESS_KEY`: Your IAM user secret key
- `AWS_REGION`: Your AWS region (e.g., us-east-1)
- `S3_BUCKET_NAME`: Your S3 bucket name
- `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID

### Step 2: Push to GitHub

The GitHub Actions workflow will automatically deploy when you push to main/master branch.

---

## 🌐 Custom Domain Setup (Optional)

### Step 1: Add Custom Domain to CloudFront

1. Go to your CloudFront distribution
2. **Edit** → **Alternate domain names (CNAMEs)**
3. Add your domain: `portfolio.yourdomain.com`
4. **SSL Certificate**: Request or import certificate

### Step 2: Update DNS Records

Add CNAME record in your domain provider:
```
Type: CNAME
Name: portfolio (or www)
Value: your-distribution-domain.cloudfront.net
```

---

## 💰 Cost Estimation

### Monthly Costs (Approximate):
- **S3 Storage**: $0.023/GB (~$0.50 for typical portfolio)
- **S3 Requests**: $0.0004/1000 requests (~$0.10)
- **CloudFront**: $0.085/GB for first 10TB (~$2-5)
- **Route 53** (if using custom domain): $0.50/month

**Total: ~$3-6/month** for a professional portfolio with global CDN

---

## 🔧 Troubleshooting

### Common Issues:

1. **403 Forbidden Error**
   - Check bucket policy allows CloudFront access
   - Verify OAC is properly configured

2. **404 on Refresh**
   - Ensure error pages are configured in CloudFront
   - Check that error document is set to `index.html`

3. **Slow Updates**
   - CloudFront cache takes time to update
   - Use cache invalidation in deployment script

4. **Build Fails**
   - Check Node.js version compatibility
   - Verify all dependencies are installed

### Useful Commands:

```bash
# Check AWS CLI configuration
aws sts get-caller-identity

# List S3 buckets
aws s3 ls

# Check CloudFront distributions
aws cloudfront list-distributions

# Manual cache invalidation
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

---

## 🎉 Success!

Once deployed, your portfolio will be available at:
- **CloudFront URL**: `https://your-distribution-id.cloudfront.net`
- **Custom Domain** (if configured): `https://portfolio.yourdomain.com`

Your portfolio now has:
- ✅ Global CDN delivery
- ✅ HTTPS encryption
- ✅ Automatic deployments
- ✅ Professional hosting
- ✅ High availability

---

## 📞 Need Help?

If you encounter any issues:
1. Check the AWS CloudWatch logs
2. Verify IAM permissions
3. Test with AWS CLI commands
4. Check the GitHub Actions logs (if using auto-deployment)

Your portfolio is now ready for the world! 🌟