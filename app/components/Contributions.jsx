import React from 'react'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
// import "bootstrap/dist/css/bootstrap.min.css";
import { contribData, chromeProfile, chromeImg } from '../data';

const Contributions = () => (
  <Container className='outerContainer'>
    <div className='innerContainer'>
      <h3>Google Chromium Devtools Contributions</h3>
      <div className='userProfileContainer'>
        <a href={chromeProfile} target='_blank'm rel='noreferrer'>
          <div className='userProfile'>
				    <Image 
            width={283}
            height={261}
            src={chromeImg} alt="" />Chromium User Profile
          </div>
        </a>
      </div>
      <RenderContribs />
      <a href="/mcontributions">MORE CONTRIBUTIONS</a>
    </div>
  </Container>
)

const RenderContribs = () => (
  contribData.map(contrib => {
    const { key, title, issue, href, img, desc } = contrib;
    return(
    <div key={key} className="contrib">
      <h5>{title}</h5>
      <a href={issue} target='_blank'm rel='noreferrer'>Bug Report</a>
      <div className="contribContent">
        <div className="contribImg">
          <a href={href} target='_blank' rel='noreferrer'>
            <Image 
            width={0}
            height={0}
            src={img}
            style={{ width: '100%', height: 'auto' }}
            alt=""
            />Chromium User Profile
            <div className="image__overlay">
              <div className="image__title">MERGED CODE</div>
            </div>
          </a>
        </div>
        <div className='contribDescContainer'>
          <ul>
            <li>
              <p className='contribDesc'>{desc}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
  })
)

export default Contributions;