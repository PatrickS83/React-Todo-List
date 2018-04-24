import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
