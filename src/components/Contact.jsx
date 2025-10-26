import { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaRocket } from 'react-icons/fa'

const Contact = () => {
  const [hoveredContact, setHoveredContact] = useState(null)
  const [animatedContact, setAnimatedContact] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedContact(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'neelgandhi5416@berkeley.edu',
      href: 'mailto:neelgandhi5416@berkeley.edu',
      description: 'Send me an email',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaPhone />,
      label: '804-426-0222',
      href: 'tel:804-426-0222',
      description: 'Call or text me',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaLinkedin />,
      label: 'linkedin.com/in/neel-gandhi0',
      href: 'https://linkedin.com/in/neel-gandhi0',
      description: 'Connect professionally',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <FaGithub />,
      label: 'github.com/NeelGandhi-tech',
      href: 'https://github.com/NeelGandhi-tech',
      description: 'View my code',
      color: 'from-gray-600 to-gray-700'
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
            <FaEnvelope className="inline mr-2" />
            Let's Connect
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Get In Touch
          </h2>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just chatting about technology and innovation.
          </p>
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-slate-700">
              Contact Information
            </h3>
            
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredContact(index)}
                onMouseLeave={() => setHoveredContact(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-4 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 group-hover:scale-[1.02]`}
                  style={{
                    transform: `perspective(1000px) rotateY(${hoveredContact === index ? '2deg' : '0deg'})`
                  }}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-slate-800 font-semibold text-lg">{info.label}</div>
                    <div className="text-slate-500 text-sm">{info.description}</div>
                  </div>
                  <div className="text-slate-400 group-hover:text-blue-500 transition-colors duration-300">
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Right Side - Professional CTA */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 relative overflow-hidden">
              {/* Subtle 3D Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-50/50 rounded-2xl"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                
                <h4 className="text-2xl font-bold text-slate-800 mb-4">Ready to Collaborate?</h4>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Whether you have a project in mind, want to discuss opportunities, or just want to connect with a fellow tech enthusiast, I'd love to hear from you.
                </p>
                
                <a
                  href="mailto:neelgandhi5416@berkeley.edu"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  <FaEnvelope />
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200">
            <div className="text-blue-500 mb-2 text-2xl">
              <FaEnvelope />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-1">24h</div>
            <div className="text-slate-500 text-sm">Response Time</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200">
            <div className="text-green-500 mb-2 text-2xl">
              <FaMapMarkerAlt />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-1">Remote</div>
            <div className="text-slate-500 text-sm">Available</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200">
            <div className="text-purple-500 mb-2 text-2xl">
              <FaCode />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-1">Fast</div>
            <div className="text-slate-500 text-sm">Turnaround</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200">
            <div className="text-orange-500 mb-2 text-2xl">
              <FaRocket />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-1">Quality</div>
            <div className="text-slate-500 text-sm">Focused</div>
          </div>
        </div>

        {/* Bottom Professional Note */}
        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 bg-slate-100 border border-slate-200 rounded-full text-slate-600 text-sm font-medium">
            <FaCalendarAlt className="inline mr-2" />
            Available for freelance projects and full-time opportunities
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
