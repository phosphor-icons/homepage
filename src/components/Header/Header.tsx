import React from "react";
import { ArrowCircleUpRight, ArrowCircleDown } from "phosphor-react";

import "./Header.css";
import markerPurple from "../../assets/marker-purple.svg";
import paperclips from "../../assets/paperclips.svg";
import tablet from "../../assets/tablet.svg";
import tabletSpec from "../../assets/tablet-spec.svg";
import billiardBall from "../../assets/billiard-ball.svg";
import billiardBallSpec from "../../assets/billiard-ball-spec.svg";
import warning from "../../assets/warning.svg";
import warningSpec from "../../assets/warning-spec.svg";
import cuttingMat from "../../assets/cutting-mat.svg";
import cuttingMatSpec from "../../assets/cutting-mat-spec.svg";
import receipt from "../../assets/receipt.svg";
import receiptSpec from "../../assets/receipt-spec.svg";
import calculator from "../../assets/calculator.svg";
import calculatorSpec from "../../assets/calculator-spec.svg";

type HeaderProps = {};

const handleGetStarted = () =>
  window.open(
    "https://github.com/phosphor-icons/phosphor-web#phosphor-icons",
    "_blank",
    "noopener noreferrer"
  );

const handleScrollToIcons = () =>
  document
    .getElementById("toolbar")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div className="image-container">
        <img src={markerPurple} id="marker-purple" alt="" />
        <img src={paperclips} id="paperclips" alt="" />
        <div className="intro">
          <h2>
            Phosphor is a flexible icon family for interfaces, presentations — 
            <wbr />
            whatever, really.
          </h2>
          <div className="button-container">
            <button className="main-button" onClick={handleGetStarted}>
              <ArrowCircleUpRight size={24} weight="fill" />
              See the docs
            </button>

            <button className="main-button" onClick={handleScrollToIcons}>
              <ArrowCircleDown size={24} weight="fill" />
              Explore icons
            </button>
          </div>
          <div className="links">
            <a
              className="nav-link"
              href="https://phosphoricons.com/assets/phosphor-icons.zip"
              download
            >
              Download all
            </a>
            <a
              className="nav-link"
              href="https://github.com/phosphor-icons/phosphor-web/issues"
            >
              Request
            </a>
            <a className="nav-link" href="https://paypal.me/minoraxis">
              Donate
            </a>
            <a
              className="nav-link"
              href="https://github.com/phosphor-icons/phosphor-web"
            >
              Github
            </a>
          </div>
          <img id="cutting-mat" src={cuttingMatSpec} alt="" />
          <img
            id="cutting-mat"
            className="inspectable xray"
            src={cuttingMat}
            alt=""
          />
          <img id="receipt" src={receiptSpec} alt="" />
          <img id="receipt" className="inspectable xray" src={receipt} alt="" />
          <img id="calculator" src={calculatorSpec} alt="" />
          <img
            id="calculator"
            className="inspectable xray"
            src={calculator}
            alt=""
          />
        </div>
        <img id="tablet" src={tabletSpec} alt="" />
        <img id="tablet" className="inspectable xray" src={tablet} alt="" />
        <img id="billiard-ball" src={billiardBallSpec} alt="" />
        <img
          id="billiard-ball"
          className="inspectable xray"
          src={billiardBall}
          alt=""
        />

        <img id="warning" src={warningSpec} alt="" />
        <img id="warning" className="inspectable xray" src={warning} alt="" />
      </div>
    </header>
  );
};

export default Header;
