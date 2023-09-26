import React from 'react';

const Project = ({ title, description, image, projectUrl, githubUrl }) => {
    return (
        <div className="project">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                <img src={`/images/${image}`} alt={title} />
            </a>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub Repo
                </a>
            </div>
        </div>
    );
};

export default Project;