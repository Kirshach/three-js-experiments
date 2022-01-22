import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { subscribeToAppMode } from "src/stores/app/subscriptions";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

subscribeToAppMode();
