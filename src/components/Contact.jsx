import { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

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
    },
    {
      icon: <FaPhone />,
      label: '804-426-0222',
      href: 'tel:804-426-0222',
    },
    {
      icon: <FaLinkedin />,
      label: 'linkedin.com/in/neel-gandhi0',
      href: 'https://linkedin.com/in/neel-gandhi0',
    },
    {
      icon: <FaGithub />,
      label: 'github.com/NeelGandhi-tech',
      href: 'https://github.com/NeelGandhi-tech',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-dark via-darkBlue to-darkBlue text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get In Touch
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </h2>
        
        <p className="text-xl text-slate-300 mb-8">
          I'm always open to discussing new opportunities, collaborations, or just chatting about tech. Feel free to reach out!
        </p>
        
        <a
          href="mailto:neelgandhi5416@berkeley.edu"
          className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-primary transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 mb-12 relative overflow-hidden group"
        >
          <span className="relative z-10">Email Me</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </a>
        
        <div className="space-y-4">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 text-lg group cursor-pointer transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              onMouseEnter={() => setHoveredContact(index)}
              onMouseLeave={() => setHoveredContact(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <span className="text-accent text-2xl">{info.icon}</span>
              <a
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-accent hover:text-lightBlue transition-colors duration-300"
              >
                {info.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
