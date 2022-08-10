import React from 'react'
import longRedArrow from '../webflowFiles/images/right-long-arrow-red.svg'

export default function MainCTA() {
  return (
    <div className="section red-bg">
    <div className="main-container">
      <div className="small-padding">
        <div className="banner-section">
          <div
            data-w-id="0406720a-613a-f90a-dbf4-88908c478db7"
            className="caption red"
          >
            LOOKING FOR AN EXPERT?
          </div>
          <div className="banner-heading">
            <h2
              data-w-id="0406720a-613a-f90a-dbf4-88908c478dba"
              className="style-title cta-large"
            >
              LET&#x27;S START A PROJECT TOGETHER
            </h2>
          </div>
          <a
            data-w-id="0406720a-613a-f90a-dbf4-88908c478dbc"
            href="https://start-project.joewebbdesigns.com/project-details"
            target="_blank"
            className="banner-btn w-inline-block"
          >
            <div className="project-btn-inside">
              <div className="button-text white">Tell me the details</div>
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
  )
}
