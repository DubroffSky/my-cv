import React, { useState } from 'react';
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
    period: 'Jul 2024 – Present',
    location: 'Istanbul, Turkey · Remote',
    description: "Teamwork in the development of a scalable B2B platform for athletic device management, significantly enhancing operational efficiency for partner organizations. Designed and implemented robust backend solutions using Django and PostgreSQL, including dynamic interfaces and data dashboards. Integrated OpenAI's API to automate advanced report generation, enabling coaches and analysts to extract insights with zero manual effort. Played a role in setting up system architecture and ensuring data security standards across the platform.",
    skills: ['Django', 'OpenAI API', 'PostgreSQL', 'React', 'HTML5', 'CSS'],
  },
  {
    company: 'MeraFitness',
    title: 'Android Developer',
    type: 'Project work',
    period: 'Jul 2024 – Sep 2024',
    location: 'Istanbul, Turkey · Remote',
    description: "Participated in the development of a native Android application that enabled real-time communication with athletic devices via Bluetooth Low Energy (BLE). Delivered QR scanner functionality for device pairing drastically improving onboarding speed, work with graphs and live data. Ensured smooth integration between hardware and software layers while adhering to performance and UX standards.",
    skills: ['Kotlin', 'Bluetooth Low Energy', 'QR Scanner', 'React Native'],
  },
  {
    company: 'Heftos',
    title: 'Software Developer',
    type: 'Part-time',
    period: 'Jun 2024 – Present',
    location: 'Toronto, Ontario, Canada · Remote',
    description: "Collaborated with small business clients to build lightweight, purpose-driven tools that automated key processes. Engineered full-stack solutions in Python and TypeScript with seamless database integration. Delivered stable and maintainable systems that enabled non-technical users to manage complex workflows independently. Creation of software for analyzing sites and automatic selection of information.",
    skills: ['Python', 'TypeScript', 'SQLite', 'Node.js'],
  },
];

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

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

            <div className={`description ${expanded === idx ? 'expanded' : 'collapsed'}`}>
              {proj.description}
            </div>

            <button className="expand-btn" onClick={() => toggleExpand(idx)}>
              {expanded === idx ? 'Show less' : 'Show more'}
            </button>

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