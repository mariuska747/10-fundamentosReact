import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { setAuthorizationHeader } from "./api/client.ts";
import storage from "./utils/storage.ts";

const accessToken = storage.get("auth");
if (accessToken) {
  setAuthorizationHeader(accessToken);
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App defaultIsLogged={!!accessToken}/>
  </StrictMode>,
);
// Boleean(accessToken) is the same as accessToken ? true : false
