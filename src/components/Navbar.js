// src/components/Navbar.js

import { useState, useEffect } from 'react';

export default function Navbar() {
  // Tracks which section is currently visible on screen
  const [activeSection, setActiveSection] = useState('home'); // default to home on load

  // Navigation links — each id matches a section element on the page
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];

      // Offset by 100px so section activates slightly before reaching top
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          // Check if scroll position is within this section's bounds
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    // Attach scroll listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener when component unmounts to prevent memory leaks
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // empty array = runs once on mount

  // Scrolls to section and also updates active state immediately on click
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId); // update active immediately without waiting for scroll
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Fixed navbar stays at top while scrolling
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo / Brand name */}
          <a href="#home" className="text-lg font-bold text-zinc-100">
            PJ<span className="text-zinc-500">.</span>
          </a>

          {/* Desktop nav links — active link is brighter */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors ${
                  // Highlight active section, dim others
                  activeSection === item.id ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger menu — visible only on small screens */}
          <button className="md:hidden text-zinc-300">☰</button>

        </div>
      </div>
    </nav>
  );
}