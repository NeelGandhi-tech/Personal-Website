import { useState, useEffect } from 'react'
import { FaMobileAlt, FaGraduationCap, FaBrain, FaUser, FaCode, FaRocket, FaLightbulb, FaHeart, FaGamepad, FaMagic, FaTrophy, FaAward, FaStar, FaFire } from 'react-icons/fa'

const About = () => {
    const [animatedStats, setAnimatedStats] = useState([0, 0, 0])
    const [hoveredInterest, setHoveredInterest] = useState(null)
    const [showPopup, setShowPopup] = useState(null)
    const [hoveredWord, setHoveredWord] = useState(null)

    const stats = [
      { 
        number: 4000, 
        label: 'App Downloads', 
        icon: <FaMobileAlt />, 
        color: 'from-blue-500 to-cyan-500', 
        delay: '0',
        popup: 'My mobile apps have reached thousands of users worldwide!',
        achievement: 'App Store Success'
      },
      { 
        number: 60, 
        label: 'Students Tutored', 
        icon: <FaGraduationCap />, 
        color: 'from-purple-500 to-pink-500', 
        delay: '200',
        popup: 'Helped students master programming and achieve their goals!',
        achievement: 'Teaching Excellence'
      },
      { 
        number: 95, 
        label: 'ML Model Accuracy', 
        icon: <FaBrain />, 
        color: 'from-green-500 to-emerald-500', 
        delay: '400',
        popup: 'Built cutting-edge ML models with industry-leading performance!',
        achievement: 'AI Innovation'
      },
    ]

    const interests = [
      { 
        icon: <FaCode />, 
        label: 'Coding', 
        color: 'blue',
        popup: 'I love solving complex problems with elegant code!',
        stats: '10+ Languages'
      },
      { 
        icon: <FaRocket />, 
        label: 'Innovation', 
        color: 'purple',
        popup: 'Always pushing boundaries with new technologies!',
        stats: '3 Startups Founded'
      },
      { 
        icon: <FaLightbulb />, 
        label: 'Problem Solving', 
        color: 'yellow',
        popup: 'Turning challenges into opportunities!',
        stats: '100+ Projects'
      },
      { 
        icon: <FaHeart />, 
        label: 'Mentoring', 
        color: 'red',
        popup: 'Passionate about helping others grow!',
        stats: '60+ Students'
      },
      { 
        icon: <FaGamepad />, 
        label: 'Gaming', 
        color: 'green',
        popup: 'Gaming teaches me strategy and quick thinking!',
        stats: 'Competitive Player'
      },
      { 
        icon: <FaMagic />, 
        label: 'Magic Tricks', 
        color: 'pink',
        popup: 'Magic is just programming for the real world!',
        stats: 'Card Trick Master'
      },
    ]

    const interactiveWords = {
        'EECS': {
            popup: 'Electrical Engineering and Computer Sciences - My major at UC Berkeley!',
            icon: <FaCode />,
            color: 'blue'
        },
        'UC Berkeley': {
            popup: 'One of the top engineering schools in the world! Go Bears! 🐻',
            icon: <FaGraduationCap />,
            color: 'yellow'
        },
        'machine learning': {
            popup: 'Building AI models that can think and learn like humans!',
            icon: <FaBrain />,
            color: 'purple'
        },
        'SATBears': {
            popup: 'My space technology startup focused on satellite imagery!',
            icon: <FaRocket />,
            color: 'green'
        },
        'NeuroEcho': {
            popup: 'Healthcare startup developing IoT devices for Alzheimer\'s patients!',
            icon: <FaHeart />,
            color: 'red'
        },
        'Eagle Scout': {
            popup: 'The highest rank in Boy Scouts - leadership and service!',
            icon: <FaTrophy />,
            color: 'orange'
        },
        'SkillsForGenerations': {
            popup: 'My nonprofit organization teaching coding to underserved communities!',
            icon: <FaLightbulb />,
            color: 'cyan'
        }
    }

    // Animate stats counting up
    useEffect(() => {
        const timers = stats.map((stat, index) => {
            const duration = 2000
            const steps = 50
            const increment = stat.number / steps
            const stepDuration = duration / steps
            
            return setInterval(() => {
                setAnimatedStats(prev => {
                    const newStats = [...prev]
                    if (newStats[index] < stat.number) {
                        newStats[index] = Math.min(newStats[index] + increment, stat.number)
                    }
                    return newStats
                })
            }, stepDuration)
        })

        return () => timers.forEach(timer => clearInterval(timer))
    }, [])

    // Function to render interactive text
    const renderInteractiveText = (text) => {
        const words = text.split(' ')
        return words.map((word, index) => {
            const cleanWord = word.replace(/[.,!?]/g, '')
            const punctuation = word.replace(/[^.,!?]/g, '')
            
            if (interactiveWords[cleanWord]) {
                return (
                    <span key={index} className="relative inline-block">
                        <span
                            className="cursor-pointer text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 underline decoration-2 underline-offset-2 decoration-blue-300 hover:decoration-blue-500"
                            onMouseEnter={() => setHoveredWord(cleanWord)}
                            onMouseLeave={() => setHoveredWord(null)}
                        >
                            {cleanWord}
                        </span>
                        {punctuation}
                        {index < words.length - 1 && ' '}
                        
                        {/* Word Popup */}
                        {hoveredWord === cleanWord && (
                            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-slate-800 to-slate-900 text-white p-3 rounded-lg shadow-2xl z-50 min-w-max animate-bounce">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className={`text-${interactiveWords[cleanWord].color}-400`}>
                                        {interactiveWords[cleanWord].icon}
                                    </span>
                                    <span className="font-bold text-sm">{cleanWord}</span>
                                </div>
                                <div className="text-xs">{interactiveWords[cleanWord].popup}</div>
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                                </div>
                            </div>
                        )}
                    </span>
                )
            }
            return <span key={index}>{word}{index < words.length - 1 && ' '}</span>
        })
    }
  
    return (
      <section id="about" className="py-6 px-4 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0">
          <div className="absolute w-80 h-80 bg-blue-400/20 rounded-full blur-3xl -top-40 -left-40 animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-purple-400/20 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse delay-1000"></div>
          <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400/60 rotate-45 animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400/60 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-1/2 right-10 w-2 h-2 bg-cyan-400/60 animate-bounce delay-1000"></div>
          
          {/* Floating stats in background */}
          <div className="absolute top-32 left-10 text-blue-400/30 text-2xl animate-float delay-300">
            <FaMobileAlt />
          </div>
          <div className="absolute top-48 right-16 text-purple-400/30 text-xl animate-float delay-700">
            <FaGraduationCap />
          </div>
          <div className="absolute bottom-32 left-16 text-green-400/30 text-2xl animate-float delay-1000">
            <FaBrain />
          </div>
          <div className="absolute bottom-48 right-10 text-cyan-400/30 text-xl animate-float delay-500">
            <FaTrophy />
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-6">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-300/30 rounded-full text-blue-700 text-sm font-medium mb-3 backdrop-blur-sm">
              <FaUser className="inline mr-2" />
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Who I Am
              </span>
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Passionate about technology, innovation, and making a real impact
            </p>
          </div>
          
          {/* Main Journey Section - Full Width */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/50 relative overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mr-4">
                  <FaCode />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">My Journey</h3>
              </div>
              
              {/* Profile Picture and Content */}
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="/407A0016.JPG" 
                    alt="Neel Gandhi" 
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-slate-700 leading-relaxed mb-4">
                    I'm a passionate {renderInteractiveText('EECS student at UC Berkeley')}, graduating in 2027. With a strong foundation in software engineering, {renderInteractiveText('machine learning')}, and full-stack development, I thrive on solving complex problems and building innovative solutions.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed mb-4">
                    My experience spans from developing ML models for satellite imagery detection to co-founding startups like {renderInteractiveText('SATBears')} and {renderInteractiveText('NeuroEcho')}. Beyond coding, I'm an {renderInteractiveText('Eagle Scout')}, valedictorian, and founder of {renderInteractiveText('SkillsForGenerations')}.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    When I'm not coding, you'll find me performing card tricks, baking cakes, or playing pickleball. I believe in using technology to make a positive impact in the world and helping others grow along the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Stats Boxes - Outside the main content */}
          <div className="absolute -right-32 top-1/2 transform -translate-y-1/2 space-y-4 z-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/30 backdrop-blur-sm p-3 rounded-lg shadow-lg text-center hover:bg-white/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/30 cursor-pointer relative overflow-hidden w-20"
                onClick={() => setShowPopup(showPopup === index ? null : index)}
                style={{
                  transform: `translateY(${index * 20}px) rotate(${index * 5}deg)`,
                  animationDelay: `${index * 0.3}s`
                }}
              >
                <div className="text-sm mb-1 text-blue-500/80">
                  {stat.icon}
                </div>
                <div className="text-xs font-bold text-slate-700/80">
                  {Math.floor(animatedStats[index])}{stat.label === 'ML Model Accuracy' ? '%' : '+'}
                </div>
                <div className="text-xs text-slate-600/70 font-medium">{stat.label}</div>
                
                {/* Compact Popup */}
                {showPopup === index && (
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white p-2 rounded-lg shadow-2xl z-50 min-w-max animate-bounce">
                    <div className="flex items-center gap-1 mb-1">
                      <FaAward className="text-yellow-400 text-xs" />
                      <span className="font-bold text-xs">{stat.achievement}</span>
                    </div>
                    <div className="text-xs mb-1">{stat.popup}</div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <div className="w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-slate-800"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
      </div>
    </section>
    )
  }
  
  export default About
  