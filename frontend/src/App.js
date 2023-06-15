import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routers/router";

export default function App() {
    let element = useRoutes(routes);
    return <div className="App">{element}</div>;
}
