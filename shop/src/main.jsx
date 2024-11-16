import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Form from "./pages/Form";
import "./index.css";
import "./App.css";
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
        path: "form",
        element: <Form />,
      },
      {
        path: "singleProduct/:ki",
        element: <SingleProduct />,
      },
      {
        path: "Products",
        element: <Products />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
