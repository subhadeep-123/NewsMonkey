import React, { Component } from "react";

import loading from "../assets/loader.gif";

export default class loader extends Component {
  render() {
    return (
      <div
        className="text-center"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
        }}
      >
        <img src={loading} alt="API Loader" />
      </div>
    );
  }
}
