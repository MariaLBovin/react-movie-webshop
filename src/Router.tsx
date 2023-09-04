import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Movies } from "./components/Movies";
import { Movie } from "./components/Movie";

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
    ],
  },
]);
