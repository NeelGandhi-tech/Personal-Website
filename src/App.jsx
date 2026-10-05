import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiArrowDown, FiGithub, FiLinkedin, FiSearch, FiMenu, FiX, FiArrowRight } from 'react-icons/fi'
import { projects, categories } from './data/projects'
import Experience from './components/Experience'

const github = 'https://github.com/NeelGandhi-tech'
const email = 'mailto:neelgandhi5416@berkeley.edu'

function ProjectArt({ kind }) {
  return <div className={`project-art art-${kind}`} aria-hidden="true">
    <span className="art-label">{kind === 'football' ? 'MODEL → INSIGHT' : kind === 'catan' ? 'STRATEGY → SIGNAL' : 'PEOPLE → CONNECTIONS'}</span>
    {kind === 'football' ? <div className="chart-art"><div className="chart-heading"><span>PLAYER PROJECTIONS</span><span>↗</span></div><div className="chart-bars">{[35, 55, 44, 68, 59, 79, 73, 94, 84].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div><div className="chart-axis"><span>HISTORICAL DATA</span><span>PREDICTION</span></div></div>
      : kind === 'catan' ? <div className="hex-board">{[5, 9, 6, 8, 4, 10, 3].map((number, i) => <div className={`hex hex-${i}`} key={i}><span>{number}<small>{number === 6 || number === 8 ? '•••••' : '•••'}</small></span></div>)}</div>
      : <svg className="graph-art" viewBox="0 0 300 170"><g stroke="#a4b49a" strokeWidth="2"><path d="M150 25 85 80 35 140 M85 80 130 140 M150 25 220 80 180 140 M220 80 270 140 M85 80 220 80" fill="none" /></g><path d="M35 140 85 80 150 25 220 80 270 140" fill="none" stroke="#466342" strokeWidth="4" /><g fill="#f9f9f4" stroke="#84977a" strokeWidth="2">{[[150,25],[85,80],[220,80],[35,140],[130,140],[180,140],[270,140]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r={i === 0 ? 16 : 12} />)}</g><g fill="#466342">{[[150,25],[85,80],[220,80],[35,140],[270,140]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="6" />)}</g></svg>}
    <span className="art-caption">{kind === 'football' ? 'Explainable by design.' : kind === 'catan' ? 'Find your opening.' : 'Every connection tells a story.'}</span>
  </div>
}

function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('enter-view')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.section-heading, .featured-card, .about').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState('All projects')
  const [query, setQuery] = useState('')
  const filtered = projects.filter(p => (category === 'All projects' || p.category === category) && `${p.title} ${p.description} ${p.tech.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase()))
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="container header-inner">
      <a className="wordmark" href="#home" aria-label="Neel Gandhi home">neel<span>.</span></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</button>
      <nav id="navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        <a href="#projects" onClick={() => setMenuOpen(false)}>Work</a><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href={github} target="_blank" rel="noreferrer">GitHub <FiArrowUpRight /></a><a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <FiArrowUpRight /></a>
      </nav>
    </div></header>
    <main id="main">
      <section className="hero container" id="home">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> EECS @ UC BERKELEY</div>
          <h1>Curiosity.<br />Code.<br /><span>Real-world impact.</span></h1>
          <p className="hero-intro">I’m Neel Gandhi. I build useful things, look for patterns in the game, and bring a little competitive curiosity to both.</p>
          <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <FiArrowDown /></a><a className="text-link" href="#about">A little about me <FiArrowUpRight /></a></div>
        </div>
        <div className="hero-portrait"><div className="portrait-frame"><img src="/407A0016.JPG" alt="Neel Gandhi" fetchPriority="high" /><div className="portrait-label"><span>NEEL GANDHI</span><span>BERKELEY, CA ↗</span></div></div><div className="portrait-note"><span className="note-star">✳</span><span>Builder by nature.<br />Game for anything.</span></div><span className="portrait-index">BERKELEY / CODE / A LITTLE FRIENDLY COMPETITION</span></div>
      </section>
      <div className="focus-strip"><div className="container"><span>IDEAS INTO THINGS THAT WORK</span><p>Machine learning <i>✳</i> Full-stack development <i>✳</i> Human-centered products</p></div></div>
      <section className="section container" id="projects">
        <div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>A few things I’ve built<span>.</span></h2></div><p>From finding an edge in fantasy football<br className="desktop-break" /> to making the next move a little smarter.</p></div>
        <div className="featured-grid">{projects.filter(p => p.featured).map((project, index) => <article className="featured-card" key={project.repo}><a className="art-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ProjectArt kind={project.visual} /><span className="art-arrow"><FiArrowUpRight /></span></a><div className="project-meta"><span>{project.type}</span><span>0{index + 1}</span></div><h3><a href={project.url} target="_blank" rel="noreferrer">{project.title}</a></h3><p>{project.description}</p><div className="tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div><a className="project-code" href={project.url} target="_blank" rel="noreferrer">Explore the code <FiArrowUpRight /></a></article>)}</div>
      </section>
      <section className="project-library section" id="all-projects"><div className="container">
        <div className="section-heading"><div><span className="eyebrow">02 / THE PROJECT INDEX</span><h2>More curiosity. More code<span>.</span></h2></div><p>{projects.length} projects across AI, web products,<br className="desktop-break" /> and a few experiments just for fun.</p></div>
        <div className="library-controls"><div className="filters" aria-label="Filter projects">{categories.map(c => <button type="button" key={c} aria-pressed={category === c} className={category === c ? 'active' : ''} onClick={() => setCategory(c)}>{c}</button>)}</div><label className="search"><FiSearch aria-hidden="true" /><span className="sr-only">Search projects</span><input type="search" placeholder="Find a project or technology" value={query} onChange={e => setQuery(e.target.value)} /></label></div>
        <p className="result-count" aria-live="polite">Showing {filtered.length} of {projects.length} projects</p>
        <div className="index-grid">{filtered.map(p => <a className="index-card" key={p.repo} href={p.url} target="_blank" rel="noreferrer"><div className="index-card-top"><span>{p.type}</span><FiArrowUpRight /></div><h3>{p.title}</h3><p>{p.description}</p><div className="index-tech">{p.tech.join(' / ')}</div></a>)}</div>
        {filtered.length === 0 && <div className="empty-state"><h3>No projects found.</h3><p>Try a different keyword or explore the full collection.</p><button className="button button-dark" onClick={() => { setQuery(''); setCategory('All projects') }}>Reset filters <FiArrowRight /></button></div>}
        <a className="github-link" href={github} target="_blank" rel="noreferrer"><FiGithub /> There’s more on GitHub <FiArrowUpRight /></a>
      </div></section>
      <Experience />
      <section className="about section container" id="about"><div><span className="eyebrow">04 / THE PERSON BEHIND THE CODE</span><h2>Good questions.<br />Useful things.<br /><em>That’s the idea.</em></h2></div><div className="about-copy"><p className="about-lead">I’m an EECS student at UC Berkeley who likes turning “what if?” into something you can actually use.</p><p>My projects follow my curiosity: sports analytics, strategy games, healthcare tools, education, and the communities around me. I enjoy working across the stack, from the model behind a prediction to the interface that makes it understandable.</p><p>I’m especially interested in machine learning and human-centered software, including exploring cognitive-assistance ideas through NeuroEcho.</p><div className="toolbox"><span className="eyebrow">MY TOOLBOX</span><div className="tags">{['Python', 'JavaScript', 'React', 'Flask', 'SQL', 'scikit-learn', 'PyTorch', 'Git'].map(t => <span key={t}>{t}</span>)}</div></div><a className="text-link" href="https://linkedin.com/in/neel-gandhi0" target="_blank" rel="noreferrer">More about my experience <FiArrowUpRight /></a></div></section>
      <section className="contact" id="contact"><div className="container"><span className="eyebrow">HAVE AN IDEA? A GOOD QUESTION?</span><div className="contact-main"><h2>Let’s build<br /><em>something good.</em></h2><a className="contact-arrow" href={email} aria-label="Email Neel Gandhi"><FiArrowUpRight /></a></div><div className="contact-bottom"><a href={email}>neelgandhi5416@berkeley.edu <FiArrowUpRight /></a><p>For collaborations, opportunities, or just a hello.</p></div></div></section>
    </main>
    <footer className="container footer"><a className="wordmark" href="#home">neel<span>.</span></a><p>© {new Date().getFullYear()} Neel Gandhi · Built with curiosity.</p><div><a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a><a href="https://linkedin.com/in/neel-gandhi0" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a><a href="#home" className="back-top">Back to top ↑</a></div></footer>
  </>
}

export default App
