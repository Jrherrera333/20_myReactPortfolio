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

            <h2>WORK EXPERIENCE</h2>
            <ul>
                <li>
                    THE JACKSON LABORATORY | 2016-2023
                    GROUNDS TECHNICIAN
                    Perform proper execution of service tickets.
                    Provide timely collection and disposal of campus waste and recycling materials.
                    Provide shuttle services in a timely and friendly fashion. Perform chemical inspection in the Satellite Accumulation Area.
                    Train new employees
                </li>
                <li>
                    FORKLIFT OPERATOR
                    Maintained JMS and RAF wash areas with a constant supply of materials.
                    Communicated with warehouse and mouse rooms technicians regarding operations updates.
                </li>
                <li>
                    OPERATIONS TECHNICIAN
                    Performed materials and equipment quality control | Operated and provided maintenance for washer, decap- ping and sanitizing machines | Organized materials and equipment in a fast pace environment | Communicated with CSA on proper production and quality of materials.
                </li>

            </ul>

            <h2>Education</h2>
            <ul>
                <li>Full Stack Web Developer Certificate At UPenn LPn Bootcamp.</li>
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