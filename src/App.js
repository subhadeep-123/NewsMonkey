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
            element: <News pageSize={6} country="in" />,
          },
          {
            path: "/business",
            element: (
              <News
                pageSize={6}
                key="business"
                country="in"
                category="business"
              />
            ),
          },
          {
            path: "/entertainment",
            element: (
              <News
                pageSize={6}
                key="entertainment"
                country="in"
                category="entertainment"
              />
            ),
          },
          {
            path: "/health",
            element: (
              <News pageSize={6} key="health" country="in" category="health" />
            ),
          },
          {
            path: "/science",
            element: (
              <News
                pageSize={6}
                key="science"
                country="in"
                category="science"
              />
            ),
          },
          {
            path: "/sports",
            element: (
              <News pageSize={6} key="sports" country="in" category="sports" />
            ),
          },
          {
            path: "/technology",
            element: (
              <News
                pageSize={6}
                key="technology"
                country="in"
                category="technology"
              />
            ),
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
