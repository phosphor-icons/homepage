import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App/App";
import ReactGA from "react-ga";

ReactGA.initialize("UA-179205759-1", { titleCase: false });
ReactGA.pageview(window.location.pathname);

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
