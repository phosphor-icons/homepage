import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import ReactGA from "react-ga4";
import ErrorBoundary from "./components/ErrorBoundary";
import Notice from "./components/Notice";

const GA_MEASUREMENT_ID = "G-1C1REQCLFB";
ReactGA.initialize(GA_MEASUREMENT_ID);

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <ErrorBoundary
      fallback={
        <Notice
          message={
            <p>
              An error occurred. Try going{" "}
              <a href={window.location.origin}>home</a>.
            </p>
          }
        />
      }
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);

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
