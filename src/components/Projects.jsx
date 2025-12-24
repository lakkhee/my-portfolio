import React, { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const projects = [
    //{
     // name: "AI-Powered Badminton Training Application – SmashPro",
      //description: `Developed a mobile app that analyzes badminton player movements in real time using computer vision. Implemented pose estimation and motion tracking to evaluate techniques, providing automated feedback and personalized coaching insights. Designed a mobile-friendly interface for smooth training analysis.`,
      //tech: ["React Native", "FastAPI", "Computer Vision", "Pose Estimation"],
      //category: "mobile",
      //color: "from-purple-500 to-pink-500",
      //link: "#",
    //},
    {
      name: "e-Shift Transport Management System",
      description: `Desktop system to manage transport jobs, customers, vehicles, and loads. Implemented job assignment, status tracking, and transport unit management. Integrated a relational database to support efficient operations.`,
      tech: ["C#", "Windows Forms", "MS SQL"],
      category: "desktop",
      color: "from-blue-500 to-cyan-500",
      link: "https://github.com/lakkhee/e-shift-system",
    },
    {
      name: "Payroll Management System – Grifindo Toys",
      description: `Built a payroll system to manage employee records, salary calculations, and payroll reports. Automated tax calculations and salary processing for 50 employees, improving payroll accuracy and reducing manual effort.`,
      tech: ["C#", "MS SQL"],
      category: "desktop",
      color: "from-green-500 to-teal-500",
      link: "https://github.com/lakkhee/Payroll-Management-System",
    },
    {
      name: "Freelance Photographer Website – Malcolm Lismore",
      description: `Designed a responsive portfolio website showcasing photography work and services. Implemented an enquiry form for booking requests and structured the site for future gallery expansion.`,
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "web",
      color: "from-orange-500 to-red-500",
      link: "#",
    },
    {
      name: "Database System – Quiet Attic Films",
      description: `Designed a database system to manage client productions, locations, properties, and staff details. Improved data organization and supported efficient tracking of multiple film productions.`,
      tech: ["Database Design", "MS SQL", "C#"],
      category: "desktop",
      color: "from-indigo-500 to-purple-500",
      link: "https://github.com/lakkhee/QuietAtticFilms-DBMS",
    },
    {
      name: "E-Video Cloud (EVC) – UI/UX Design Project",
      description: `Designed end-to-end UI/UX for a cloud-based online video platform. Created user flows and interfaces for video discovery, content rental and ownership, personal libraries, playlists, gifting features, media player interactions, producer dashboards, and system settings.`,
      tech: ["UI/UX Design", "Wireframing", "User Flow Design", "XD"],
      category: "uiux",
      color: "from-purple-500 to-indigo-500",
      link: "#",
    },

  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile" },
    { id: "web", label: "Web" },
    { id: "desktop", label: "Desktop" },
    { id: "uiux", label: "UIUX" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="projects"
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
            top: '15%', 
            right: '10%',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        ></div>
        <div 
          className="absolute w-[500px] h-[500px] bg-cyan-500 rounded-full blur-3xl animate-pulse" 
          style={{ 
            animationDelay: '1s',
            bottom: '10%',
            left: '5%',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-pink-500 rounded-full blur-3xl animate-pulse" 
          style={{ 
            animationDelay: '0.5s',
            top: '50%',
            right: '40%',
            transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px)`
          }}
        ></div>
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
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
        .animate-slide-up { animation: slideUp 0.6s ease-out; }
      `}</style>

      <div className="relative max-w-6xl mx-auto z-20">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">Projects</span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 rounded-full mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">Building solutions that make a difference</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap animate-slide-up">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                activeFilter === cat.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="group relative flex flex-col bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/10 hover:border-blue-400/50"
              onClick={() => setSelectedProject(project)}
              style={{
                animation: 'slideUp 0.6s ease-out',
                animationDelay: `${i * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Gradient overlay header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              {/* Project icon/number */}
              <div className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                {i + 1}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 pr-12 leading-tight">{project.name}</h3>
                
                <p className="text-gray-300 text-sm mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full font-semibold text-blue-300 border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-blue-400 font-semibold text-sm group-hover:text-blue-300 transition-colors">
                  View Details
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-slide-up"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-3xl w-full p-8 relative overflow-y-auto max-h-[90vh] border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-white text-2xl font-bold transition-all duration-300 flex items-center justify-center"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            {/* Gradient header */}
            <div className={`h-2 bg-gradient-to-r ${selectedProject.color} rounded-t-xl -mx-8 -mt-8 mb-6`}></div>

            <h3 className="text-3xl font-bold mb-4 text-white pr-12">{selectedProject.name}</h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full font-semibold text-blue-300 border border-blue-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}