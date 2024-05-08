import React from 'react'
import Container from 'react-bootstrap/Container';

const AboutMe = () => (
  <Container className='outerContainer'>
    <div className="innerContainer aboutmeContainer">
      <p className='aboutText' style={{marginBottom: '20px'}}>
        Results-oriented independent learner with 4 years of web development experience, proficient in the MERN stack. Proven ability to contribute to open-source projects including Google Chromium’s dev-tools & demonstrating strong problem-solving and coding skills. Passionate about creating innovative solutions through logical thinking and technical expertise. Eager to leverage my skills in a software developer position at a company that fosters a collaborative and growth-oriented environment. Open to relocation.
      </p>
     <p className='aboutText'>
        Becoming a proficient software engineer isnt memorizing the syntax of a programming language but rather the ability so solve problems with it.
     </p>
    </div>
  </Container>
)

export default AboutMe;