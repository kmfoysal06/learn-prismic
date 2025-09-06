import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App.jsx";
import "../scss/main.scss";

const root = ReactDOM.createRoot(document.getElementById("prismic-root"));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
