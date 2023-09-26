import React from 'react';
import Project from './Project';
import './Portfolio.css';

const projects = [
  {
    title: 'Note Taker',
    description: 'An application tha allow you to create, edit and delete notes.',
    image: 'project1.png',
    projectUrl: '',
    githubUrl: ''
  },
  {
    title: 'Pokemon API',
    description: 'In This application you can see the weather according to the latitude and longitude/',
    image: 'project2.png',
    projectUrl: '',
    githubUrl: ''
  },
  {
    title: 'First Quiz',
    description: 'In This application you can see the weather according to the latitude and longitude.',
    image: 'project3.png',
    projectUrl: 'https://jrherrera333.github.io/first-quiz/',
    githubUrl: 'https://github.com/Jrherrera333/first-quiz'
  },
  {
    title: 'Work Day Schedule',
    description: 'In this application you can type your daily tasks and errands.',
    image: 'project4.png',
    projectUrl: 'https://jrherrera333.github.io/workDayTimetable/',
    githubUrl: 'https://github.com/Jrherrera333/workDayTimetable'
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Portfolio;
