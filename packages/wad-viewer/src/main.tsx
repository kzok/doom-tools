import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { greet } from "./greet";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>{greet("Vite")}</h1>
  </StrictMode>,
);
