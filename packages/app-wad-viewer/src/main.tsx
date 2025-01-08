import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UnderConstruction } from "./components/under-construction";

import "@~/core/styles/reset.css";
import "@~/core/styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UnderConstruction />
  </StrictMode>,
);
