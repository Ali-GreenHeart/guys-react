import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";

const rootElem = document.getElementById('root');
const reactRootElem = createRoot(rootElem)


reactRootElem.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
