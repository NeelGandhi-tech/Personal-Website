import { useState } from 'react'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'

const experiences = [
  {
    id: 'roblox', year: '2026', company: 'Roblox', role: 'Software Engineering Intern',
    dates: 'June – August 2026', location: 'San Mateo, CA',
    summary: 'Understanding runtime systems. Making testing smarter.',
    points: [
      'Reverse-engineered Roblox engine internals and built a runtime hook that traverses the Fiber tree during gameplay, capturing metadata, hierarchy, state, and relationships for 5,000+ elements.',
      'Built a selective testing workflow that maps PR code changes to impacted tests, reducing test execution time and compute usage by approximately 25% across 1,000+ PRs per month.',
    ],
    tags: ['Runtime systems', 'Test automation', 'Developer tools'],
  },
  {
    id: 'gts', year: '2025', company: 'Global Technical Systems', role: 'Software Engineering Intern',
    dates: 'June – August 2025', location: 'Virginia Beach, VA',
    summary: 'Machine learning and software for systems beyond the ground.',
    points: [
      'Designed a YOLOv5 machine learning model to detect aircraft in satellite imagery with 95% accuracy.',
      'Created a secure, bootable Ubuntu 22.04 ISO compliant with DISA STIG standards using USG and OpenSCAP automation.',
      'Supported a satellite launched into Low Earth Orbit through mission planning, embedded software, transformer algorithms, processing configuration, and six technical papers.',
    ],
    tags: ['YOLOv5', 'Embedded software', 'Ubuntu', 'OpenSCAP'],
  },
  {
    id: 'ithena', year: '2023', company: 'ITHENA', role: 'Software Engineering Intern',
    dates: 'June – August 2023', location: 'Richmond, VA',
    summary: 'From client data to full-stack applications and AI-assisted tests.',
    points: [
      'Developed five k-nearest neighbors models to analyze client data, improving solution accuracy by 25%.',
      'Built a React, MySQL, and Flask application, incorporating stakeholder feedback into the product.',
      'Created an AI-assisted Cypress test generator that produced 200 end-to-end tests covering functionality, reliability, performance, and edge cases.',
    ],
    tags: ['React', 'Flask', 'MySQL', 'Cypress', 'Machine learning'],
  },
  {
    id: 'cingo', year: '2022', company: 'CINGO', role: 'Co-Founder & CTO',
    dates: 'June 2022 – August 2024', location: 'Richmond, VA',
    summary: 'Building a product, growing a community, and learning by doing.',
    points: [
      'Developed a Swift-based app connecting families and friends for asset security, reaching 4,000+ downloads.',
      'Drove 200% user growth in six months through six community events; published the app on the App Store and Google Play.',
    ],
    tags: ['Swift', 'Mobile development', 'Product leadership'],
  },
]

export default function Experience() {
  const [selected, setSelected] = useState('roblox')
  const [hovered, setHovered] = useState(null)

  return (
    <section className="experience section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">03 / EXPERIENCE</span>
            <h2 id="experience-title">Learning by building<span>.</span></h2>
          </div>
          <p className="timeline-instructions"><span className="hover-instruction">Hover over a role or select it</span><span className="tap-instruction">Tap a role</span> to explore<br className="desktop-break" /> the work, the tools, and the impact.</p>
        </div>
        <ol className="timeline">
          {experiences.map(experience => {
            const active = hovered === experience.id || selected === experience.id
            return (
              <li className={`timeline-item${active ? ' is-active' : ''}`} key={experience.id}
                onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(experience.id) }}
                onPointerLeave={() => setHovered(null)}>
                <span className="timeline-year" aria-hidden="true">{experience.year}</span>
                <div className="timeline-card">
                  <h3>
                    <button className="timeline-trigger" type="button" id={`role-${experience.id}`}
                      aria-expanded={active} aria-controls={`details-${experience.id}`}
                      onClick={() => { setHovered(null); setSelected(selected === experience.id ? null : experience.id) }}
                      onFocus={() => setHovered(null)}>
                      <span className="timeline-title"><span className="timeline-company">{experience.company}</span><span className="timeline-role">{experience.role}</span></span>
                      <span className="timeline-date">{experience.dates}</span>
                      <span className="timeline-icon" aria-hidden="true">{active ? <FiArrowDownRight /> : <FiArrowUpRight />}</span>
                    </button>
                  </h3>
                  <div className="timeline-details" id={`details-${experience.id}`} role="region" aria-labelledby={`role-${experience.id}`} hidden={!active}>
                    <div className="timeline-detail-inner">
                      <p className="timeline-location">{experience.location}</p>
                      <p className="timeline-summary">{experience.summary}</p>
                      <ul>{experience.points.map(point => <li key={point}>{point}</li>)}</ul>
                      <div className="tags">{experience.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
        <div className="education-note"><span className="eyebrow">THE FOUNDATION</span><p>University of California, Berkeley <span>BS in Electrical Engineering & Computer Sciences · Class of 2028</span></p></div>
      </div>
    </section>
  )
}
