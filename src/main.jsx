import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { StateContextProvider } from "./Context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StateContextProvider>
    <App />
  </StateContextProvider>
);
