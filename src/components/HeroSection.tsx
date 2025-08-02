
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, User, Code, Briefcase, Award, Calendar, Github } from "lucide-react";

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'work', label: 'Projects', icon: Code },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'calendar', label: 'Contact', icon: Calendar },
    { id: 'social', label: 'Social Links', icon: Github },
  ];

  const handleNavClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary-dark">
      {/* Mobile Menu Button - Visible only on mobile */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/80 transition-all"
        aria-label="Open navigation menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Sidebar Navigation */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="md:hidden fixed inset-y-0 left-0 z-50 w-80 bg-secondary-dark/95 backdrop-blur-md shadow-2xl"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">Navigation</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-all"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="p-6">
          <ul className="space-y-4">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="w-full flex items-center space-x-4 p-4 text-white hover:bg-primary/20 rounded-lg transition-all group"
                >
                  <item.icon size={20} className="text-primary group-hover:text-white" />
                  <span className="text-lg font-medium">{item.label}</span>
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  window.open('https://drive.google.com/file/d/1LFxt7QUAm5zHDnkOMNwQmZows-iqzhI5/view?usp=sharing', '_blank');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center space-x-4 p-4 text-white hover:bg-secondary/20 rounded-lg transition-all group border border-secondary"
              >
                <svg className="w-5 h-5 text-secondary group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
                <span className="text-lg font-medium">Download Resume</span>
              </button>
            </li>
          </ul>
        </nav>
      </motion.div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Desktop Interactive Navigation Shapes - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 overflow-hidden z-20">
        {/* About Section - Rotating Square */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('About button clicked!');
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="absolute top-16 left-16 lg:top-20 lg:left-20 w-32 h-32 lg:w-40 lg:h-40 group"
          style={{ 
            cursor: 'pointer', 
            pointerEvents: 'all', 
            zIndex: 99999,
            position: 'absolute'
          }}
          title="About Me"
        >
          <motion.div
            className="w-full h-full bg-primary/20 border-2 border-primary hover:bg-primary/40 hover:border-primary/80 transition-all duration-300 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-bold text-sm lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              ABOUT
            </span>
          </motion.div>
        </button>

        {/* Skills Section - Ping Pong Circle */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Skills button clicked!');
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
              const skillsSection = document.querySelector('[data-section="skills"]');
              skillsSection?.scrollIntoView({ behavior: 'smooth' });
            }, 500);
          }}
          className="absolute top-24 right-16 lg:top-32 lg:right-32 w-20 h-20 lg:w-24 lg:h-24 group"
          style={{ 
            cursor: 'pointer', 
            pointerEvents: 'all', 
            zIndex: 99999,
            position: 'absolute'
          }}
          title="Skills"
        >
          <motion.div
            className="w-full h-full bg-secondary rounded-full hover:bg-secondary/80 transition-all duration-300 flex items-center justify-center"
            animate={{ 
              x: [0, 50, 0, -50, 0],
              y: [0, -25, 0, 25, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ 
              scale: 1.2,
              boxShadow: "0 0 25px rgba(156, 163, 175, 0.7)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-white font-bold text-xs lg:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              SKILLS
            </span>
          </motion.div>
        </button>

        {/* Experience Section - Large Square */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Experience button clicked!');
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
              const experienceSection = document.querySelector('[data-section="experience"]');
              experienceSection?.scrollIntoView({ behavior: 'smooth' });
            }, 500);
          }}
          className="absolute bottom-16 right-16 lg:bottom-20 lg:right-20 w-40 h-40 lg:w-60 lg:h-60 group"
          style={{ 
            cursor: 'pointer', 
            pointerEvents: 'all', 
            zIndex: 99999,
            position: 'absolute'
          }}
          title="Experience"
        >
          <motion.div
            className="w-full h-full bg-secondary/30 border border-secondary hover:bg-secondary/50 hover:border-secondary/80 transition-all duration-300 flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(156, 163, 175, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-white font-bold text-sm lg:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              EXPERIENCE
            </span>
          </motion.div>
        </button>

        {/* Projects Section - Floating Triangle */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Projects button clicked!');
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute top-32 right-24 lg:top-40 lg:right-40 group"
          style={{ 
            cursor: 'pointer', 
            pointerEvents: 'all', 
            zIndex: 99999,
            position: 'absolute'
          }}
          title="Projects"
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ 
              scale: 1.3,
              filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.8))"
            }}
            whileTap={{ scale: 0.8 }}
          >
            <div 
              className="w-0 h-0 border-l-transparent border-r-transparent border-b-primary/40 group-hover:border-b-primary/80 transition-colors duration-300"
              style={{
                borderLeftWidth: '20px',
                borderRightWidth: '20px', 
                borderBottomWidth: '35px'
              }}
            />
            <span className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              PROJECTS
            </span>
          </motion.div>
        </button>

        {/* Certifications Section - Small Square */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Certifications button clicked!');
            document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute bottom-32 left-16 lg:bottom-40 lg:left-40 w-12 h-12 lg:w-16 lg:h-16 group"
          style={{ 
            cursor: 'pointer', 
            pointerEvents: 'all', 
            zIndex: 99999,
            position: 'absolute'
          }}
          title="Certifications"
        >
          <motion.div
            className="w-full h-full bg-primary/60 hover:bg-primary/90 transition-all duration-300 flex items-center justify-center"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            whileHover={{ 
              scale: 1.4,
              boxShadow: "0 0 20px rgba(34, 197, 94, 0.8)"
            }}
            whileTap={{ scale: 0.8 }}
          >
            <span className="text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              CERTS
            </span>
          </motion.div>
        </button>

        {/* Contact Section - Bouncing Circle */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Contact button clicked!');
            document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute bottom-24 left-1/4 lg:bottom-32 lg:left-1/4 w-16 h-16 lg:w-20 lg:h-20 group"
          style={{ 
            cursor: 'pointer', 
            pointerEvents: 'all', 
            zIndex: 99999,
            position: 'absolute'
          }}
          title="Contact Me"
        >
          <motion.div
            className="w-full h-full bg-secondary/50 rounded-full hover:bg-secondary/80 transition-all duration-300 flex items-center justify-center"
            animate={{ 
              y: [0, -40, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ 
              scale: 1.3,
              boxShadow: "0 0 25px rgba(156, 163, 175, 0.7)"
            }}
            whileTap={{ scale: 0.7 }}
          >
            <span className="text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              CONTACT
            </span>
          </motion.div>
        </button>

        {/* Social Links - Pulsing Hexagon */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Social button clicked!');
            document.getElementById('social')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute top-1/4 left-1/4 lg:left-1/3 w-10 h-10 lg:w-12 lg:h-12 group"
          style={{ 
            cursor: 'pointer', 
            pointerEvents: 'all', 
            zIndex: 99999,
            position: 'absolute',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
          title="Social Links"
        >
          <motion.div
            className="w-full h-full bg-primary/30 hover:bg-primary/70 transition-all duration-300"
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ 
              scale: 1.8,
              filter: "drop-shadow(0 0 15px rgba(34, 197, 94, 0.8))"
            }}
            whileTap={{ scale: 0.8 }}
          />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            SOCIAL
          </span>
        </button>

        {/* Resume Download - Moving Rectangle */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Resume button clicked!');
            window.open('https://drive.google.com/file/d/1LFxt7QUAm5zHDnkOMNwQmZows-iqzhI5/view?usp=sharing', '_blank');
          }}
          className="absolute top-1/2 left-4 lg:left-10 w-6 h-24 lg:w-8 lg:h-32 group"
          style={{ 
            cursor: 'pointer', 
            pointerEvents: 'all', 
            zIndex: 99999,
            position: 'absolute'
          }}
          title="Download Resume"
        >
          <motion.div
            className="w-full h-full bg-secondary/40 hover:bg-secondary/70 transition-all duration-300"
            animate={{ 
              x: [0, 100, 0],
              rotate: [0, 45, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ 
              scale: 1.2,
              boxShadow: "0 0 20px rgba(156, 163, 175, 0.6)"
            }}
            whileTap={{ scale: 0.9 }}
          />
          <span className="absolute -right-12 lg:-right-16 top-1/2 transform -translate-y-1/2 text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap rotate-90">
            RESUME
          </span>
        </button>
      </div>
      
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
            className="mb-6"
          >
            <div className="relative inline-block">
              {/* Glowing ring around photo */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary p-1"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-secondary-dark"></div>
              </motion.div>
              
              {/* Profile Photo */}
              <motion.img
                src="/profile-photo.png"
                alt="Aniket Korwar - Software Developer"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                transition={{ duration: 0.3, ease: "backOut" }}
                style={{
                  filter: 'brightness(1.1) contrast(1.1) saturate(1.2)'
                }}
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%2322c55e'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='60' font-weight='bold' fill='white'%3EAK%3C/text%3E%3C/svg%3E";
                }}
              />
              
              {/* Status indicator */}
              <motion.div 
                className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.7)",
                    "0 0 0 10px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-secondary-dark rounded-none bg-secondary">
            Software Development Engineer
          </span>
          
          {/* Wooden Card Background for Name */}
          <div className="relative inline-block mb-6">
            {/* Card Shadow */}
            <div 
              className="absolute inset-0 transform rotate-2 scale-110 translate-y-2 translate-x-1"
              style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '8px',
                filter: 'blur(8px)',
                zIndex: -1
              }}
            />
            
            {/* Wooden Card */}
            <motion.div 
              className="absolute inset-0 transform rotate-2 scale-110"
              initial={{ rotate: 2, scale: 1.1 }}
              animate={{ 
                rotate: [2, 1, 2],
                scale: [1.1, 1.08, 1.1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: `
                  linear-gradient(135deg, 
                    #8B4513 0%, 
                    #A0522D 15%, 
                    #CD853F 30%, 
                    #D2691E 45%, 
                    #8B4513 60%, 
                    #654321 75%, 
                    #5D4037 90%, 
                    #3E2723 100%
                  )
                `,
                boxShadow: `
                  inset 0 0 20px rgba(0,0,0,0.3),
                  inset 0 0 40px rgba(139,69,19,0.2),
                  0 12px 40px rgba(0,0,0,0.5),
                  0 6px 20px rgba(0,0,0,0.3)
                `,
                borderRadius: '8px',
                border: '2px solid #654321',
              }}
            >
              {/* Wood Grain Texture Overlay */}
              <div 
                className="absolute inset-0 opacity-30 rounded-lg"
                style={{
                  background: `
                    repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 2px,
                      rgba(0,0,0,0.1) 2px,
                      rgba(0,0,0,0.1) 4px
                    ),
                    repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 1px,
                      rgba(0,0,0,0.05) 1px,
                      rgba(0,0,0,0.05) 2px
                    )
                  `
                }}
              />
              
              {/* Nail */}
              <motion.div 
                className="absolute top-4 right-6 w-3 h-3 rounded-full"
                style={{
                  background: `
                    radial-gradient(circle at 30% 30%, 
                      #C0C0C0 0%, 
                      #A8A8A8 30%, 
                      #808080 60%, 
                      #606060 100%
                    )
                  `,
                  boxShadow: `
                    inset 0 0 4px rgba(0,0,0,0.3),
                    0 2px 4px rgba(0,0,0,0.4)
                  `,
                  border: '1px solid #505050'
                }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Nail Head Highlight */}
                <div 
                  className="absolute top-0.5 left-0.5 w-1.5 h-1.5 rounded-full opacity-60"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, transparent 70%)'
                  }}
                />
              </motion.div>
              
              {/* Subtle scratches and wear marks */}
              <div 
                className="absolute inset-0 opacity-20 rounded-lg"
                style={{
                  background: `
                    linear-gradient(45deg, transparent 48%, rgba(0,0,0,0.1) 49%, rgba(0,0,0,0.1) 51%, transparent 52%),
                    linear-gradient(-45deg, transparent 68%, rgba(0,0,0,0.05) 69%, rgba(0,0,0,0.05) 71%, transparent 72%)
                  `
                }}
              />
            </motion.div>
            
            {/* Name Text */}
            <h1 className="relative text-4xl md:text-6xl font-bold text-white leading-tight uppercase px-8 py-4" 
                style={{ 
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.3)' 
                }}>
              Aniket Korwar
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Full Stack Developer passionate about building scalable web applications and innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/70 mb-8">
            <span>📧 aniketkorwa@gmail.com</span>
            <span>📱 +91 8317305659</span>
            <span>📍 Bangalore, India</span>
          </div>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.a
              href="https://drive.google.com/file/d/1LFxt7QUAm5zHDnkOMNwQmZows-iqzhI5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold text-lg uppercase tracking-wider border-2 border-primary overflow-hidden transition-all duration-300 hover:bg-transparent hover:text-primary"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary via-green-400 to-primary"
                animate={{ 
                  x: ["-100%", "100%"],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Download Icon */}
              <motion.div
                className="relative z-10"
                animate={{ 
                  y: [0, -3, 0]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="group-hover:animate-bounce"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </motion.div>
              
              <span className="relative z-10">Download Resume</span>
              
              {/* Hover effect overlay */}
              <motion.div 
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
