import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Neel<span className="text-accent">Gandhi</span>
            </h3>
            <p className="text-slate-300">
              EECS Student at UC Berkeley passionate about software engineering, machine learning, and building innovative solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-300 hover:text-accent transition-colors">About</a></li>
              <li><a href="#skills" className="text-slate-300 hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#experience" className="text-slate-300 hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-slate-300 hover:text-accent transition-colors">Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/NeelGandhi-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-accent transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/neel-gandhi0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-accent transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:neelgandhi5416@berkeley.edu"
                className="text-slate-300 hover:text-accent transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Neel Gandhi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer