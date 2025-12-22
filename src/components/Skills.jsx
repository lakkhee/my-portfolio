import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaJava,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaJsSquare,
  FaPalette,
} from "react-icons/fa";
import { SiMongodb, SiReact } from "react-icons/si";

export default function Skills() {
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const skills = [
    { name: "C#", icon: <FaDatabase size={40} className="text-purple-600" />, level: 85, category: "backend" },
    { name: "Python", icon: <FaPython size={40} className="text-yellow-500" />, level: 80, category: "backend" },
    { name: "React Native", icon: <SiReact size={40} className="text-blue-500" />, level: 70, category: "frontend" },
    { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" />, level: 95, category: "frontend" },
    { name: "PHP", icon: <FaPhp size={40} className="text-indigo-500" />, level: 70, category: "backend" },
    { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" />, level: 90, category: "frontend" },
    { name: "Java", icon: <FaJava size={40} className="text-red-500" />, level: 60, category: "backend" },
    { name: "JavaScript", icon: <FaJsSquare size={40} className="text-yellow-400" />, level: 90, category: "frontend" },
    { name: "MS SQL", icon: <FaDatabase size={40} className="text-blue-600" />, level: 95, category: "database" },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" />, level: 80, category: "database" },
    { name: "UI/UX", icon: <FaPalette size={40} className="text-pink-400" />, level: 90, category: "design" },
  ];

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "design", label: "Design" },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative py-20 px-8 md:px-20
                 bg-gradient-to-br from-black via-blue-950 to-blue-600
                 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ 
            top: '20%', 
            right: '15%',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        ></div>
        <div 
          className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl animate-pulse" 
          style={{ 
            animationDelay: '1s',
            bottom: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse" 
          style={{ 
            animationDelay: '0.5s',
            top: '60%',
            right: '40%',
            transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px)`
          }}
        ></div>
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
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

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(5px); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(96, 165, 250, 0.3); }
          50% { box-shadow: 0 0 40px rgba(96, 165, 250, 0.6); }
        }
        .animate-slide-up { animation: slideUp 0.6s ease-out; }
      `}</style>

      {/* Loader Overlay */}
      {!loaded && (
        <div className="absolute inset-0 flex justify-center items-center bg-black/80 backdrop-blur-sm z-50">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-purple-400 border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
        </div>
      )}

      <div className="relative max-w-6xl mx-auto z-20">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">Skills</span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 rounded-full mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">Expertise across multiple technologies and domains</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap animate-slide-up">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, i) => (
            <div
              key={skill.name}
              className={`group relative flex flex-col items-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6
                         hover:from-white/20 hover:to-white/10
                         border border-white/10 hover:border-blue-400/50
                         transition-all duration-500 ease-out cursor-default
                         hover:scale-105 hover:-translate-y-2`}
              style={{
                transitionDelay: `${i * 80}ms`,
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(30px)",
                animation: loaded ? 'pulse-glow 3s ease-in-out infinite' : 'none',
                animationDelay: `${i * 0.2}s`
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              {/* Icon */}
              <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {skill.icon}
              </div>

              {/* Name */}
              <p className="relative z-10 mt-4 font-bold text-center text-base">{skill.name}</p>

              {/* Proficiency Bar */}
              <div className="relative z-10 w-full h-2 bg-white/20 rounded-full mt-4 overflow-hidden">
                <div
                  className={`h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: loaded ? `${skill.level}%` : "0%",
                    transitionDelay: `${i * 100 + 300}ms`
                  }}
                ></div>
              </div>

              {/* Percentage */}
              <p className="relative z-10 mt-2 text-sm font-semibold text-blue-300">{skill.level}%</p>

              {/* Hover shine effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
          <div className="text-center bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <p className="text-3xl font-bold text-blue-400">{skills.length}</p>
            <p className="text-gray-300 mt-2">Technologies</p>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <p className="text-3xl font-bold text-purple-400">{Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%</p>
            <p className="text-gray-300 mt-2">Avg Proficiency</p>
          </div>
          <div className="text-center bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <p className="text-3xl font-bold text-cyan-400">{skills.filter(s => s.level >= 80).length}</p>
            <p className="text-gray-300 mt-2">Expert Level</p>
          </div>
          <div className="text-center bg-gradient-to-br from-pink-500/20 to-red-600/20 backdrop-blur-sm border border-pink-400/30 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <p className="text-3xl font-bold text-pink-400">3+</p>
            <p className="text-gray-300 mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}