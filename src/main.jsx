import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { PageHome } from "./pages/home";
import { PageProjects } from "./pages/projects.jsx";
import { PageProjectsDetails } from "./pages/projects-details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
  },
  {
    path: "projects",
    element: <PageProjects />,
  },
  {
    path: "projects/:projectId",
    element: <PageProjectsDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
