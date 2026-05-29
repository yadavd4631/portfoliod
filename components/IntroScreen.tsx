'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function getOrdinalNum(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default function IntroScreen() {
  const [count, setCount] = useState<number | null>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Fetch and increment the count
    fetch("https://api.counterapi.dev/v1/deepakyadav/portfolio/up")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
      })
      .catch(() => setCount(1)); // Fallback if API fails

    // Hide intro after 3.5 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling while intro is active
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0f1c] text-slate-200"
        >
          <div className="text-center px-4 flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl font-medium text-slate-400 tracking-wide"
            >
              You are the
            </motion.p>
            
            <div className="h-32 flex items-center justify-center">
              {count !== null ? (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                  className="my-4 text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {getOrdinalNum(count)}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-12 h-12 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin"
                />
              )}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-2xl font-medium text-slate-400 tracking-wide"
            >
              person to visit this portfolio.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
