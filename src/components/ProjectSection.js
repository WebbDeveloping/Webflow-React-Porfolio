import { React, useEffect } from 'react'
import downArrow from "../webflowFiles/images/down-arrow.svg";
import { getProjects } from "../wf-data/projects";
import { Outlet, Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function ProjectSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  let projects = getProjects();


  const projectList = projects.slice(1, 3).map(pro => {
    return (
      <div key={pro.ItemID} className="w-dyn-list">
        <div role="list" className="w-dyn-items">
          <div role="listitem" className="w-dyn-item">
            <Link to={`/project/${pro.ItemID}`} className="project w-inline-block">
              <div className="image-wrapper portfolio-image-wrapper">
                <div className="flex mb-32px">
                  <div>
                    <div>
                      <div
                        data-aos="fade-in"
                        data-aos-offset="200"
                        data-aos-easing="ease-in"
                        data-aos-delay="200"
                        className="sub-title mb-16px fade-in ms200">{pro.Name}</div>
                    </div>
                    <div className="inside-button-container">
                      <div
                        data-aos="fade-in"
                        data-aos-offset="200"
                        data-aos-easing="ease-in"
                        data-aos-delay="400"
                        className="button-text red fade-in ms400">View Project</div>
                      <img
                        src={downArrow}
                        loading="lazy"
                        alt=""
                        data-aos="fade-in"
                        data-aos-offset="200"
                        data-aos-delay="400"
                        data-aos-easing="ease-in"
                        className="image cr-arrow right fade-in ms400"
                      />
                    </div>
                  </div>
                </div>
                <img
                  src={pro.MobileImg}
                  className="mobile-image fade-in ms600"
                  data-aos="fade-in"
                  data-aos-offset="200"
                  data-aos-delay="600" />
                <img
                  data-aos="fade-in"
                  data-aos-offset="200"
                  data-aos-delay="400"
                  data-aos-easing="ease-in"
                  src={pro.StandardDesktopImg} 
                  style={{ zIndex: '10' }} 
                  className="image desktop-standard fade-in ms400" />
                <img
                  data-aos="fade-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in"
                  data-aos-delay="500"
                  src={pro.MainProjectImage} 
                  style={{ zIndex: '1' }} 
                  className="image large-desktop-img fade-in ms200" />
              </div>
            </Link>
            <Outlet />
          </div>
        </div>
      </div>
    )
    // return <ProjectListItem {...pro}/>
  })

  return (
    <div id="projects" className="section">
      <div className="main-container center top-padding">
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          className="top-content projects center"
        >
          <h2
            className="style-title"
          >
            My Custom Website Projects
          </h2>
        </div>
        <div className="project-grid">
          {projectList}
        </div>
        <Link to='/projects' className="banner-btn prjct-btn w-inline-block">
          <div className="project-btn-inside">
            <div className="sub-title white no-wrap">View All Projects</div>
            <img
              src="../webflowFiles/images/right-long-arrow-red.svg"
              loading="lazy"
              alt=""
              className="btn-arrow ml-10px"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
