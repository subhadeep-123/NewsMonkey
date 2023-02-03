import React, { Component } from "react";
import imagepath from "../assets/images/subhadeep.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h2 style={{ textAlign: "center" }}>My, MySelf & I</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={imagepath} alt="subhadeep" style={{ width: "100%" }} />
              <div className="container">
                <h2>Subhadeep Banerjee</h2>
                <p className="title">CEO & Founder</p>
                <p>
                  Hey, I am subhadeep a passionate software developer with a
                  knack of software architecture and design
                </p>
                <p>subhadeep762@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
