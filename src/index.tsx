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
  `

%c  sphorphosphor  %co%cspho
%c  s%cphorphosphor  %co%csphorpho%cs
%c o %cp%chorphosphor  %co%csphorphosph%co
%ch%co%cs %ch%corphosphor  %co%csphorphosphor%cp
%ch%cos%cp  %cr%cphosphor  %co%csphorphosphorp%ch
%ch%cosp%ch  %cp%chosphor  %co%csphorphosphorph%co
%ch%cosph%co  %ch%cosphor  %co%csphorphosphorph%co
%ch%cospho%cr  %co%csphor  %co%csphorphosphorph%co
%ch%cosphor%cp  %cs%cphor  %co%csphorphosphorph%co
%ch%cosphorph%co  %ch%cor  %co%csphorphosphorp%ch
%ch%cosphorpho%cs  %co%cr  %co%csphorphosphor%cp
%ch%cosphorphos%cp  %cr  %co%csphorphosph%co
%ch%cosphorphosp%ch    %co%csphorphos%cp
%ch%cosphorphosph%co   %co%cspho%crph
%c osphorphospho%cr
%c o%csphorphospho%cr
%c o%csphorphospho%cr
%c  s%cphorphospho%cr
%c    h%corphospho%cr
%c      r%cphospho%cr
%c          s%cpho%cr

%cThanks for your interest in Phosphor <3
Hire me at https://tobiasfried.com
`,
  "color: #8861A8;",
  "color: #442B78;",
  "color: #5B399F;",
  "color: #8861A8;",
  "color: #CE93FE;",
  "color: #442B78;",
  "color: #925BFF;",
  "color: #442B78;",
  "color: #65461E;",
  "color: #8861A8;",
  "color: #CE93FE;",
  "color: #442B78;",
  "color: #925BFF;",
  "color: #442B78;",
  "color: #65461E;",
  "color: #F7AC49;",
  "color: #65461E;",
  "color: #8861A8;",
  "color: #CE93FE;",
  "color: #442B78;",
  "color: #925BFF;",
  "color: #442B78;",
  "color: #65461E;",
  "color: #F7AC49;",
  "color: #65461E;",
  "color: #8861A8;",
  "color: #CE93FE;",
  "color: #442B78;",
  "color: #925BFF;",
  "color: #442B78;",
  "color: #65461E;",
  "color: #F7AC49;",
  "color: #65461E;",
  "color: #8861A8;",
  "color: #CE93FE;",
  "color: #442B78;",
  "color: #925BFF;",
  "color: #442B78;",
  "color: #65461E;",
  "color: #F7AC49;",
  "color: #65461E;",
  "color: #8861A8;",
  "color: #CE93FE;",
  "color: #442B78;",
  "color: #925BFF;",
  "color: #442B78;",
  "color: #65461E;",
  "color: #F7AC49;",
  "color: #65461E;",
  "color: #8861A8;",
  "color: #CE93FE;",
  "color: #442B78;",
  "color: #925BFF;",
  "color: #442B78;",
  "color: #65461E;",
  "color: #F7AC49;",
  "color: #65461E;",
  "color: #8861A8;",
  "color: #CE93FE;",
  "color: #442B78;",
  "color: #925BFF;",
  "color: #442B78;",
  "color: #65461E;",
  "color: #F7AC49;",
  "color: #65461E;",
  "color: #8861A8;",
  "color: #CE93FE;",
  "color: #442B78;",
  "color: #925BFF;",
  "color: #442B78;",
  "color: #65461E;",
  "color: #F7AC49;",
  "color: #65461E;",
  "color: #8861A8;",
  "color: #CE93FE;",
  "color: #442B78;",
  "color: #925BFF;",
  "color: #442B78;",
  "color: #65461E;",
  "color: #F7AC49;",
  "color: #65461E;",
  "color: #CE93FE;",
  "color: #442B78;",
  "color: #925BFF;",
  "color: #442B78;",
  "color: #65461E;",
  "color: #F7AC49;",
  "color: #65461E;",
  "color: #442B78;",
  "color: #925BFF;",
  "color: #442B78;",
  "color: #65461E;",
  "color: #A17030;",
  "color: #65461E;",
  "color: #442B78;",
  "color: #5B399F;",
  "color: #442B78;",
  "color: #0E481F;",
  "color: #0E481E;",
  "color: #0E481F;",
  "color: #0EA147;",
  "color: #19873A;",
  "color: #0E481F;",
  "color: #0EA147;",
  "color: #19873A;",
  "color: #0E481F;",
  "color: #0EA147;",
  "color: #19873A;",
  "color: #0E481F;",
  "color: #0EA147;",
  "color: #19873A;",
  "color: #0E481F;",
  "color: #0EA147;",
  "color: #19873A;",
  "color: #0E481F;",
  "color: #0EA147;",
  "color: #19873A;",
  "color: #A17030;"
);
