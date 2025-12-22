import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [animateLinks, setAnimateLinks] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Trigger animation when near top (or adjust as needed)
      if (scrollY < 50) {
        setAnimateLinks(false); // reset animation
        setTimeout(() => setAnimateLinks(true), 50); // re-trigger
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger first animation on mount
    setTimeout(() => setAnimateLinks(true), 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-black via-blue-950 to-blue-600 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-white">
          
        </h1>

        <ul className="flex space-x-6">
          {navLinks.map((link, i) => (
            <li
              key={link}
              className={`transition-all duration-500 ease-out transform ${
                animateLinks
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <a
                href={`#${link.toLowerCase()}`}
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
