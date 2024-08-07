import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./i18n/config";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
