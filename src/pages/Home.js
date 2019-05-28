import React, { Component } from "react";
import ReactPlayer from "react-player";

import "../CSS/Home.css";

import Navbar from "../navigation/Navbar.js";

export default class extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <div className="playerWrapper">
          <ReactPlayer
            className="videoPlayer"
            url="https://youtu.be/-4CR3aGC8aQ"
            width="100%"
            height="100%"
            controls
          />
        </div>
        <div className="homeBody">
          <div className="homeText">
          <p>Dad Bod - "Don't Say"</p>
          <p>
            Lyrics:
            <br />
            Don't Say
            <br />
            You're gonna be there anyway
            <br />
            Don't Say, Don't Say
            <br />
            Don't Say
            <br />
            You're gonna leave me anyway
            <br />
            Don't Say, Don't Say
            <br />
            These days
            <br />
            Feel like I'm sinking down below
            <br />
            These days, won't stay
            <br />
            You say
            <br />
            You've got nothing on your mind
            <br />
            You say, don't say
            <br />
            Where did it go
            <br />
            Back in time? Let me know
            <br />
            I'll let you show
            <br />
            All the things, that make it so
            <br />
            We'd like to dedicate this video to Stephen Fitzpatrick and Audun
            Laading of "Her's".
          </p>
          </div>
        </div>
      </div>
    );
  }
}
