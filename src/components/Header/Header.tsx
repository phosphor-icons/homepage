import React from "react";
import { ArrowCircleUpRight, ArrowCircleDown } from "phosphor-react";

import markerPurple from "../../assets/marker-purple.svg";
import paperclips from "../../assets/paperclips-header-mobile.svg";
import paperclipsThree from "../../assets/paperclips-header.svg";
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
import Banner from "../Banner/Banner";
import Links from "../Links/Links";
import "./Header.css";

type HeaderProps = {};

const handleGetStarted = () =>
  window.open(
    "https://github.com/phosphor-icons/phosphor-home#phosphor-icons",
    "_blank",
    "noopener noreferrer"
  );

const handleScrollToIcons = () =>
  document
    .getElementById("toolbar")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Banner />
      <header>
        <div className="header-contents">
          <div className="illustrations-top">
            <img src={markerPurple} id="marker-purple" alt="" />
            <img src={paperclips} id="paperclips" alt="" />
            <img src={paperclipsThree} id="paperclips-three" alt="" />
            <img className="tablet" src={tabletSpec} alt="" />
            <img className="tablet inspectable xray" src={tablet} alt="" />
            <img className="billiard-ball" src={billiardBallSpec} alt="" />
            <img
              className="billiard-ball inspectable xray"
              src={billiardBall}
              alt=""
            />

            <img className="warning" src={warningSpec} alt="" />
            <img className="warning inspectable xray" src={warning} alt="" />
          </div>
          <div className="intro">
            <h2>
              Phosphor is a flexible icon family for interfaces, diagrams,
              presentations — 
              <wbr />
              whatever, really.
            </h2>
            <div className="button-container">
              <button className="main-button" onClick={handleGetStarted}>
                <ArrowCircleUpRight size={24} weight="fill" />
                Get started
              </button>
              <button className="main-button" onClick={handleScrollToIcons}>
                <ArrowCircleDown size={24} weight="fill" />
                Explore icons
              </button>
            </div>
            <Links />
          </div>
          <div className="illustrations-bottom">
            <img className="cutting-mat" src={cuttingMatSpec} alt="" />
            <img
              className="cutting-mat inspectable xray"
              src={cuttingMat}
              alt=""
            />
            <img className="receipt" src={receiptSpec} alt="" />
            <img className="receipt inspectable xray" src={receipt} alt="" />
            <img className="calculator" src={calculatorSpec} alt="" />
            <img
              className="calculator inspectable xray"
              src={calculator}
              alt=""
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
