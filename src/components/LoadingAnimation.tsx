import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      } else if (currentStep === 4 && !showText) {
        setShowText(true);
        setTimeout(() => {
          onComplete();
        }, 1200);
      }
    }, currentStep === 0 ? 300 : currentStep === 1 ? 1000 : currentStep === 2 ? 600 : currentStep === 3 ? 1000 : 800);

    return () => clearTimeout(timer);
  }, [currentStep, showText, onComplete]);

  return (
    <div className="fixed inset-0 bg-secondary-dark flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Background geometric shapes */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-8 h-8 bg-primary/20 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 right-32 w-12 h-12 border-2 border-secondary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/3 right-20 w-6 h-6 bg-primary/30"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          animate={{ 
            rotate: [0, 120, 240, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative flex items-center justify-center space-x-4">
        {/* Step 1: Circle pops up and rolls */}
        <AnimatePresence>
          {currentStep >= 0 && (
            <motion.div
              initial={{ y: -100, opacity: 0, scale: 0 }}
              animate={currentStep === 0 ? 
                { y: 0, opacity: 1, scale: 1, rotate: 0 } :
                currentStep === 1 ?
                { y: [0, -15, 0], x: [0, 40, 80], rotate: [0, 180, 360], scale: [1, 0.9, 1] } :
                currentStep >= 2 ?
                { y: 15, scaleY: 0.15, scaleX: 4, rotate: 0, borderRadius: 0 } :
                {}
              }
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                duration: currentStep === 1 ? 1.0 : 0.5,
                ease: currentStep === 1 ? "easeInOut" : "backOut"
              }}
              className={`w-10 h-10 bg-primary ${currentStep >= 2 ? '' : 'rounded-full'}`}
            />
          )}
        </AnimatePresence>

        {/* Step 2: Square pops and transforms */}
        <AnimatePresence>
          {currentStep >= 2 && (
            <motion.div
              initial={{ y: -100, opacity: 0, scale: 0, rotate: 45 }}
              animate={currentStep === 2 ?
                { y: 0, opacity: 1, scale: 1, rotate: 0 } :
                currentStep >= 3 ?
                { scale: [1, 1.8, 0], opacity: [1, 0.8, 0], rotate: [0, 180, 360] } :
                {}
              }
              transition={{ duration: 0.6, ease: "backOut" }}
              className="w-14 h-14 bg-secondary border-2 border-primary"
            />
          )}
        </AnimatePresence>

        {/* Step 3: "HELLO THERE" text appears */}
        <AnimatePresence>
          {currentStep >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "backOut" }}
              className="absolute flex items-center justify-center"
            >
              <div className="flex items-center">
                <motion.h1 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white uppercase tracking-wide whitespace-nowrap"
                  initial={{ letterSpacing: "0.3em" }}
                  animate={{ letterSpacing: "0.05em" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {"HELLO THERE".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 40, rotateX: -90, scale: 0.5 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.06,
                        ease: "backOut"
                      }}
                      className="inline-block"
                      style={{
                        textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)'
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.h1>
                
                {/* Step 4: Exclamation mark integrated */}
                <motion.div
                  initial={{ y: -60, opacity: 0, scaleY: 0 }}
                  animate={{ y: 0, opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: "backOut" }}
                  className="ml-2 flex flex-col items-center"
                >
                  {/* Exclamation mark line */}
                  <motion.div 
                    className="w-2 h-10 bg-primary mb-1"
                    animate={{ scaleY: [1, 1.2, 1], scaleX: [1, 1.1, 1] }}
                    transition={{ duration: 0.3, repeat: 3, delay: 1.0 }}
                    style={{
                      boxShadow: '0 0 15px rgba(34, 197, 94, 0.6)'
                    }}
                  />
                  {/* Exclamation mark dot */}
                  <motion.div 
                    className="w-2 h-2 bg-primary rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.3, 1] }}
                    transition={{ duration: 0.4, delay: 1.2, ease: "backOut" }}
                    style={{
                      boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)'
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Particle burst effect */}
      <AnimatePresence>
        {currentStep >= 4 && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full"
                initial={{ 
                  x: "50vw", 
                  y: "50vh", 
                  scale: 0,
                  opacity: 1
                }}
                animate={{ 
                  x: `${50 + (Math.cos(i * 30 * Math.PI / 180) * 30)}vw`,
                  y: `${50 + (Math.sin(i * 30 * Math.PI / 180) * 30)}vh`,
                  scale: [0, 1, 0],
                  opacity: [1, 0.8, 0]
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: 0.5 + (i * 0.05),
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Final fade out effect */}
      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-secondary-dark"
          >
            <div className="flex items-center justify-center h-full">
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1.05, opacity: 0 }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                className="text-center"
              >
                <motion.h2 
                  className="text-xl md:text-2xl text-white/90 mb-4 font-medium"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "backOut" }}
                >
                  Welcome to my portfolio
                </motion.h2>
                <motion.div 
                  className="w-20 h-1 bg-primary mx-auto rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
                  style={{
                    boxShadow: '0 0 20px rgba(34, 197, 94, 0.6)'
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading progress indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-3">
          {[0, 1, 2, 3, 4].map((step) => (
            <motion.div
              key={step}
              className={`w-3 h-3 rounded-full ${
                currentStep >= step ? 'bg-primary' : 'bg-white/30'
              }`}
              animate={currentStep >= step ? { 
                scale: [1, 1.4, 1],
                boxShadow: currentStep >= step ? 
                  ['0 0 0px rgba(34, 197, 94, 0)', '0 0 15px rgba(34, 197, 94, 0.8)', '0 0 8px rgba(34, 197, 94, 0.4)'] :
                  '0 0 0px rgba(34, 197, 94, 0)'
              } : {}}
              transition={{ 
                duration: 0.5, 
                ease: "backOut",
                delay: currentStep === step ? 0.1 : 0
              }}
            />
          ))}
        </div>
        
        {/* Progress bar */}
        <motion.div 
          className="mt-4 w-32 h-1 bg-white/20 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / 5) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.6)'
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingAnimation;