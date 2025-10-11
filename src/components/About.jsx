import React, { useState, useEffect } from 'react';
import { FaUser, FaLinkedin, FaGithub, FaEnvelope, FaBriefcase, FaCoffee } from 'react-icons/fa';

const About = () => {
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    impact: 0,
    experience: 0
  });

  const [currentTagline, setCurrentTagline] = useState(0);

  const taglines = [
    "I am an innovator",
    "I am a changer",
    "I am a builder",
    "I am a problem solver",
    "I am a dreamer",
    "I am a creator"
  ];

  useEffect(() => {
    const animateStats = () => {
      setAnimatedStats({
        projects: 0,
        impact: 0,
        experience: 0
      });

      setTimeout(() => {
        setAnimatedStats({
          projects: 15,
          impact: 10000,
          experience: 3
        });
      }, 500);
    };

    animateStats();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/neel-gandhi0', label: 'LinkedIn' },
    { icon: <FaBriefcase />, href: '#projects', label: 'Portfolio' },
    { icon: <FaGithub />, href: 'https://github.com/NeelGandhi-tech', label: 'GitHub' },
    { icon: <FaBriefcase />, href: '#projects', label: 'Work' },
    { icon: <FaCoffee />, href: '#contact', label: 'Coffee Chat' }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute w-80 h-80 bg-blue-400/20 rounded-full blur-3xl -top-40 -left-40 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-purple-400/20 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* A Bit About Me Section */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Text Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <FaUser className="text-white text-lg" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                  A Bit About Me.
                </h2>
              </div>
              
              {/* Animated Tagline */}
              <div className="mb-6">
                <div className="text-2xl md:text-3xl font-semibold text-slate-700 h-12 flex items-center">
                  <span 
                    key={currentTagline}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-taglineFade"
                  >
                    {taglines[currentTagline]}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 text-base text-slate-600 leading-relaxed">
                <p>
                  Hi there! I'm <span className="font-semibold text-slate-800">Neel</span>, a Computer Science student at UC Berkeley passionate about building innovative solutions.
                </p>
                
                <p>
                  I built <a href="#projects" className="underline text-blue-600 hover:text-blue-800 font-medium">NeuroEcho</a>, a healthcare startup with a filed provisional patent, and <a href="#projects" className="underline text-blue-600 hover:text-blue-800 font-medium">FFB-Predictor</a>, a fantasy football analytics pipeline with 15% better accuracy.
                </p>
                
                <p>
                  I love <span className="underline text-blue-600 hover:text-blue-800 font-medium cursor-pointer">machine learning</span> and <span className="underline text-blue-600 hover:text-blue-800 font-medium cursor-pointer">full-stack development</span>. Feel free to reach out at <a href="mailto:neelgandhi5416@berkeley.edu" className="underline text-blue-600 hover:text-blue-800 font-medium">my email</a>!
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-8">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    title={link.label}
                  >
                    <div className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Picture */}
            <div className="lg:w-[500px] w-full flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/407A0016.JPG"
                  alt="Neel Gandhi"
                  className="w-96 h-[480px] object-cover rounded-2xl shadow-2xl border-4 border-white"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <FaUser className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Projects Make A Real Impact Section */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
            My Projects Make A Real Impact
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Impact Cards */}
            <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold mb-2">
                {animatedStats.projects}+
              </div>
              <div className="text-blue-100 text-sm">
                Projects Built
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold mb-2">
                {animatedStats.impact.toLocaleString()}+
              </div>
              <div className="text-cyan-100 text-sm">
                Lines of Code
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-400 to-blue-500 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold mb-2">
                {animatedStats.experience}+
              </div>
              <div className="text-indigo-100 text-sm">
                Years Experience
              </div>
            </div>
          </div>
          
          <p className="text-sm text-slate-500 mt-6 max-w-2xl mx-auto">
            *This data represents the cumulative impact across all my projects and contributions to the tech community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;