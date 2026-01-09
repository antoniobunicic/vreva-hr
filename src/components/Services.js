import React from 'react';

function Services() {
  const services = [
    {
      title: 'Backend Development',
      description: 'Scalable microservices and APIs built with Java, Kotlin, and Python',
      capabilities: [
        'Spring Boot & Quarkus microservices',
        'Event-driven architectures with Kafka & Pulsar',
        'REST APIs & authentication systems',
        'Database design & optimization'
      ]
    },
    {
      title: 'Frontend Development',
      description: 'Modern, responsive interfaces that users love',
      capabilities: [
        'React applications with TypeScript',
        'Component libraries & design systems',
        'Performance optimization',
        'Responsive & accessible UIs'
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Production-ready deployment and scaling',
      capabilities: [
        'AWS cloud architecture',
        'Docker & Kubernetes orchestration',
        'CI/CD pipelines',
        'Infrastructure as code'
      ]
    },
    {
      title: 'System Modernization',
      description: 'Transform legacy systems into modern architectures',
      capabilities: [
        'Monolith to microservices migration',
        'Database migrations & optimization',
        'Architecture redesign',
        'Technical debt reduction'
      ]
    },
    {
      title: 'Technical Leadership',
      description: 'Strategic guidance and team collaboration',
      capabilities: [
        'Architecture planning & reviews',
        'Code quality & standards',
        'Team mentorship',
        'Agile development practices'
      ]
    },
    {
      title: 'Full-Stack Solutions',
      description: 'End-to-end development from database to UI',
      capabilities: [
        'Complete feature implementation',
        'API design & integration',
        'Testing & quality assurance',
        'Production support'
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-capabilities">
                {service.capabilities.map((capability, capIndex) => (
                  <li key={capIndex}>{capability}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
