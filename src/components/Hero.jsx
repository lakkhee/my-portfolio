import React, { useState } from "react";
import myPhoto from "../assets/my-photo.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;
    setOffset({ x, y });

    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center
                 px-8 md:px-20 text-white overflow-hidden
                 bg-gradient-to-br from-black via-blue-950 to-blue-600"
    >
      {/* ANIMATED BACKGROUND ORBS */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
          style={{ 
            top: '20%', 
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl animate-pulse" 
          style={{ 
            animationDelay: '1s',
            bottom: '15%',
            right: '10%',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse" 
          style={{ 
            animationDelay: '0.5s',
            top: '50%',
            right: '30%',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>
      </div>

      {/* FLOATING PARTICLES */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 order-2 md:order-1">
          <div className="animate-fadeUp delay-1">
            <p className="text-blue-400 font-semibold text-lg mb-2 tracking-wider"></p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Hi, I'm <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                Lakkhee Warangana
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 animate-fadeUp delay-2 leading-relaxed">
            Software Developer building modern & scalable applications with passion and precision
          </p>

          {/* SKILL BADGES */}
          <div className="flex flex-wrap gap-3 animate-fadeUp delay-3">
            {["React Native", "Python", "C#", "PHP"].map(
              (skill, idx) => (
                <span
                  key={skill}
                  className="px-5 py-2 text-sm font-semibold rounded-full
                           bg-gradient-to-r from-blue-500/20 to-purple-600/20
                           border border-blue-400/40 backdrop-blur-sm
                           hover:from-blue-500/40 hover:to-purple-600/40
                           hover:scale-110 hover:-translate-y-1
                           transition-all duration-300 cursor-default shadow-lg"
                  style={{
                    animationDelay: `${0.6 + idx * 0.1}s`
                  }}
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-2 animate-fadeUp delay-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border-2 border-white/80 text-white hover:bg-white hover:text-blue-600 font-bold transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 pt-2 animate-fadeUp delay-5">
            <a
              href="https://github.com/lakkhee"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-2xl hover:text-blue-400 hover:scale-125 transition-all duration-300 border border-white/20 shadow-lg"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/lakkhee-warangana-945789311"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-2xl hover:text-blue-400 hover:scale-125 transition-all duration-300 border border-white/20 shadow-lg"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE WITH PARALLAX */}
        <div className="flex justify-center order-1 md:order-2 animate-fadeUp delay-5">
          <div
            className="relative animate-float"
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`,
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-40 blur-3xl animate-pulse"></div>

            {/* Rotating ring */}
            <div className="absolute inset-[-20px] border-2 border-blue-400/30 rounded-full animate-spin-slow"></div>

            <img
              src={myPhoto}
              alt="Lakkhee"
              className="relative w-72 md:w-96 h-72 md:h-96 rounded-full object-cover
                       border-4 border-white/10 shadow-2xl hover:scale-105 transition-transform duration-500"
            />

            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm font-semibold">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes float {
            0%,100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-12px) rotate(2deg); }
            50% { transform: translateY(-20px) rotate(0deg); }
            75% { transform: translateY(-12px) rotate(-2deg); }
          }

          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .animate-fadeUp {
            animation: fadeUp 1s ease forwards;
            opacity: 0;
          }

          .delay-1 { animation-delay: 0.2s; }
          .delay-2 { animation-delay: 0.4s; }
          .delay-3 { animation-delay: 0.6s; }
          .delay-4 { animation-delay: 0.9s; }
          .delay-5 { animation-delay: 1.1s; }

          .animate-float {
            animation: float 8s ease-in-out infinite;
          }

          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
}