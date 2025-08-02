
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-secondary-dark">
      {/* Interactive Navigation Shapes */}
      <div className="absolute inset-0 overflow-hidden z-20">
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
          className="absolute top-20 left-20 w-40 h-40 group"
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
            <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
          className="absolute top-32 right-32 w-24 h-24 group"
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
              x: [0, 100, 0, -100, 0],
              y: [0, -50, 0, 50, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ 
              scale: 1.2,
              boxShadow: "0 0 25px rgba(156, 163, 175, 0.7)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
          className="absolute bottom-20 right-20 w-60 h-60 group"
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
            <span className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
          className="absolute top-40 right-40 group"
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
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0]
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
                borderLeftWidth: '32px',
                borderRightWidth: '32px', 
                borderBottomWidth: '56px'
              }}
            />
            <span className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
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
          className="absolute bottom-40 left-40 w-16 h-16 group"
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
          className="absolute bottom-32 left-1/4 w-20 h-20 group"
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
              y: [0, -80, 0],
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
          className="absolute top-1/4 left-1/3 w-12 h-12 group"
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
          className="absolute top-1/2 left-10 w-8 h-32 group"
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
              x: [0, 200, 0],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ 
              scale: 1.2,
              boxShadow: "0 0 20px rgba(156, 163, 175, 0.6)"
            }}
            whileTap={{ scale: 0.9 }}
          />
          <span className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap rotate-90">
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
