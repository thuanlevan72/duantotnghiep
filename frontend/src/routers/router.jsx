

import Products from "../components/Products";
import BestSeller from "../components/BestSeller";
import Laptop from "../components/Laptop";
import Desktop from "../components/Desktop";
import NoMatch from "../components/NoMatch";
import MainContent from "../components/client/layout/MainContent";

const routes = [
  { path: "/", element: <MainContent /> },
  {
    path: "/products",
    element: <Products />,
    children: [
      { index: true, element: <BestSeller /> },
      { path: "laptop", element: <Laptop /> },
      { path: "desktop", element: <Desktop /> }
    ]
  },
  { path: "*", element: <NoMatch /> }
];


export default routes;