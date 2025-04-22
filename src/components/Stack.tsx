import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaReact, FaPython, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiDjango, SiPostgresql } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io5";
import '../styles/stack.css';


type Tech = {
  name: string;
  icon: IconType;
  color: string;
};

const techs: Tech[] = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'Node.js', icon: FaNodeJs, color: '#83CD29' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'JavaScript', icon: IoLogoJavascript, color: '#e7eb1d'}
  ];
  
  const Stack: React.FC = () => {
    return (
      <section id="stack" className="stack-section">
        <h2>Tech Stack</h2>
        <div className="stack-grid">
          {techs.map((tech, index) => {
            const Icon = tech.icon as React.ComponentType<{ color: string; size: number }>;
            return (
              <motion.div
                className="stack-card"
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="icon">
                  {/* This line should now be valid */}
                  <Icon color={tech.color} size={40} />
                </div>
                <div className="name">{tech.name}</div>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  };

  export default Stack;