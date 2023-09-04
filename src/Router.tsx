import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Movies } from "./components/Movies";
import { Movie } from "./components/Movie";
import { Cart } from "./components/Cart";
import { Confirmation } from "./components/Confirmation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Movies />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/confirmation",
        element: <Confirmation />,
      },
    ],
  },
]);
