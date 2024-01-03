import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./layouts/layout.tsx";
import HomePage from "./pages/home/home.page.tsx";
import NotFoundErrorPage from "./pages/not-found-error.page.tsx";
import JobPage from "./pages/job/job.page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "job",
        children: [
          {
            path: ":id",
            element: <JobPage />,
          },
        ],
      },
    ],
    errorElement: <NotFoundErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
