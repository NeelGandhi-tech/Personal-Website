import { useState, useEffect } from 'react'
import { FaCode, FaCogs, FaTools, FaRocket, FaPython, FaJs, FaJava, FaReact, FaNode, FaDocker, FaGitAlt, FaBrain, FaDatabase, FaCloud, FaMobile } from 'react-icons/fa'

const Skills = () => {

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
      <section id="skills" className="py-12 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
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
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient} text-white mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} text-white`}>
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-slate-700">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills
  