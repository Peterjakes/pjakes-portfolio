// src/components/Hero.js

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  // Tracks how far user has scrolled 
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Update scrollY state whenever user scrolls
    const handleScroll = () => setScrollY(window.scrollY);

    // Attach scroll listener on mount
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount to prevent memory leaks
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // empty array = runs once on mount

  return (
    // Full screen hero section — id="home" links it to navbar scroll
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      {/* Hero content — centered on screen */}
      <div className="relative z-10 flex h-screen w-full flex-col items-center justify-center px-4 text-center">

        {/* Subtitle animates in first */}
        <motion.p
          className="mb-3 text-sm font-medium tracking-widest uppercase text-zinc-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Full Stack Developer & Graphic Designer
        </motion.p>

        {/* Name animates in after subtitle — delay: 0.15s */}
        <motion.h1
          className="mb-4 text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Peter Jakes
        </motion.h1>

        {/* Tagline animates in after name — delay: 0.3s */}
        <motion.p
          className="max-w-md text-base leading-relaxed text-zinc-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Building clean digital experiences with code and design.
        </motion.p>

        {/* Buttons animate in last — delay: 0.45s */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          
            <a href="#projects"
            className="rounded-lg border border-zinc-700 bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            View Projects
          </a>
          
            <a href="#contact"
            className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-zinc-800/50"
          >
            Get in Touch
          </a>
        </motion.div>

      </div>
    </div>
  );
}