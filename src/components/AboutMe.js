import React from 'react'
import longRedArrow from '../webflowFiles/images/right-long-arrow-red.svg'


export default function AboutMe() {
  return (
    <div id="about-me" className="section black-bg padding-top">
    <div className="main-container">
      <div className="extra-small-padding">
        <div className="about-section">
          <div
            id='about-me-home'
            style={{
              transform: "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: "0"}}
            
            className="about-section-image left-image fade-in ms600"
          >
            <img
              src="./webflowFiles/images/Profile-Photo-1.png"
              loading="lazy"
              sizes="100vw"
              alt=""
              className="image my-face"
            />
          </div>
          <div
            data-w-id="280e51e2-17e4-7eb9-ec20-18a4d2cbc951"
            style=
              {{transform: "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: "0"
            }}
            className="about-section-text fade-in ms300"
          >
            <div className="about-title">
              <div className="sub-title red">About</div>
            </div>
            <h2 className="style-title">Who Am I?</h2>
            <div className="about-paragraph">
              <p className="regular">
                I&#x27;m Joe Webb and I specialize in building websites
                using <span className="red">GoHighLevel</span> and
                <span className="red">Webflow</span>. I work as a freelance web
                developer, and have been doing so for the past few years. My
                clients have included small businesses, startups, and
                nonprofit organizations.<br />‍<br />Curious how I made my
                portfolio?
                <a
                  href="https://www.joewebbdesigns.com/post/how-i-built-my-portfolio-website"
                  target="_blank"
                  >Read about it here</a>.<br />
              </p>
            </div>
            <a href="about.html" className="learn-more-btn w-inline-block">
              <div className="project-btn-inside">
                <div className="button-text white">Learn More</div>
                <img
                  src={longRedArrow}
                  loading="lazy"
                  alt=""
                  className="btn-arrow"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
