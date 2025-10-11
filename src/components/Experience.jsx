const Experience = () => {
    const experiences = [
      {
        title: 'Co-Founder',
        company: 'SATBears',
        date: 'June 2025 – Present',
        points: [
          'Built a React + Tailwind web platform unifying SAT prep booking, payments, and practice resources',
          'Instructed 60+ students with tailored lessons, driving average SAT score gains of 130 points',
        ],
      },
      {
        title: 'Software Engineering Intern',
        company: 'Global Technical Systems',
        date: 'June 2025 – August 2025',
        points: [
          'Designed a machine learning model using YOLOv5 to detect aircraft in satellite imagery with 95% accuracy',
          'Created secure Ubuntu 22.04 ISO image compliant with DISA STIG standards',
          'Contributed to satellite development launched into Low Earth Orbit (LEO)',
        ],
      },
      {
        title: 'Software Engineering Intern',
        company: 'ITHENA',
        date: 'June 2023 – August 2023',
        points: [
          'Wrote 78 end-to-end automated tests using Cypress for web applications',
          'Built full-stack web app using React, MySQL, and Flask with secure authentication',
          'Developed 5 k-Nearest Neighbor ML models improving solution accuracy by 25%',
        ],
      },
      {
        title: 'Co-Founder, CTO',
        company: 'CINGO',
        date: 'June 2022 – August 2024',
        points: [
          'Developed Swift-based app with 4,000+ downloads connecting families for asset security',
          'Drove 200% user growth in 6 months via community events',
          'Published app on App Store and Google Play',
        ],
      },
    ]
  
    return (
      <section id="experience" className="py-20 px-4 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-dark">
            Experience
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 md:w-11/12">
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {exp.title}
                  </h3>
                  <div className="text-gray-700 font-semibold mb-1">{exp.company}</div>
                  <div className="text-accent text-sm mb-4">{exp.date}</div>
                  <ul className="space-y-2">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2 mt-1">▹</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Experience
  