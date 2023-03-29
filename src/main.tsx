import React, { StrictMode } from "react";
import { Root, createRoot } from "react-dom/client";
import Application from "./Application";
import { Provider } from "react-redux";
import store from "./state/store";
import "./index.css";

const div: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

const root: Root = createRoot(div);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </StrictMode>
);