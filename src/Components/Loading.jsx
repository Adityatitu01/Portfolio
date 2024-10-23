import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// List of languages for "Welcome"
const welcomeMessages = [
    'Welcome',  // English
    'स्वागत है',  // Hindi
    'Bonjour',  // French
    'Svagatam', // Nepali
    '欢迎',  // Chinese
];

// List of colors corresponding to each welcome message
const colors = [
  '#3949AB',  // English (indigo)
  '#F4C430',  // Hindi (Saffron)
  '#00ffff',  // French (aqua)
  '#FF4040',  // Nepali (red)
  '#F4D03F',  // Chinese (Yellow)
  '#8E44AD',  // Japanese (Purple)
];

const Loading = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Update the message every 0.375 seconds to fit all animations within 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % welcomeMessages.length);
    }, 375); // Change language every 375ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [welcomeMessages.length]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* AnimatePresence for smooth transition between messages */}
      <AnimatePresence mode="wait">
        <motion.h1
          key={welcomeMessages[currentIndex]}
          initial={{ opacity: 0, y: 20, color: colors[currentIndex] }}
          animate={{ opacity: 1, y: 0, color: colors[currentIndex] }}
          exit={{ opacity: 0, y: -20, color: colors[currentIndex] }}
          transition={{ duration: 0.15 }} 
          className="text-5xl font-bold"
        >
          {welcomeMessages[currentIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default Loading;
