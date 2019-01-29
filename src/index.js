import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { HashRouter } from "react-router-dom";
import App from "./App";

import objectFitImages from "object-fit-images";


import "./assets/fonts/fonts.css";
import "bootstrap/dist/css/bootstrap.css";

objectFitImages();

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();
