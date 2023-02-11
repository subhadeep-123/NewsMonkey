import React from "react";

import loading from "../assets/loader.gif";

export const Loader = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="API Loader" />
    </div>
  );
};
