import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div>
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Job Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">-</h3>
                {/* <div className="subheading mb-3">Intelitec Solutions</div> */}
                <p>I Don't have any job experience at the moment.</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">March 2013 - Present</span>
              </div>
            </div>
            <h2 className="mb-5">Another Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Glints Academy x Impact Byte Batch #6</h3>
                {/* <div className="subheading mb-3">Intelitec Solutions</div> */}
                <p>Fullstack Javascript</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">March 2020 - May 2020</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    );
  }
}

export default Experience;
