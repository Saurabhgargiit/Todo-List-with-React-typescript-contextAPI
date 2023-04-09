import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProvideContext } from "./context/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ProvideContext>
    <App />
  </ProvideContext>
);
