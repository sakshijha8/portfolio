import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Home: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const titles = ["Frontend Developer", "MERN Stack Developer"];
  
  useEffect(() => {
    // Initial typing animation
    const typingTimeout = setTimeout(() => {
      setIsTyping(false);
    }, 1500);
    
    // Title switching interval
    const interval = setInterval(() => {
      setIsTyping(true);
      setTitleIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
      
      // Reset typing animation after title change
      setTimeout(() => {
        setIsTyping(false);
      }, 1500);
    }, 4000); // Switch every 4 seconds (allowing time for typing animation)
    
    return () => {
      clearInterval(interval);
      clearTimeout(typingTimeout);
    };
  }, []);
  
  const handleDownloadResume = () => {
    // Download the resume file from the public folder
    const link = document.createElement('a');
    link.href = '/sakshi_jha.pdf';
    link.download = 'sakshi_jha.pdf';
    link.click();
  };

  return (
    <section id="portfolio" className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 pt-16 md:pt-10 px-4 sm:px-6">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block text-gray-800 dark:text-white">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Sakshi Jha
            </span>
          </motion.h1>

          <div className="h-10 relative overflow-hidden mb-3 sm:mb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={titleIndex}
                className="absolute w-full flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.p
                  className={`text-lg sm:text-xl md:text-2xl font-semibold ${isTyping ? 'border-r-2' : ''}`}
                  style={{
                    background: titleIndex === 0 
                      ? "linear-gradient(to right, #3b82f6, #8b5cf6)" 
                      : "linear-gradient(to right, #8b5cf6, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                    width: isTyping ? "0%" : "100%",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    transition: isTyping ? "width 1.5s steps(20, end)" : "none"
                  }}
                  animate={{
                    width: "100%"
                  }}
                  transition={{
                    duration: isTyping ? 1.5 : 0,
                    ease: "linear"
                  }}
                >
                  {titles[titleIndex]}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Passionate software engineer with 3 years of experience building scalable web applications and innovative solutions using modern technologies.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { icon: Github, href: 'https://github.com/sakshijha8', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/sakshi-jha-a332b8217/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:sakshijha882@gmail.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-full border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300"
            >
              <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <ArrowDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;