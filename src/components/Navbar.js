// src/components/Navbar.js

export default function Navbar() {
  // Navigation links — each has an id matching a section in the page
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    // Fixed navbar stays at top while scrolling
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo / Brand name */}
          <a href="#home" className="text-lg font-bold text-zinc-100">
            PJ<span className="text-zinc-500">.</span>
          </a>

          {/* Desktop nav links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button key={item.id} className="text-sm font-medium text-zinc-500">
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