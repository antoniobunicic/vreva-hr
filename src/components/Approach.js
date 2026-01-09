import React from 'react';

function Approach() {
  const principles = [
    {
      title: 'Collaborative',
      description: 'We work alongside your team, not in isolation. Regular communication and alignment ensure we\'re always building what matters.'
    },
    {
      title: 'Detail-Oriented',
      description: 'Quality is in the details. From code reviews to documentation, we maintain high standards across every aspect of development.'
    },
    {
      title: 'Pragmatic',
      description: 'We choose technologies and patterns that solve real problems. No over-engineering, no hype-driven development.'
    },
    {
      title: 'Maintainable',
      description: 'Code that\'s easy to understand, test, and extend. We build for the long term, not just the next sprint.'
    }
  ];

  const process = [
    {
      phase: 'Discovery',
      description: 'Understand your goals, constraints, and technical landscape'
    },
    {
      phase: 'Planning',
      description: 'Define architecture, milestones, and success criteria'
    },
    {
      phase: 'Development',
      description: 'Iterative implementation with regular reviews and demos'
    },
    {
      phase: 'Delivery',
      description: 'Production deployment, documentation, and knowledge transfer'
    }
  ];

  return (
    <section id="approach" className="approach">
      <div className="container">
        <h2 className="section-title">Our Approach</h2>

        <div className="approach-intro">
          <p>
            Built on nearly a decade of experience across international teams and diverse projects.
            We've worked with energy tech in Amsterdam, industrial systems in Zagreb, and startups in incubators.
            This breadth gives us perspective on what works.
          </p>
        </div>

        <h3 className="subsection-title">Principles</h3>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <div key={index} className="principle-card">
              <h4 className="principle-title">{principle.title}</h4>
              <p className="principle-description">{principle.description}</p>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Process</h3>
        <div className="process-timeline">
          {process.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-number">{index + 1}</div>
              <div className="process-content">
                <h4 className="process-phase">{step.phase}</h4>
                <p className="process-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
