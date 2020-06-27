import React from "react";
import ReactDOM from "react-dom";

// components
import App from "./App";
import { Globalprovider } from "./context/globalcontext";

// router
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Globalprovider>
    <Router>
      <div>
        <App />
      </div>
    </Router>
  </Globalprovider>,
  rootElement
);
