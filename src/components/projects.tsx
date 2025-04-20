import React from 'react';
import '../styles/projects.css';

type Project = {
  company: string;
  title: string;
  type: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
};

const projects: Project[] = [
  {
    company: 'MeraFitness',
    title: 'Software Developer',
    type: 'Full-time',
    period: 'Jul 2024 – Present · 10 mos',
    location: 'Istambul, Turkie · Remote',
    description:
      'Working with databases, creating interfaces in Django, using OpenAI API, building a B2B platform for athletic device management and complex data processing.',
    skills: ['Django', 'OpenAI API', 'PostgreSQL', 'React', 'HTML5', 'CSS'],
  },
  {
    company: 'MeraFitness',
    title: 'Android Developer',
    type: 'Project work',
    period: 'Jul 2024 – Sep 2024',
    location: 'Istambul, Turkie · Remote',
    description:
      'Developed a native Android app using Kotlin. Integrated Bluetooth Low Energy and a QR scanner. Worked with Android development tools.',
    skills: ['Kotlin', 'Bluetooth Low Energy', 'QR Scanner', 'React Native'],
  },
  {
    company: 'Heftos',
    title: 'Software Developer',
    type: 'Part-time',
    period: 'Jun 2024 – Present',
    location: 'Toronto, Ontario, Canada · Remote',
    description:
      'Assisting in creating software solutions for personal businesses. Building programs in Python and TypeScript. Creating and managing databases.',
    skills: ['Python', 'TypeScript', 'SQLite', 'Node.js'],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2>Previous projects</h2>
      <div className="project-list">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h3>{proj.title}</h3>
            <p className="company">{proj.company} — {proj.type}</p>
            <p className="period">{proj.period}</p>
            <p className="location">{proj.location}</p>
            <p className="description">{proj.description}</p>
            <ul className="skills">
              {proj.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;