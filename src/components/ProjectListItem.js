import React from 'react'
import downArrow from "../webflowFiles/images/down-arrow.svg"

export default function ProjectListItem(props) {
    // console.log(props)
    return (
        <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                    <a href="#" className="project w-inline-block">
                        <div className="image-wrapper portfolio-image-wrapper">
                            <div className="flex mb-32px">
                                <div>
                                    <div>
                                        <div className="sub-title mb-16px">{props.Name}</div>
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
                            <img src={props.MobileImg} className="mobile-image" />
                            <img src={props.StandardDesktopImg} style={{zIndex: '10'}} className="image desktop-standard" />
                            <img src={props.MainProjectImage} style={{zIndex: '1'}} className="image large-desktop-img" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
