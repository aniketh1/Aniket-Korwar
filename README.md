# 🚀 Aniket Korwar - Portfolio Website

> A modern, interactive portfolio showcasing my journey as a Software Development Engineer

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://your-portfolio-url.com)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/aniketh1/Aniket-Korwar)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/aniket-korwar)

## 🎯 Overview

An elegant, responsive portfolio website featuring interactive navigation, smooth animations, and a modern design. Built with cutting-edge web technologies to showcase my skills, projects, and professional journey.

### ✨ Key Features

- **🎮 Interactive Navigation** - 8 animated geometric shapes for unique section navigation
- **🎨 Custom Animations** - Smooth transitions and engaging micro-interactions
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Performance Optimized** - Fast loading with modern build tools
- **🎯 Custom Cursor** - Enhanced user experience with custom cursor effects
- **🌙 Modern UI/UX** - Clean, professional design with attention to detail

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components

### Tools & Libraries
- **Lucide React** - Beautiful icons
- **React Query** - Data fetching and state management
- **React Router** - Client-side routing
- **Date-fns** - Date manipulation utilities

### Deployment
- **AWS S3** - Static website hosting
- **GitHub Actions** - Automated CI/CD pipeline
- **Custom Domain** - Professional web presence

## 🎨 Interactive Features

### Navigation Shapes
Each animated shape navigates to a different section:

- 🟦 **Large Square** → About Me
- 🔵 **Moving Circle** → Skills & Technologies
- 🟫 **Rotating Square** → Professional Experience
- 🔺 **Floating Triangle** → Featured Projects
- 🟩 **Small Square** → Certifications
- 🔵 **Bouncing Circle** → Contact Information
- 🔶 **Hexagon** → Social Links
- 📄 **Rectangle** → Resume Download

### Animations
- Continuous shape rotations and movements
- Hover effects with scale and glow
- Smooth scrolling between sections
- Loading animations and transitions
- Custom cursor with interactive feedback

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/aniketh1/Aniket-Korwar.git

# Navigate to project directory
cd Aniket-Korwar

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── HeroSection.tsx  # Main landing section with interactive shapes
│   ├── About.tsx        # About me section
│   ├── WorkHighlights.tsx # Featured projects
│   ├── Certifications.tsx # Professional certifications
│   ├── CustomCursor.tsx # Custom cursor component
│   └── ui/              # shadcn/ui components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
└── styles/              # Global styles and Tailwind config
```

## 🎯 Sections Overview

### 🏠 Hero Section
- Interactive animated navigation shapes
- Professional profile photo with glowing effects
- Dynamic introduction with typewriter effects
- Call-to-action buttons

### 👨‍💻 About Me
- Professional background and journey
- Skills and technologies with progress indicators
- Experience timeline with detailed descriptions
- Personal interests and hobbies

### 💼 Featured Projects
- **Amazon Clone 2.0** - Full-stack e-commerce platform
- **ClimaView Weather App** - Real-time weather application
- **Coffee-Hub** - Coffee shop management system
- Interactive project cards with live demos and GitHub links

### 🏆 Certifications
- AWS certifications and achievements
- Professional development courses
- Technical skill validations

### 📞 Contact
- Integrated calendar for meeting scheduling
- Social media links and professional profiles
- Contact form with email integration
- Resume download functionality

## 🚀 Deployment

### AWS S3 Deployment

The portfolio is configured for deployment to AWS S3 with CloudFront CDN:

```bash
# Build the project
npm run build

# Deploy to S3 (requires AWS CLI configuration)
./deploy-s3.sh
```

### GitHub Pages (Alternative)

```bash
# Build and deploy to GitHub Pages
npm run build
# Push dist folder to gh-pages branch
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_CONTACT_EMAIL=your-email@example.com
VITE_RESUME_URL=your-resume-url
VITE_CALENDAR_URL=your-calendar-booking-url
```

### Customization
- Update personal information in `src/data/personal.ts`
- Modify color scheme in `tailwind.config.js`
- Add/remove sections by editing page components
- Customize animations in component files

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: Optimized with code splitting

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and feedback:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Aniket Korwar**
- 📧 Email: [your-email@example.com](mailto:your-email@example.com)
- 💼 LinkedIn: [linkedin.com/in/aniket-korwar](https://linkedin.com/in/aniket-korwar)
- 🐙 GitHub: [github.com/aniketh1](https://github.com/aniketh1)
- 🌐 Portfolio: [your-portfolio-url.com](https://your-portfolio-url.com)

---

<div align="center">
  <p>⭐ Star this repository if you found it helpful!</p>
  <p>Made with ❤️ by Aniket Korwar</p>
</div>
