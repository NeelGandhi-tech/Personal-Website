import { useState, useEffect } from 'react'
import { FaCode, FaCogs, FaTools, FaRocket, FaPython, FaJs, FaJava, FaReact, FaNode, FaDocker, FaGitAlt, FaBrain, FaDatabase, FaCloud, FaMobile } from 'react-icons/fa'

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null)
    const [hoveredCategory, setHoveredCategory] = useState(null)
    const [animatedSkills, setAnimatedSkills] = useState({})

    useEffect(() => {
        // Animate skills on mount
        const timer = setTimeout(() => {
            setAnimatedSkills(prev => ({
                ...prev,
                animate: true
            }))
        }, 500)
        return () => clearTimeout(timer)
    }, [])

    const skillCategories = [
      {
        title: 'Languages',
        skills: [
          { name: 'Python', level: 95, icon: <FaPython />, color: 'yellow' },
          { name: 'JavaScript', level: 90, icon: <FaJs />, color: 'yellow' },
          { name: 'Java', level: 85, icon: <FaJava />, color: 'orange' },
          { name: 'C++', level: 80, icon: <FaCode />, color: 'blue' },
          { name: 'Swift', level: 75, icon: <FaMobile />, color: 'orange' },
          { name: 'SQL', level: 90, icon: <FaDatabase />, color: 'blue' },
          { name: 'Rust', level: 70, icon: <FaCode />, color: 'orange' },
          { name: 'R', level: 85, icon: <FaCode />, color: 'blue' }
        ],
        icon: <FaCode />,
        gradient: 'from-blue-500 to-cyan-500',
        color: 'blue',
        description: 'Programming languages I use to build amazing things!'
      },
      {
        title: 'Frameworks & Libraries',
        skills: [
          { name: 'React', level: 95, icon: <FaReact />, color: 'cyan' },
          { name: 'Node.js', level: 90, icon: <FaNode />, color: 'green' },
          { name: 'Flask', level: 85, icon: <FaCode />, color: 'gray' },
          { name: 'TensorFlow', level: 90, icon: <FaBrain />, color: 'orange' },
          { name: 'PyTorch', level: 85, icon: <FaBrain />, color: 'red' },
          { name: 'Tailwind', level: 95, icon: <FaCode />, color: 'cyan' },
          { name: 'XGBoost', level: 80, icon: <FaBrain />, color: 'green' },
          { name: 'Vue', level: 75, icon: <FaCode />, color: 'green' }
        ],
        icon: <FaReact />,
        gradient: 'from-purple-500 to-pink-500',
        color: 'purple',
        description: 'Modern frameworks that power my applications!'
      },
      {
        title: 'Tools & Technologies',
        skills: [
          { name: 'Git', level: 95, icon: <FaGitAlt />, color: 'orange' },
          { name: 'GCP', level: 85, icon: <FaCloud />, color: 'blue' },
          { name: 'Docker', level: 80, icon: <FaDocker />, color: 'blue' },
          { name: 'MySQL', level: 90, icon: <FaDatabase />, color: 'blue' },
          { name: 'Jupyter', level: 95, icon: <FaCode />, color: 'orange' },
          { name: 'OpenCV', level: 85, icon: <FaBrain />, color: 'green' },
          { name: 'Cypress', level: 80, icon: <FaCode />, color: 'green' }
        ],
        icon: <FaTools />,
        gradient: 'from-green-500 to-emerald-500',
        color: 'green',
        description: 'Essential tools for development and deployment!'
      },
      {
        title: 'Specializations',
        skills: [
          { name: 'Machine Learning', level: 90, icon: <FaBrain />, color: 'purple' },
          { name: 'Full-Stack Dev', level: 95, icon: <FaCode />, color: 'blue' },
          { name: 'IoT Systems', level: 85, icon: <FaTools />, color: 'green' },
          { name: 'Data Analytics', level: 90, icon: <FaDatabase />, color: 'blue' },
          { name: 'Embedded Software', level: 80, icon: <FaCogs />, color: 'gray' }
        ],
        icon: <FaRocket />,
        gradient: 'from-orange-500 to-red-500',
        color: 'orange',
        description: 'My areas of expertise and passion!'
      },
    ]
  
    return (
      <section id="skills" className="py-12 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 relative overflow-hidden">
        {/* Simple background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400/30 rotate-45 animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce delay-700"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-4">
              <FaCogs className="inline mr-2" />
              Technical Skills
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
              My Skills
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 transition-all duration-500 border border-white/50 relative overflow-hidden transform hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${category.color === 'blue' ? 'rgba(59, 130, 246, 0.1)' : category.color === 'purple' ? 'rgba(147, 51, 234, 0.1)' : category.color === 'green' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(249, 115, 22, 0.1)'}, rgba(255, 255, 255, 0.9))`,
                  animationDelay: `${index * 0.2}s`,
                  transform: `perspective(1000px) rotateX(${hoveredCategory === index ? '5deg' : '0deg'})`
                }}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient} text-white mr-3 transform group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <p className="text-xs text-slate-600 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="group/skill relative"
                        onMouseEnter={() => setHoveredSkill(`${index}-${idx}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className={`text-${category.color}-500 text-sm`}>
                              {skill.icon}
                            </span>
                            <span className="text-sm font-medium text-slate-700">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs text-slate-500 font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ 
                              width: `${skill.level}%`,
                              transitionDelay: `${idx * 100}ms`
                            }}
                          >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
                          </div>
                        </div>
                        
                        {/* Skill popup */}
                        {hoveredSkill === `${index}-${idx}` && (
                          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white p-2 rounded-lg shadow-2xl z-50 min-w-max animate-bounce">
                            <div className="text-xs font-semibold">{skill.name}</div>
                            <div className="text-xs text-blue-300">{skill.level}% Proficiency</div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills
  