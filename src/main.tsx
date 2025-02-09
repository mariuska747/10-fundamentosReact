import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { setAuthorizationHeader } from "./api/client.ts";
import storage from "./utils/storage.ts";
import { AuthProvider } from "./pages/auth/context.tsx";
import { BrowserRouter } from "react-router-dom";

const accessToken = storage.get("auth");
if (accessToken) {
  setAuthorizationHeader(accessToken);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider defaultIsLogged={!!accessToken}>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
// Boleean(accessToken) is the same as accessToken ? true : false
