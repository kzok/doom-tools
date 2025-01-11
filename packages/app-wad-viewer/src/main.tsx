import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UnderConstruction } from "./components/under-construction";

import "@~/core/styles/reset.css";
import "@~/core/styles/global.css";

window.addEventListener("load", () => {
  const mountDestination = document.getElementById("root");
  if (mountDestination == null) {
    console.warn(`#root element wasn't found.`);
    return; // do nothing.
  }
  const root = createRoot(mountDestination);
  root.render(
    <StrictMode>
      <UnderConstruction />
    </StrictMode>,
  );
});
