import { useRoutes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Products from "../components/Products";
import NoMatch from "../components/NoMatch";

export const navigation = [
  { path: "/", element:<Dashboard /> },
  {
    path: "/products",
    element: <Products />,
  },
  { path: "*", element: <NoMatch /> },
];
