import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./pages/Root.jsx";
import Home from "./pages/Home.jsx";
import SingleCountry from "./pages/SingleCountry.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/country/:id",
        element: <SingleCountry />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
