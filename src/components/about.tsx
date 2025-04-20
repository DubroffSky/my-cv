import React from 'react';
import '../styles/about.css';

const Intro: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h1>My name</h1>
        <h2>Info about me</h2>
        <p>Something else</p>
      </div>
    </section>
  );
};

export default Intro;