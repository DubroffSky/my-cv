import React from 'react';
import '../styles/about.css';

const Intro: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="info-block">
        <h2>Professional activity</h2>
        <div className="info-container no-scroll">
          <div className="info-section">
            <h3>Web-scraping</h3>
            <h4>+ data reporting</h4>
            <ul>
              <li>Data extraction from websites and databases for business.</li>
              <li>Report to PDF, CSV, Excel.</li>
            </ul>
          </div>
          <div className="info-section">
            <h3>Dashboards and B2B services.</h3>
            <ul>
              <li>Django Admin + Custom.</li>
              <li>PostgreSQL + SQLite</li>
              <li></li>
            </ul>
          </div>
          <div className="info-section">
            <h3>Education</h3>
            <ul>
              <li>Bachelor's in Computer Science</li>
              <li>Online Courses in Web Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;