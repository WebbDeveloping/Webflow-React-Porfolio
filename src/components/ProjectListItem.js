import React from 'react'
import downArrow from "../webflowFiles/images/down-arrow.svg";
import { Link, useParams } from "react-router-dom";
import Project from '../pages/Project';

export default function ProjectListItem(props) {
  

    return (
        <>

        {/* <Project {...props}/> */}
        <div className="w-dyn-list">
        <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
                <Link to={`/project/${props.ItemID}`} className="project w-inline-block">
                    <div className="image-wrapper portfolio-image-wrapper">
                        <div className="flex mb-32px">
                            <div>
                                <div>
                                    <div className="sub-title mb-16px fade-in ms200">{props.Name}</div>
                                </div>
                                <div className="inside-button-container ms400">
                                    <div className="button-text red fade-in ms400">View Project</div>
                                    <img
                                        src={downArrow}
                                        loading="lazy"
                                        alt=""
                                        className="image cr-arrow right fade-in ms400"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <div className="mb-8px">
                            <div className="mb-8px thin">Built With</div>
                        </div> */}
                        <img src={props.MobileImg} className="mobile-image fade-in ms300" />
                        <img src={props.StandardDesktopImg} style={{zIndex: '10'}} className="image desktop-standard fade-in ms500" />
                        <img src={props.MainProjectImage} style={{zIndex: '1'}} className="image large-desktop-img fade-in ms700" />
                    </div>
                </Link>
            </div>
        </div>
    </div>
    </>  
    )
}
