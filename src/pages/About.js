import React from 'react'
import Footer from '../components/Footer'
import MainCTA from '../components/MainCTA'
import Navigation from '../components/Navigation'
import ServiceSection from '../components/ServiceSection'
import SideCaptions from '../components/SideCaptions'
import myPhoto from '../webflowFiles/images/about-me.png'
import myLogo from '../webflowFiles/images/joe-webb-logo-white.png'
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="body bg-jet">
            <Navigation />
            <SideCaptions />
            <div className="section top-section">
                <div className="main-container">
                    <div className="medium-padding">
                        <div className="about-wrapper">
                            <div className="about-section-wrapper">
                                <div
                                    className="about-section-text _2">
                                    <div className="sub-title">About Me</div>
                                    <h2 className="style-title">I&#x27;m Joe Webb,</h2>
                                    <p className="big mb-16px">I&#x27;m a web developer &amp; digital marketer from Salt Lake City, Utah. </p>
                                    <p className="regular">I specialize in brand identity and lead generation through website development. I have been lucky enough to work with some of the most exciting startups in the country!When it comes to websites, I am passionate about crafting unique and memorable sites that are optimized for conversion rates.
                                    </p>
                                </div>
                                <div
                                    className="about-image-wrapper">
                                    <img src={myPhoto}
                                        alt=""
                                        className="image grey profile-me" />
                                    <img src={myLogo}
                                        loading="lazy"
                                        alt=""
                                        className="image about-logo" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceSection />
            <MainCTA />
            <Footer />
        </div>
    )
}
