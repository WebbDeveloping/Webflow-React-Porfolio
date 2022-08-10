import React from 'react'
import greylogo from '../webflowFiles/images/joe-webb-logo-grey.png'

export default function HomeHero() {
  return (
    <div className="section hero">
    <div className="main-container">
      <div className="hero-section home-hero">
        <div className="hero-width">
          <div className="hero-section-text">
            <div className="hero-section-heading half-width-hero">
              <h1
                // data-w-id="99a19604-06dc-2ac4-9759-f1406c7ee8fb"
                // style="
                //   -webkit-transform: translate3d(0, 0, 0)
                //     scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0)
                //     skew(0, 0);
                //   -moz-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
                //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   -ms-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
                //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
                //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   opacity: 0;
                // "
                className="large-titlee"
              >
                I’m <span className="primary">Joe Webb</span>, a Web Designer
                &amp;<span className="primary"> Developer</span
                ><span className="primary"></span>.<br />
              </h1>
            </div>
            <div className="hero-section-paragraph">
              <p
                // data-w-id="99a19604-06dc-2ac4-9759-f1406c7ee8fe"
                // style="
                //   -webkit-transform: translate3d(0, 0, 0)
                //     scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0)
                //     skew(0, 0);
                //   -moz-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
                //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   -ms-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
                //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
                //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   opacity: 0;
                // "
                className="regular"
              >
                Hi, my name is Joe Webb and I&#x27;m a custom website
                developer.
                <span className="red"
                  >I specialize in building websites using GoHighLevel &amp;
                  Webflow</span
                >. I&#x27;ve created hundreds of custom websites for both
                small &amp; large businesses. I&#x27;m passionate about
                helping my clients achieve their online goals, whether
                it&#x27;s increasing sales, generating leads, or simply
                getting their name out there
              </p>
            </div>
            <div className="hero-section-button flex together">
              <a
                href="/"
                // data-w-id="99a19604-06dc-2ac4-9759-f1406c7ee901"
                // style="
                //   -webkit-transform: translate3d(0, 0, 0)
                //     scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0)
                //     skew(0, 0);
                //   -moz-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
                //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   -ms-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
                //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
                //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   opacity: 0;
                // "
                className="btn-arrow-down-red w-inline-block"
              >
                <div className="inside-button-container">
                  <div className="button-text big red">
                    See my website designs
                  </div>
                  <img
                    src="./webflowFiles/images/down-arrow.svg"
                    loading="lazy"
                    alt=""
                    className="image cr-arrow right"
                  />
                </div>
              </a>
              <a
                href="/"
                // data-w-id="c38fa819-803a-37e9-8eed-545135b6431c"
                // style="
                //   -webkit-transform: translate3d(0, 0, 0)
                //     scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0)
                //     skew(0, 0);
                //   -moz-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
                //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   -ms-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
                //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
                //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   opacity: 0;
                // "
                className="btn-arrow-down-red right-button w-inline-block"
              >
                <div className="inside-button-container">
                  <div className="button-text regular white-underline">
                    Get in touch
                  </div>
                </div>
              </a>
            </div>
          </div>
          <img 
            src={greylogo}
            loading="lazy"
            alt=""
            className="slash-svg"
          />
        </div>
      </div>
    </div>
  </div>
  )
}
