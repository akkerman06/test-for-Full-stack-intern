import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/styles/index.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
