import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Movies } from "./components/Movies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Movies />,
      },
    ],
  },
]);
