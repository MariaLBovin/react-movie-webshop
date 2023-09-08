import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Movie } from "./components/Movie";
import { Checkout } from "./components/Checkout";
import { Confirmation } from "./components/Confirmation";
import { Home } from "./components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/confirmation",
        element: <Confirmation />,
      },
    ],
  },
]);
