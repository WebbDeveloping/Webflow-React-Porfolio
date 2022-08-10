import React from 'react'
import ProjectListItem from './ProjectListItem'

export default function ProjectSection(props) {
  // const [data, setData] = React.useState(projects)


  const projectList = props.projects.slice(1, 3).map(pro => {
    return <ProjectListItem {...pro}/>
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
        <a href="projects.html" className="banner-btn prjct-btn w-inline-block">
          <div className="project-btn-inside">
            <div className="sub-title white no-wrap">View All Projects</div>
            <img
              src="../webflowFiles/images/right-long-arrow-red.svg"
              loading="lazy"
              alt=""
              className="btn-arrow ml-10px"
            />
          </div>
        </a>
      </div>
    </div>
  )
}
