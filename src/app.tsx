import React from "react";
import ReactDOM from "react-dom";

import "./css/base.css";
import Page from "./page";

const root = document.getElementById("root");
if (root) {
    ReactDOM.render(
        <React.StrictMode>
            <Page />
        </React.StrictMode>,
        root
    );
}
