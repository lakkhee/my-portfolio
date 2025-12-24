import React from "react";
import myPhoto from "../assets/my-photo.jpeg";

export default function About() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleResumeDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/my-portfolio/resume-lakkhee_warangana.pdf';
    link.download = 'resume-lakkhee_warangana.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-24 px-8 md:px-20
                 bg-gradient-to-br from-black via-blue-950 to-blue-600
                 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
          style={{ 
            top: '10%', 
            right: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl animate-pulse" 
          style={{ 
            animationDelay: '1s',
            bottom: '5%',
            left: '5%',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse" 
          style={{ 
            animationDelay: '0.5s',
            top: '50%',
            right: '30%',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
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
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in { animation: slideIn 0.8s ease-out; }
      `}</style>

      {/* PARTIAL CIRCLE IMAGE - Top Left */}
      <div 
        className="absolute center-0 left-0 w-98 h-98 md:w-[490px] md:h-[490px] rounded-full overflow-hidden z-10 group transition-all duration-700 hover:scale-105"
        style={{
          transform: 'translate(-20%, -20%)',
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-500 opacity-60 blur-xl animate-pulse"></div>
        
        {/* Image */}
        <img
          src={myPhoto}
          alt="Lakkhee Warangana"
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/30 to-blue-950/50"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-4xl ml-auto z-20 animate-slide-in">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About Me <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"></span>
          </h2>
          <div className="h-1.5 w-28 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 max-w-3xl">
          <p className="text-lg md:text-xl text-white leading-relaxed">
            I am an undergraduate software developer with a strong passion for building modern, reliable, and user-focused applications. I enjoy working across both frontend and backend technologies.
          </p>

          <p className="text-lg md:text-xl text-white leading-relaxed">
            I have hands-on experience in web and mobile application development, with expertise in:
          </p>

          {/* Tech stack grid */}
          <div className="grid grid-cols-4 gap-3 py-2">
            {['React', 'Python', 'Java', 'C#', 'PHP', 'HTML', 'CSS', 'SQL'].map((tech, i) => (
              <div 
                key={i} 
                className="group relative bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/40 rounded-lg p-3 text-center hover:bg-gradient-to-br hover:from-blue-500/40 hover:to-purple-600/40 hover:border-blue-400 transition-all duration-300 cursor-default hover:scale-105 hover:-translate-y-1 shadow-lg"
              >
                <p className="text-white font-bold text-sm">{tech}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl text-white leading-relaxed">
            I value clean code, solid architecture, and continuous learning.
          </p>

          <p className="text-lg md:text-xl text-white leading-relaxed">
            My goal is to grow into a professional software engineer who contributes to meaningful projects and solves <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 font-bold text-2xl">real-world problems</span> through technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button
              onClick={handleResumeDownload}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-7 py-3 rounded-full
                         bg-gradient-to-r from-blue-500 to-purple-600 
                         hover:from-blue-600 hover:to-purple-700
                         transition-all duration-300 shadow-lg hover:shadow-2xl 
                         hover:scale-105 transform font-bold text-base
                         overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Resume
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-y-1' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            <a
              href="#contact"
              className="px-7 py-3 rounded-full border-2 border-white/80 text-white
                         hover:bg-white hover:text-blue-600
                         transition-all duration-300 font-bold text-base
                         hover:scale-105 transform hover:shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}