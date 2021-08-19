import React, { Component } from "react";
import { HashLink as LinkHash } from "react-router-hash-link";
import Me from "../assets/img/me.jpg";

class PageWrapper extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <LinkHash className="navbar-brand js-scroll-trigger" to="/#about">
            <span className="d-block d-lg-none">Ariq Bimantoro</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src={Me}
                alt="..."
              />
            </span>
          </LinkHash>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item">
                <LinkHash className="nav-link js-scroll-trigger" to="/#about">
                  About
                </LinkHash>
              </li>
              <li className="nav-item">
                <LinkHash className="nav-link js-scroll-trigger" to="/#skills">
                  Skills
                </LinkHash>
              </li>
              <li className="nav-item">
                <LinkHash
                  className="nav-link js-scroll-trigger"
                  to="/#education"
                >
                  Education
                </LinkHash>
              </li>
              <li className="nav-item">
                <LinkHash
                  className="nav-link js-scroll-trigger"
                  to="/#experience"
                >
                  Experience
                </LinkHash>
              </li>

              <li className="nav-item">
                <LinkHash
                  className="nav-link js-scroll-trigger"
                  to="/#interests"
                >
                  Interests
                </LinkHash>
              </li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default PageWrapper;
