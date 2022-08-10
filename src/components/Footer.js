import React from 'react'
import mylogo from '../webflowFiles/images/joe-webb-logo-white-p-500.png'

export default function Footer() {
    return (
        <footer id='footer' className="section black-bg">
            <div className="main-container">
                <div className="small-padding">
                    <div className="footer-grid">
                        <div className='footer-col'>
                            <img 
                                src={mylogo}
                                alt=""
                                className="brand footer"
                            />
                        </div>
                        <div className="footer-col">
                            <div>
                                <h6 className="sub-title h6 mb-16px">Contact:</h6>
                                <div className="contact-email">webbdeveloping@gmail.com</div>
                            </div>
                            <div>
                                <div className="big mb-16px">
                                    Website Powered By
                                    <a
                                        href="https://webflow.com/?gspk=am9ld2ViYjExMDU&amp;gsxid=taonDkLzVYZ0&amp;utm_medium=affiliate"
                                        target="_blank"
                                        className="webflow-link"
                                    >Webflow</a
                                    ><br />
                                </div>
                                <div className="regular">
                                    Copyright © 2022 Joe Webb Designs<br />All rights
                                    reserved.<br />
                                </div>
                            </div>
                        </div>
                        <div style={{color: 'transparent'}}className="footer-col">.</div>
                        <div className="footer-col" >
                            <h6 className="sub-title h6">Navigation</h6>
                            <div className="link-wrapper">
                                <a
                                    href="index.html"
                                    aria-current="page"
                                    className="footer-link w-inline-block w--current"
                                >
                                    <div className="regular mb-16px">Home</div>
                                </a>
                                <a href="about.html" className="footer-link w-inline-block">
                                    <div className="regular mb-16px">About<br /></div>
                                </a>
                                <a
                                    href="joe-webb-youtube-videos.html"
                                    className="footer-link w-inline-block"
                                >
                                    <div className="regular mb-16px">Videos<br /></div>
                                </a>
                                <a href="projects.html" className="footer-link w-inline-block">
                                    <div className="regular mb-16px">Projects<br /></div>
                                </a>
                                <a href="contact.html" className="footer-link w-inline-block">
                                    <div className="regular mb-16px">Contact<br /></div>
                                </a>
                                <a href="links.html" className="footer-link w-inline-block">
                                    <div className="regular mb-16px">Links<br /></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
