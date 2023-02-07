import React, { Component } from "react";

import loading from "../assets/loader.gif";

export default class loader extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="API Loader" />
      </div>
    );
  }
}
