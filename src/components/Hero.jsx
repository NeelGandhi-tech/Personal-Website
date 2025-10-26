import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaRocket, FaBrain, FaCog, FaTerminal, FaDatabase, FaMicrochip } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative text-white pt-24 pb-16 px-4 overflow-hidden h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        {/* Main floating orbs with 3D rotation */}
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -right-48 animate-pulse transform rotate-12"></div>
        <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl -bottom-40 -left-40 animate-pulse delay-1000 transform -rotate-12"></div>
        <div className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500 rotate-45"></div>
        
        {/* Floating tech icons with advanced 3D effects */}
        <div className="absolute top-20 left-10 text-blue-400/40 text-5xl animate-float delay-300 transform hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer">
          <FaCode className="drop-shadow-lg hover:drop-shadow-2xl" style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))' }} />
        </div>
        <div className="absolute top-40 right-20 text-purple-400/40 text-4xl animate-float delay-700 transform hover:scale-110 hover:-rotate-12 transition-all duration-500 cursor-pointer">
          <FaRocket className="drop-shadow-lg hover:drop-shadow-2xl" style={{ filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))' }} />
        </div>
        <div className="absolute bottom-40 left-20 text-cyan-400/40 text-4xl animate-float delay-1000 transform hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer">
          <FaBrain className="drop-shadow-lg hover:drop-shadow-2xl" style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))' }} />
        </div>
        <div className="absolute top-60 left-1/4 text-green-400/40 text-3xl animate-float delay-500 transform hover:scale-110 hover:-rotate-12 transition-all duration-500 cursor-pointer">
          <FaTerminal className="drop-shadow-lg hover:drop-shadow-2xl" style={{ filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.5))' }} />
        </div>
        <div className="absolute top-80 right-1/3 text-yellow-400/40 text-3xl animate-float delay-1200 transform hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer">
          <FaDatabase className="drop-shadow-lg hover:drop-shadow-2xl" style={{ filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.5))' }} />
        </div>
        <div className="absolute bottom-60 right-10 text-red-400/40 text-3xl animate-float delay-800 transform hover:scale-110 hover:-rotate-12 transition-all duration-500 cursor-pointer">
          <FaMicrochip className="drop-shadow-lg hover:drop-shadow-2xl" style={{ filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.5))' }} />
        </div>
        
        {/* Animated code brackets */}
        <div className="absolute top-32 right-1/4 text-blue-300/30 text-6xl animate-pulse delay-1000 font-mono">
          {'{'}
        </div>
        <div className="absolute bottom-32 left-1/3 text-purple-300/30 text-6xl animate-pulse delay-1500 font-mono">
          {'}'}
        </div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-4 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            <FaRocket className="inline mr-2" />
            Building the Future with Code
          </div>
        </div>
        
        {/* 3D Text Effect */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight transform hover:scale-105 transition-transform duration-500">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse drop-shadow-2xl" style={{
            textShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(147, 51, 234, 0.3)',
            transform: 'perspective(1000px) rotateX(10deg)'
          }}>
            Neel Gandhi
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl text-slate-300 mb-4 font-light transform hover:scale-105 transition-transform duration-300">
          EECS Student at UC Berkeley
        </div>
        <div className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Full-Stack Developer • ML Engineer • Startup Founder
        </div>
        
        {/* Enhanced buttons with 3D effects */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold text-base hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
            style={{
              transform: 'perspective(1000px) rotateX(5deg)',
              boxShadow: '0 15px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
          >
            <span className="relative z-10">View My Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-300 rounded-xl font-bold text-base hover:bg-blue-400 hover:text-white transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            style={{
              transform: 'perspective(1000px) rotateX(5deg)',
              boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
            }}
          >
            Let's Connect
          </a>
        </div>
        
        {/* Enhanced social icons with 3D effects */}
        <div className="flex justify-center gap-8 mt-8">
          <a
            href="https://github.com/NeelGandhi-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-slate-400 hover:text-white transform hover:-translate-y-3 hover:scale-110 transition-all duration-300"
          >
            <div className="p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-400/50 transition-all duration-300" style={{
              transform: 'perspective(1000px) rotateY(15deg)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              <FaGithub size={32} />
            </div>
          </a>
          <a
            href="https://linkedin.com/in/neel-gandhi0"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-slate-400 hover:text-white transform hover:-translate-y-3 hover:scale-110 transition-all duration-300"
          >
            <div className="p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-400/50 transition-all duration-300" style={{
              transform: 'perspective(1000px) rotateY(0deg)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              <FaLinkedin size={32} />
            </div>
          </a>
          <a
            href="mailto:neelgandhi5416@berkeley.edu"
            className="group text-slate-400 hover:text-white transform hover:-translate-y-3 hover:scale-110 transition-all duration-300"
          >
            <div className="p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-400/50 transition-all duration-300" style={{
              transform: 'perspective(1000px) rotateY(-15deg)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              <FaEnvelope size={32} />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
