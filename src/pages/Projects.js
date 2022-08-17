import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ProjectListItem from "../components/ProjectListItem";
import ProjectSection from "../components/ProjectSection";
import { Link } from "react-router-dom";
// import ProjectListItem from '../ProjectListItem'

export default function Projects(props) {
    // const [data, setData] = React.useState(props.projects);

    const projectList = props.projects.map(pro => {
        console.log('pro', pro)
        return <ProjectListItem {...pro} />
    })
console.log(props.projects)
    return (
        <section className='body'>
            <Navigation />
            <div className="section top-section">
                <div className="main-container">
                    <div className="top-spacing">
                        <div className="medium-padding">
                            <div className="page-description">
                                <div className="page-title">
                                    <h1 className="large-titlee mb-32px">My Projects</h1>
                                </div>
                                <div className="page-sub-title">
                                    <a
                                        href="#"
                                        className="btn-arrow-down-red mb-8px w-inline-block"
                                    >
                                        <div className="inside-button-container">
                                            <div className="button-text red">View Projects</div>
                                            <img
                                                src="images/down-arrow.svg"
                                                loading="lazy"
                                                alt=""
                                                className="image arrow"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section project-section">
                <div className="main-container">
                    <div className="feature-colection-grid w-dyb-items">
                        {projectList}
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}
