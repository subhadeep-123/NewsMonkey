import React, { Component } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "./components/NavBar";
import News from "./components/News";
import About from "./components/About";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export default class App extends Component {
  render() {
    console.log(API_KEY);
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
            element: <News key={API_KEY} />,
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
