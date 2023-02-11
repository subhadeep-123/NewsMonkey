import React, { Component } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import { NavBar } from "./components/NavBar";
import News from "./components/News";
import About from "./components/About";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      progress: 0,
    };
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <div>
            <LoadingBar
              color="#f11946"
              height={2}
              progress={this.state.progress}
            />
            {<NavBar />}
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "/",
            element: (
              <News setProgress={this.setProgress} pageSize={6} country="in" />
            ),
          },
          {
            path: "/business",
            element: (
              <News
                setProgress={this.setProgress}
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
                setProgress={this.setProgress}
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
              <News
                setProgress={this.setProgress}
                pageSize={6}
                key="health"
                country="in"
                category="health"
              />
            ),
          },
          {
            path: "/science",
            element: (
              <News
                setProgress={this.setProgress}
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
              <News
                setProgress={this.setProgress}
                pageSize={6}
                key="sports"
                country="in"
                category="sports"
              />
            ),
          },
          {
            path: "/technology",
            element: (
              <News
                setProgress={this.setProgress}
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
