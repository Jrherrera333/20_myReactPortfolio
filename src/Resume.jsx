import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume">
            <img
            src="/images/museum.jpeg"
            alt="Jose"
            className="profile-image"
            />

            <h1>Jose R. Herrera</h1>
            <p>Web Developer</p>

            <h2>Experience</h2>
            <ul>
                <li>Front-end Developer at ABC Company</li>
                <li>Back-end Developer at XYZ Inc.</li>

            </ul>

            <h2>Education</h2>
            <ul>
                <li>Bachelor's Degree in Computer Science</li>
                <li>BootCamp Degree MERN Stack Developer</li>

            </ul>

            <a  
            href="/resume/JoseR.Herrera-resume.pdf"
            download="jose-herrera.pdf">
                Download Resume
            </a>
            
        </div>
    );
};

export default Resume;