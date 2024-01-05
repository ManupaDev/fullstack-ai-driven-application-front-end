import { ClerkProvider } from "@clerk/clerk-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AdminMainLayout from "./layouts/admin.layout.tsx";
import MainLayout from "./layouts/main.layout.tsx";
import RootLayout from "./layouts/root.layout.tsx";
import JobCreatePage from "./pages/admin/createJob/job-create.page.tsx";
import HomePage from "./pages/home/home.page.tsx";
import JobPage from "./pages/job/job.page.tsx";
import NotFoundErrorPage from "./pages/not-found-error.page.tsx";
import SignInPage from "./pages/sign-in/sign-in.page.tsx";
import SignUpPage from "./pages/sign-up/sign-up.page.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
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
      },
      {
        path: "admin",
        element: <AdminMainLayout />,
        children: [
          {
            path: "job/create",
            element: <JobCreatePage />,
          },
        ],
      },
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
    ],
    errorElement: <NotFoundErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
