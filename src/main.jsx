import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";
import AuthContextProvider from "./context/AuthContext";

const rootElem = document.getElementById('root');
const reactRootElem = createRoot(rootElem)

reactRootElem.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
)
