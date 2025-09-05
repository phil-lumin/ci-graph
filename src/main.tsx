import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import * as Sentry from "@sentry/react";
import "./index.css";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [Sentry.browserTracingIntegration()],
  tracePropagationTargets: [/^https:\/\/phil-lumin\.github\.io\/ci-graph\//],
  release: import.meta.env.APP_VERSION,
  sendDefaultPii: true,
  enableLogs: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
