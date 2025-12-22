import React, { useEffect, useState } from "react";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contacts = [
    { 
      title: "Email", 
      value: "hglakkheewarangana@gmail.com", 
      icon: "📧",
      link: "mailto:hglakkheewarangana@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Phone", 
      value: "0702653678", 
      icon: "📱",
      link: "tel:0702653678",
      color: "from-green-500 to-teal-500"
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 px-8 md:px-20
                 bg-gradient-to-br from-black via-blue-950 to-blue-600
                 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"
          style={{ 
            top: '20%', 
            right: '10%',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        ></div>
        <div 
          className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl animate-pulse" 
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
        .animate-slide-up { animation: slideUp 0.6s ease-out; }
      `}</style>

      <div className="relative max-w-6xl mx-auto z-20">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">Touch</span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 rounded-full mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, freelance opportunities, or collaborations. Let's create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contacts.map((contact, i) => (
              <a
                key={i}
                href={contact.link}
                target={contact.link.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/50
                            hover:scale-105 transition-all duration-500 cursor-pointer`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {contact.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{contact.title}</h3>
                  <p className="text-gray-300 text-sm break-all group-hover:text-blue-300 transition-colors">
                    {contact.value}
                  </p>
                </div>

                {/* Arrow */}
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/lakkhee-warangana-945789311"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-2xl p-6 border border-blue-500/50 hover:scale-105 transition-all duration-500 text-center group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: '450ms',
              }}
            >
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-xl font-bold">Connect on LinkedIn</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}