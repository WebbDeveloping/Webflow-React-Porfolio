import React from 'react'
import downArrow from "../webflowFiles/images/down-arrow.svg";

import ProjectListItem from './ProjectListItem';
import { getProjects } from "../wf-data/projects";
import {
  NavLink,
  Outlet,
  useSearchParams,
  Link
} from "react-router-dom";

export default function ProjectSection() {
  let projects = getProjects();
  let [searchParams, setSearchParams] = useSearchParams();


  const projectList = projects.slice(1, 3).map(pro => {
    return (
      <div key={pro.ItemID} className="w-dyn-list">
        <h2>userId is 👉️ {pro.ItemID}</h2>
        <div role="list" className="w-dyn-items">
          <div role="listitem" className="w-dyn-item">
            <Link to={`/project/${pro.ItemID}`} className="project w-inline-block">
              <div className="image-wrapper portfolio-image-wrapper">
                <div className="flex mb-32px">
                  <div>
                    <div>
                      <div className="sub-title mb-16px">{pro.Name}</div>
                    </div>
                    <div className="inside-button-container">
                      <div className="button-text red">View Project</div>
                      <img
                        src={downArrow}
                        loading="lazy"
                        alt=""
                        className="image cr-arrow right"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="mb-8px">
                          <div className="mb-8px thin">Built With</div>
                      </div> */}
                <img src={pro.MobileImg} className="mobile-image" />
                <img src={pro.StandardDesktopImg} style={{ zIndex: '10' }} className="image desktop-standard" />
                <img src={pro.MainProjectImage} style={{ zIndex: '1' }} className="image large-desktop-img" />
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
    <div className="section">
      <div className="main-container center top-padding">
        <div
          // data-w-id="606f14f7-abfa-2a4f-3fac-301115d568fe"
          // style="
          //   -webkit-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
          //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
          //   -moz-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
          //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
          //   -ms-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
          //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
          //   transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0)
          //     rotateY(0) rotateZ(0) skew(0, 0);
          //   opacity: 0;
          // "
          className="top-content projects center"
        >
          <h2
            // data-w-id="606f14f7-abfa-2a4f-3fac-301115d568ff"
            // style="
            //   -webkit-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
            //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
            //   -moz-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
            //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
            //   -ms-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
            //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
            //   transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0)
            //     rotateY(0) rotateZ(0) skew(0, 0);
            //   opacity: 0;
            // "
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
