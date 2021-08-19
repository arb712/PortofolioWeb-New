import React, { Component } from "react";
import About from "../Common/About";
import Skills from "../Common/Skills";
import Education from "../Common/Education";
import Experience from "../Common/Experience";
import Interests from "../Common/Interests";

class Home extends Component {
  render() {
    return (
      <>
        <div class="container-fluid p-0">
          <About
            namaDepan="Ariq"
            namaBelakang="Bimantoro"
            kota="Sagulung, Batam, Indonesia"
            phone="082185647628"
            email="ariqbimantoro@gmail.com"
            description="Enthusiastic ReactJS Developer, eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Motivated to keep learn, grow, excel and develop in Technology Industries."
          />
          <Skills />
          <Education />
          <Experience />
          <Interests />
        </div>
      </>
    );
  }
}

export default Home;
