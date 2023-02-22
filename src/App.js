import React, { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import { NavBar } from "./components/NavBar";
import { News } from "./components/News";
import About from "./components/About";

export const App = () => {
  const [progress, setProgress] = useState(0);
  const [countryName, setCountryName] = useState("us");
  const [articles, setArticles] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <LoadingBar color="#f11946" height={2} progress={progress} />
          {<NavBar setCountryName={setCountryName} setArticles={setArticles} />}
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
              articleState={{ articles, setArticles }}
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
              articleState={{ articles, setArticles }}
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
              articleState={{ articles, setArticles }}
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
              articleState={{ articles, setArticles }}
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
              articleState={{ articles, setArticles }}
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
              articleState={{ articles, setArticles }}
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
              articleState={{ articles, setArticles }}
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
