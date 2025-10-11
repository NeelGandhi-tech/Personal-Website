import { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaBrain, FaChartLine, FaCogs, FaCode } from 'react-icons/fa'

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null)
    const [animatedProjects, setAnimatedProjects] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedProjects(true)
        }, 300)
        return () => clearTimeout(timer)
    }, [])

    const projects = [
      {
        title: 'NeuroEcho',
        description:
          "Healthcare startup developing a smart IoT device to support Alzheimer's patients with daily care. Filed a provisional patent integrating semiconductor hardware with transformer-based ML model for real-time cognitive assistance.",
        tech: ['Python', 'Transformers', 'IoT', 'CAD'],
        icon: <FaBrain />,
        gradient: 'from-purple-500 to-pink-500',
        status: 'Patent Filed',
        impact: 'Healthcare Innovation',
        backgroundImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        title: 'FFB-Predictor',
        description:
          'End-to-end fantasy football analytics pipeline processing 7 seasons of NFL data. Trained XGBoost/LightGBM models achieving 15% lower MAE than baseline with SHAP feature importance analysis.',
        tech: ['Python', 'XGBoost', 'Pandas', 'scikit-learn'],
        icon: <FaChartLine />,
        gradient: 'from-blue-500 to-cyan-500',
        status: 'ML Pipeline',
        impact: '15% Better Accuracy',
        backgroundImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        title: 'Physical Therapy IOT',
        description:
          'IoT web app integrating 8 devices to import and organize client media with searchable dashboard. Implemented PDF export functionality reducing therapist reporting time by 78%.',
        tech: ['Flask', 'MySQL', 'HTML/CSS', 'ReportLab'],
        icon: <FaCogs />,
        gradient: 'from-green-500 to-emerald-500',
        status: 'Production Ready',
        impact: '78% Time Reduction',
        backgroundImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
    ]
  
    return (
      <section id="projects" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -top-36 -right-36"></div>
          <div className="absolute w-72 h-72 bg-purple-200/20 rounded-full blur-3xl -bottom-36 -left-36"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
              <FaCode className="inline mr-2" />
              Featured Work
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                My Projects
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Innovative solutions that showcase my passion for technology and problem-solving
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:rotate-1 transition-all duration-500 border border-white/50 relative transform hover:scale-105"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  transform: `perspective(1000px) rotateX(${hoveredProject === index ? '5deg' : '0deg'})`
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project header with background image */}
                <div className="relative p-6 text-white overflow-hidden h-48">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${project.backgroundImage})`
                    }}
                  ></div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl opacity-90">
                        {project.icon}
                      </div>
                      <div className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium">
                        {project.status}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <div className="text-sm opacity-90 font-medium">
                        {project.impact}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-700 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs rounded-full font-medium transition-colors duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm">
                      <FaGithub size={14} />
                      Code
                    </button>
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm">
                      <FaExternalLinkAlt size={14} />
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://github.com/NeelGandhi-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <FaGithub size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>
    )
  }
  
  export default Projects
  