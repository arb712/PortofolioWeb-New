import React, { Component } from "react";
import EducationItem from "./EducationItem";

const education = [
  {
    namaEdukasi: "Universitas Internasional Batam",
    posisi: "Bachelor of Computer Science",
    jurusan: "Information System",
    tahunMasuk: "August 2018",
    tahunLulus: "Present",
  },
];

class Education extends Component {
  render() {
    return (
      <div>
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            {education.map((item, index) => {
              return <EducationItem {...item} key={index} />;
            })}
            {/* <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">James Buchanan High School</h3>
                <div className="subheading mb-3">Technology Magnet Program</div>
                <p>GPA: 3.56</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">August 2002 - May 2006</span>
              </div>
            </div> */}
          </div>
        </section>
        <hr className="m-0" />
      </div>
    );
  }
}

export default Education;
