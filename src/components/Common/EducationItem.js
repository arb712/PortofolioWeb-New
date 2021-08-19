import React, { Component } from "react";

class EducationItem extends Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">{this.props.namaEdukasi}</h3>
            <div className="subheading mb-3">{this.props.posisi}</div>
            <div>{this.props.jurusan}</div>
            {/* <p>GPA: 3.23</p> */}
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">
              {this.props.tahunMasuk} - {this.props.tahunLulus}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationItem;
