import { motion } from "framer-motion";
import { Download } from "lucide-react";

const FloatingResumeButton = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 2, ease: "backOut" }}
    >
      <motion.a
        href="https://drive.google.com/file/d/1LFxt7QUAm5zHDnkOMNwQmZows-iqzhI5/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 px-4 py-3 bg-primary text-white font-semibold text-sm uppercase tracking-wide rounded-full shadow-2xl border-2 border-primary overflow-hidden transition-all duration-300 hover:bg-white hover:text-primary hover:border-primary"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 15px 35px rgba(34, 197, 94, 0.4)",
          y: -5
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -8, 0],
          boxShadow: [
            "0 10px 25px rgba(34, 197, 94, 0.3)",
            "0 15px 35px rgba(34, 197, 94, 0.4)",
            "0 10px 25px rgba(34, 197, 94, 0.3)"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Pulsing background effect */}
        <motion.div 
          className="absolute inset-0 bg-primary rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.8, 0.4, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Rotating border */}
        <motion.div 
          className="absolute inset-0 rounded-full border-2 border-dashed border-white/30"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Download Icon */}
        <motion.div
          className="relative z-10"
          animate={{ 
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Download size={20} className="group-hover:animate-bounce" />
        </motion.div>
        
        <span className="relative z-10 hidden sm:inline">Resume</span>
        
        {/* Shine effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
          animate={{ 
            x: ["-100%", "100%"]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatDelay: 2
          }}
        />
      </motion.a>
      
      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-secondary-dark text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        Download My Resume
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-secondary-dark"></div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingResumeButton;