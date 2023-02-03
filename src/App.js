import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavBar from "./components/NavBar";

export default class App extends Component {
  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <div>Hello world!</div>,
      },
    ]);

    return (
      <div>
        <NavBar />
        <RouterProvider router={router} />
      </div>
    );
  }
}
