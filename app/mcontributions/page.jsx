import React from 'react';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import { moreContribData } from '../data';

const MoreContributions = () => (
  <>
    <Header />
    <Container className='moreContributions outerContainer'>
    <div className=' innerContainer'>
      <div className="returnHome">
				<a href="/">RETURN HOME</a>
      </div>
      <RenderContribs />
    </div>
  </Container>
  </>
)

const RenderContribs = () => (
  moreContribData.map(contrib => (
    <ul key={contrib.key}>
      <li>
        <div className="desc">
          <p className='moreContDesc'>{contrib.desc}</p>
        </div>
        <div className="link">
          <a href={contrib.link} target='_blank' rel='noreferrer'>Bug Report</a> | 
          <a href={contrib.href} target='_blank' rel='noreferrer'>Merged Code</a>
        </div>
      </li>
    </ul>
  ))
)

export default MoreContributions;