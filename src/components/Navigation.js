import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="fixed-nav">
      <div className="navigation-wrap">
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navbar-2 w-nav"
        >
          <div className="navigation-full">
            <div className="navigation-container">
              <div className="navigation-left">

                <Link
                 to='/'
                  // aria-current="page"
                  className="brand-2 w-nav-brand w--current"
                >
                  <h1 className="logo-text">Joe Webb</h1>
                </Link>
              </div>
              <div className="navigation-middle">
                <nav role="navigation" className="nav-menu w-nav-menu">
                  <Link className="navigation-link w-nav-link w--current" to='/'>Home</Link>
                  {/* <NavLink
                    style={({ isActive }) => ({
                      display: "block",
                      margin: "1rem 0",
                      color: isActive ? "red" : "",
                    })}
                    to={`/invoices/${invoice.number}`}
                    key={invoice.number}
                  >
                    {invoice.name}
                  </NavLink> */}
                  <Link className="navigation-link w-nav-link" to='/About'>About</Link>
                  <Link className="navigation-link w-nav-link" to='/Projects'>Projects</Link>
                  <Link className="navigation-link w-nav-link" to='/contact'>Contact</Link>
                </nav>
              </div>
              <div className="navigation-right">
                <nav role="navigation" className="nav-menu w-nav-menu">
                  <Link className="cta-button sm-hide w-inline-block" to='/contact'>
                    <div className="button-text white">Contact Me</div>

                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration="400"
          data-easing="ease-out"
          data-easing2="ease-out"
          role="banner"
          className="navigation-mob-2 w-nav"
        >
          <div className="navigation-container-mob">
            <a
              href="index.html"
              aria-current="page"
              className="w-nav-brand w--current"
            >
              <h1 className="logo-text">Joe Webb</h1>
            </a>
            <nav role="navigation" className="mobile-nav-2 w-nav-menu">
              <a
                href="index.html"
                aria-current="page"
                className="mobile-nav-link w-nav-link w--current"
              >Home</a
              >
              <div
                data-hover="true"
                data-delay="100"
                className="mobile-nav-link drlink w-dropdown"
              >
                <div className="dropdown-toggle-2 noen w-dropdown-toggle">
                  <div
                    className="nav-dropdown-icon mobile-icon w-icon-dropdown-toggle"
                  ></div>
                  <div>About</div>
                </div>
                <nav className="dropdown-list-template big-list w-dropdown-list">
                  <div className="dropdown-corner"></div>
                  <div className="dropdown-grid one-col">
                    <div className="dropdown-grid-block">
                      <div className="about-drop-down md-white">
                        <a
                          href="about.html"
                          className="nav-dropdown-link dropdown-grid-link w-dropdown-link"
                        >About Me</a
                        >
                        <a
                          href="projects.html"
                          className="nav-dropdown-link dropdown-grid-link w-dropdown-link"
                        >My Projects</a
                        >
                        <a
                          href="https://www.joewebbdesigns.com/post/how-i-built-my-portfolio-website"
                          className="nav-dropdown-link dropdown-grid-link w-dropdown-link"
                        >More Stories</a
                        >
                        <a
                          href="joe-webb-youtube-videos.html"
                          className="nav-dropdown-link dropdown-grid-link w-dropdown-link"
                        >YouTube Videos</a
                        >
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-bridge"></div>
                </nav>
              </div>
              <a href="projects.html" className="mobile-nav-link w-nav-link"
              >Projects</a
              >
              <a
                href="https://www.joewebbdesigns.com/post/professional-gohighlevel-websites"
                className="mobile-nav-link w-nav-link"
              >GHL Websites</a
              >
              <a href="contact.html" className="mobile-nav-link w-nav-link"
              >Contact</a
              >
            </nav>
            <div className="menu-mob w-nav-button">
              <div className="secondary _38px w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
