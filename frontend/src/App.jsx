import { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import NoMatch from "./components/NoMatch";
import { navigation } from "./routers/router";
function App() {
  let element = useRoutes(navigation);
  return (
    <>
      {element}
    </>
  );
}

export default App;
