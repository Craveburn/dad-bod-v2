import React, { Component } from "react";
import ReactPlayer from "react-player";

import "../CSS/Home.css";

import Navbar from "../navigation/Navbar.js";

import TheBoys from "../pics/UpdatedBandPhoto.jpg";

export default class extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <div className="videoPlayer">

          <ReactPlayer url="https://youtu.be/-4CR3aGC8aQ" playing/>
        </div>
        <div className="homeBody">
          <img src={TheBoys} alt="pic of the boys in the band" />
          <p>this is the mothafuckin home page</p>
        </div>
      </div>
    );
  }
}
