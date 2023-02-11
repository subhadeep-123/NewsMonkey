import React, { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import { NavBar } from "./components/NavBar";
import { News } from "./components/News";
import About from "./components/About";

export const App = () => {
  const [progress, setProgress] = useState(0);
  const [countryName, setCountryName] = useState("us");

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <LoadingBar color="#f11946" height={2} progress={progress} />
          {<NavBar setCountryName={setCountryName} />}
          <Outlet />
        </div>
      ),
      children: [
        {
          path: "/",
          element: (
            <News
              setProgress={setProgress}
              pageSize={6}
              country={countryName}
            />
          ),
        },
        {
          path: "/business",
          element: (
            <News
              setProgress={setProgress}
              pageSize={6}
              key="business"
              country={countryName}
              category="business"
            />
          ),
        },
        {
          path: "/entertainment",
          element: (
            <News
              setProgress={setProgress}
              pageSize={6}
              key="entertainment"
              country={countryName}
              category="entertainment"
            />
          ),
        },
        {
          path: "/health",
          element: (
            <News
              setProgress={setProgress}
              pageSize={6}
              key="health"
              country={countryName}
              category="health"
            />
          ),
        },
        {
          path: "/science",
          element: (
            <News
              setProgress={setProgress}
              pageSize={6}
              key="science"
              country={countryName}
              category="science"
            />
          ),
        },
        {
          path: "/sports",
          element: (
            <News
              setProgress={setProgress}
              pageSize={6}
              key="sports"
              country={countryName}
              category="sports"
            />
          ),
        },
        {
          path: "/technology",
          element: (
            <News
              setProgress={setProgress}
              pageSize={6}
              key="technology"
              country={countryName}
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
};
