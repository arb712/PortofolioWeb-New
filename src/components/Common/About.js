import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <>
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              {this.props.namaDepan}
              <span className="text-primary">{this.props.namaBelakang}</span>
            </h1>
            <div className="subheading mb-5">
              {this.props.kota} · {this.props.phone} ·
              <Link to="mailto:ariqbimantoro@gmail.com">
                {this.props.email}
              </Link>
            </div>
            <p className="lead mb-5">{this.props.description}</p>
            <div className="social-icons">
              <Link
                className="social-icon"
                to={{
                  pathname:
                    "https://www.linkedin.com/in/ariq-bimantoro-b7301a194",
                }}
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link
                className="social-icon"
                to={{
                  pathname: "https://github.com/arb712",
                }}
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </Link>
              <Link
                className="social-icon"
                to={{
                  pathname: "https://www.instagram.com/ariqbimantoro/",
                }}
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </>
    );
  }
}

export default About;
