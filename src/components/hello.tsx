import React from 'react';
import '../styles/hello.css';
import myPhoto from '../assets/my-photo.jpg';

function Hello() {
  return (
    <section id="hello" className="hello-container">
      <div className="photo-container">
        <img src={myPhoto} alt="grigorii" className="profile-photo" />
      </div>
      <div className="info-container">
        <div className="info-section">
          <h3>Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="info-section">
          <h3>Experience</h3>
          <ul>
            <li>Software Developer at Company A</li>
            <li>Junior Developer at Company B</li>
            <li>Internship at Company C</li>
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
    </section>
  );
}

export default Hello;
