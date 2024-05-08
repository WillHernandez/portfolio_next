import React from 'react';
import Container from 'react-bootstrap/Container';
// import "bootstrap/dist/css/bootstrap.min.css";
import { skills } from '../data';

const Skills = () => (
  <Container className='outerContainer'>
    <div className='innerContainer'>
      <div className="skillsContainer">
        <h3>Skills</h3>
        <ul>
  				{skills.map(skill => (
    				<li key={skill}>{skill}</li>
  				))}
        </ul>
      </div>
    </div>
  </Container>
)

export default Skills; 
