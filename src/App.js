import React, { Component } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "./components/NavBar";
import News from "./components/News";
import About from "./components/About";

export default class App extends Component {
  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <div>
            {<NavBar />}
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "/",
            element: <News />,
          },
          {
            path: "/about",
            element: <About />,
          },
        ],
      },
    ]);

    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
  }
}
