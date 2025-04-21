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
            <h3>AI-integrated Reporting</h3>
            <ul>
              <li>Automatic generation of text-based reports from structured data.</li>
              <li>OpenAI and other GPT integration.</li>
              <li>Export to PDF, JSON, Excel.</li>
            </ul>
          </div>
          <div className="info-section">
            <h3>Automation & Background Tasks</h3>
            <ul>
              <li>Advanced Django Admin customizations.</li>
              <li>Role-based dashboards for internal teams.</li>
              <li>Visual progress tracking and inline charts.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;