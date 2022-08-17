import React from 'react'
import downArrow from "../webflowFiles/images/down-arrow.svg";
import {
    Link,
    useParams,
    useNavigate,
    useLocation,
} from "react-router-dom";
import { getProject, projects } from "../wf-data/projects";
import Navigation from '../components/Navigation';
import SideCaptions from '../components/SideCaptions';
import Footer from '../components/Footer';

export default function Project() {

    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let project = getProject(params.ItemId);
    console.log('project', project)

    return (
        <>
            <Navigation />
            <SideCaptions />
            <div className="section top-section">
                <div className="main-container">
                    <div className="top-spacing">
                        <div className="medium-padding">
                            <div className="project-page-description">
                                <div className="page-title">
                                    <h1 
                                    // data-w-id="c9208809-18b5-1d38-3bcf-49597b8208c6"
                                    //     style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                                        className="large-titlee">
                                            {project.Name}
                                        </h1>
                                </div>
                                <div className="services-wrapepr">
                                    <div className="collection-list-wrapper w-dyn-list">
                                        <div role="list" className="collection-list padding-left-neg-10 w-dyn-items w-row">
                                            <div role="listitem" className="service-tags w-dyn-item w-col w-col-6">
                                                <div className="button-text red"></div>
                                                <div className="button-text">•</div>
                                            </div>
                                        </div>
                                        <div className="w-dyn-empty">
                                            <div>No items found.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section black-bg">
                <div className="main-container">
                    <div className="small-padding">
                        <div className="about-section">
                            <img 
                            // data-w-id="76ad76c0-b27f-160d-0643-ce7f6fd2d01f"
                            //     loading="lazy"
                            //     style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"

                                src={project.MainProjectImage} alt="main project image" />

                        </div>
                    </div>
                </div>
            </div>
            <div className="section black-bg">
                <div className="main-container">
                    <div className="small-padding">
                        <div className="about-section">
                            <div 
                            // data-w-id="cce0d9f6-4ff0-e18d-2a9c-72c6ba585a79"
                            //     style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"

                                className="project-over-view-section">
                                <div>
                                    <div className="small-sub-title">PROJECT OVERVIEW
                                    </div>
                                    <h2 className="style-title">PROJECT OVERVIEW
                                    </h2>
                                </div>
                                <div className="about-paragraph">
                                    <p className="regular">
                                    {project.ProjectOverview}
                                    </p>
                                </div>
                            </div>
                            <div
                                // data-w-id="6356c4c7-c576-1491-78a6-66e3eba1b880"
                                // style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                                className="contact-section-text justify-start">
                                <div>
                                    <h2 className="style-title">My Contributions</h2>
                                </div>
                                <div className="about-paragraph">
                                    <p className="regular">
                                    {project.ProjectContribution}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section bg-jet">
                <div className="main-container">
                    <div className="small-padding top-border">
                        <div>
                            <div className="sub-title red">Desktop, Tablet and Mobile.<br />
                            </div>
                            <h2 className="style-title">Fully Responsive Designs</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section black-bg">
                <div className="main-container">
                    <div className="small-padding">
                        <div className="about-section">
                            <div 
                            // data-w-id="28792773-71e8-d811-df88-871957fef4e7"
                            //     style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                                className="contact-page-right gray-bg">
                                <img src={project.StandardDesktopImg}
                                    loading="lazy"
                                    alt=""
                                    className="image" />

                            </div>
                            <div
                                // data-w-id="84a9a6c1-d9a6-798b-b436-a846f678d3ff"
                                // style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                                className="contact-page-right gray-bg">
                                <img
                                   src={project.MobileImg}
                                    loading="lazy"
                                    alt=""
                                    className="image" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section bg-jet">
                <div className="main-container">
                    <div className="small-padding">
                        <div className="about-section">
                            <div 
                            // data-w-id="c601cb4e-e8d3-f84c-9909-ee22bb67148c"
                            //     style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                                className="client-feedback-left">
                                <div
                                    className="sub-title red">Final thoughts &amp;
                                    <br />
                                </div>
                                <h2 className="style-title">Additional Images</h2>
                            </div>
                            <div 
                            // data-w-id="c601cb4e-e8d3-f84c-9909-ee22bb671491"
                            //     style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                                className="client-feedback-right">
                                <p className="big">
{project.finalthought}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="main-container">
                    <div className="small-padding">
                        <div className="w-dyn-list">
                            <div 
                            // data-w-id="750085ba-022e-838d-62fd-fc3f42b5dccb"
                            //     style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" role="list"
                                className="additional-classNamees w-dyn-items">
                                <div role="listitem" className="additional-image-wrap gray-bg w-dyn-item">
                                    <a href="#"
                                        className="w-inline-block w-lightbox">
                                        <img src="" loading="lazy" alt="" className="black-bg" />
                                    </a>
                                </div>
                            </div>
                            <div className="w-dyn-empty">
                                <div>No items found.</div>
                            </div>
                        </div>
                        <div className="live-link-cetner">
                            <a href="#" className="regular live-link">View Live Preview</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section bg-jet">
                <div className="main-container">
                    <div className="small-padding">
                        <div className="about-section">
                            <div 
                            // data-w-id="978da061-b85f-741a-c7cf-dbc2bd169eb8" 
                            // style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"

                                className="client-feedback-left">
                                <div className="about-paragraph">
                                    <div className="sub-title">CLIENT FEEDBACK</div>
                                    <h2 className="style-title">CLIENT FEEDBACK</h2>
                                </div>
                            </div>
                            <div 
                            // data-w-id="978da061-b85f-741a-c7cf-dbc2bd169ebf" 
                            // style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"

                                className="client-feedback-right">
                                <div className="about-paragraph">
                                    <p className="big">
                                        {project.clientfeedback}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section black-bg">
                <div className="main-container">
                    <div className="medium-padding">
                        <div className="about-section">
                            <div 
                            // data-w-id="fdb2fec5-5e12-ff0e-e5de-867bd40b60da" 
                            // style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"

                                className="contact-section-text top">
                                <div className="sub-title">GENERAL INQUIRIES</div>
                                <h2 className="large-titlee">Let&#x27;s Connect</h2>
                            </div>
                            <div className="contact-page-right">
                                <div>
                                    <div className="form w-form">
                                        <form id="email-form"
                                            name="email-form"
                                            data-name="Email Form"
                                            method="get">
                                            <div className="wrap">
                                                <input type="text"
                                                    className="form-input w-input"
                                                    maxLength="256"
                                                    name="Name-2"
                                                    data-name="Name 2"
                                                    // style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"

                                                    placeholder="Full Name"
                                                    // data-w-id="fdb2fec5-5e12-ff0e-e5de-867bd40b60f0"
                                                    id="Name-2"
                                                    required="" />

                                            </div>
                                            <div 
                                            // data-w-id="fdb2fec5-5e12-ff0e-e5de-867bd40b60f1"
                                            //     style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                                                className="wrap">
                                                <input
                                                    type="email"
                                                    className="form-input w-input"
                                                    maxLength="256"
                                                    name="Email-2"
                                                    data-name="Email 2"
                                                    placeholder="Email"
                                                    id="Email-2" r
                                                    equired="" />

                                            </div>
                                            <div className="wrap">
                                                <textarea
                                                    className="form-input w-input"
                                                    maxLength="5000"
                                                    name="field"
                                                    data-name="Field"
                                                    // style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                                                    placeholder="Message"
                                                    data-w-id="fdb2fec5-5e12-ff0e-e5de-867bd40b60f4"
                                                    id="field">
                                                </textarea>
                                            </div>
                                            <div className="wrap">

                                            </div>
                                            <div 
                                            // data-w-id="fdb2fec5-5e12-ff0e-e5de-867bd40b60f6"
                                            //     style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                                                className="wrap margin-bottom">

                                                </div>
                                            <input
                                                type="submit"
                                                value="Submit"
                                                data-wait="Please wait..."
                                                // data-w-id="fdb2fec5-5e12-ff0e-e5de-867bd40b60f7"
                                                // style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                                                className="submit-button w-button" />
                                        </form>
                                        <div className="w-form-done">
                                            <div>Thank you! Your submission has been received!</div>
                                        </div>
                                        <div className="w-form-fail">
                                            <div>Oops! Something went wrong while submitting the form.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
