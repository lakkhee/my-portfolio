import React from "react";

export default function Footer() {
  return (
    <footer className="relative py-8 text-center 
                       bg-gradient-to-r from-black via-blue-950 to-blue-600 
                       text-white overflow-hidden">
      {/* Subtle floating circle in footer */}
      <div className="absolute top-0 left-1/2 w-40 h-40 rounded-full bg-blue-900 opacity-20 blur-3xl -translate-x-1/2"></div>

      <p className="relative z-10 text-gray-300">
        &copy; {new Date().getFullYear()} Lakkhee Warangana. All rights reserved.
      </p>

      <p className="relative z-10 mt-2 text-gray-400 text-sm">
        Connect with me on{" "}
        <a 
          href="https://github.com/lakkhee" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>{" "}|
        <a 
          href="https://www.linkedin.com/in/lakkhee-warangana-945789311" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:underline ml-1"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
