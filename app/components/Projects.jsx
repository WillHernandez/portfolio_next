import React from 'react';
import Container from 'react-bootstrap/Container';
// import "bootstrap/dist/css/bootstrap.min.css";
import { projectLinks } from '../data';

const Projects = () => (
  <Container className='outerContainer'>
    <div className="innerContainer projectsContainer">
      <h3>Projects</h3>
      <div className="projects">
      	<ul>
					<i>
						<p>Websites may take time to load as they are hosted/deployed on free services.</p>
					</i>
        	<RenderProjects />
      	</ul>
      </div>
    </div>
  </Container>
)

const RenderProjects = () => ( 
  projectLinks.map(project => (
    <li key={project.key}>
      <a href={project.live} target='_blank' rel='noreferrer'>
				<>
					{project.website}
					&nbsp;
				</>
			</a>  
					| 
      {project.frontGit && 
				<>
				&nbsp;
        <a href={project.frontGit}target='_blank' rel='noreferrer'> 
					{project.backGit ? "Client-Side Code" : "Code"}
				</a>
				&nbsp;
				</>
      }
       | 
      {project.backGit &&
				<>
        	<a href={project.backGit} target='_blank' rel='noreferrer'> Server-Side Code </a>
					| 
				</>
      }
			<>
				&nbsp;
				{project.tech}
			</>
    </li>
  ))
)

export default Projects;