import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const initialData = window.__INITIAL_DATA__;

ReactDOM.hydrate(<App templateData={initialData}/>, document.getElementById("root"));