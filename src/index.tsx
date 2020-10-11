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

console.log(
  `%c

       \\osssssssssss|  %c|+++/:-.
%c      \\ %c\\shhhhhhhhhh|  %c|oooooooo/.
%c      |\\ %c\\shhhhhhhhh|  %c|oooooooooo+-
%c      |y\\ %c\\shhhhhhhh|  %c|oooooooooooo+.
%c      |hy\\ %c\\shhhhhhh|  %c|oooooooooooooo.
%c      |hhy\\ %c\\shhhhhh|  %c|oooooooooooooo+
%c      |hhhy\\ %c\\shhhhh|  %c|ooooooooooooooo.
%c      |hhhhy\\ %c\\shhhh|  %c|ooooooooooooooo:
%c      |hhhhhy\\ %c\\shhh|  %c|ooooooooooooooo:
%c      |hhhhhhy\\ %c\\shh|  %c|ooooooooooooooo.
%c      |hhhhhhhy\\ %c\\sh|  %c|oooooooooooooo:
%c      |hhhhhhhhy\\ %c\\s|  %c|ooooooooooooo/
%c      |hhhhhhhhhy\\ %c\\|  %c|oooooooooooo-
%c      |hhhhhhhhhhy\\    %c|oooooooooo:
%c      |hhhhhhhhhhhy\\   %c|oooooo+:.
%c      |hhhhhhhhhhhhy\\  %c|:+++.'
%c      ''''''''''''''
%c      |+++++++++++++|
      |+++++++++++++|
      :+++++++++++++|
       ./+++++++++++|
        '+++++++++++|
          '-:+++++++|
              '---::|

`,
  "color: #CE93FE;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #CE93FE;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #CE93FE;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #CE93FE;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #CE93FE;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #CE93FE;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #CE93FE;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #CE93FE;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #CE93FE;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #CE93FE;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #CE93FE;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #CE93FE;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #CE93FE;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #925BFF;",
  "color: #F7AC49;",
  "color: #1FA647;"
);
