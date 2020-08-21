import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRightCircle, ArrowDownCircle } from "phosphor-react";

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

const illustrationVariants = {
  hidden: { opacity: 0, transition: { duration: 0.2 } },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const handleGetStarted = () => {
  window.open(
    "https://github.com/phosphor-icons/phosphor-web#phosphor-icons",
    "_blank",
    "noopener noreferrer"
  );
};

const handleScrollToIcons = () => {
  document
    .getElementById("toolbar")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <motion.div
        className="image-container"
        variants={illustrationVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={markerPurple} id="marker-purple" alt="" />
        <img src={paperclips} id="paperclips" alt="" />
        <div className="intro">
          <h2>
            Phosphor Icons is a flexible icon family for interfaces, diagrams,
            presentations — whatever really.
          </h2>
          <div className="button-container">
            <button className="main-button" onClick={handleGetStarted}>
              <ArrowUpRightCircle size={24} weight="fill" />
              Go to docs
            </button>

            <button className="main-button" onClick={handleScrollToIcons}>
              <ArrowDownCircle size={24} weight="fill" />
              Explore icons
            </button>
          </div>
          <div className="links">
            <a className="nav-link" href="#">
              Download all
            </a>
            <a
              className="nav-link"
              href="https://github.com/phosphor-icons/phosphor-web/issues"
            >
              Request
            </a>
            <a className="nav-link" href="https://paypal.me/TobiasFried">
              Donate
            </a>
            <a
              className="nav-link"
              href="https://github.com/phosphor-icons/phosphor-web"
            >
              Github
            </a>
          </div>
          <img
            id="cutting-mat"
            className="inspectable"
            src={cuttingMatSpec}
            alt=""
          />
          <motion.img
            id="cutting-mat"
            className="inspectable"
            variants={illustrationVariants}
            initial="visible"
            whileHover="hidden"
            src={cuttingMat}
            alt=""
          />
          <img id="receipt" className="inspectable" src={receiptSpec} alt="" />
          <motion.img
            id="receipt"
            className="inspectable"
            variants={illustrationVariants}
            initial="visible"
            whileHover="hidden"
            src={receipt}
            alt=""
          />
          <img
            id="calculator"
            className="inspectable"
            src={calculatorSpec}
            alt=""
          />
          <motion.img
            id="calculator"
            className="inspectable"
            variants={illustrationVariants}
            initial="hidden"
            whileHover="hidden"
            src={calculator}
            alt=""
          />
        </div>
        <img id="tablet" className="inspectable" src={tabletSpec} alt="" />
        <motion.img
          id="tablet"
          className="inspectable"
          variants={illustrationVariants}
          initial="hidden"
          whileHover="hidden"
          src={tablet}
          alt=""
        />
        <img
          id="billiard-ball"
          className="inspectable"
          src={billiardBallSpec}
          alt=""
        />
        <motion.img
          id="billiard-ball"
          className="inspectable"
          variants={illustrationVariants}
          initial="hidden"
          whileHover="hidden"
          src={billiardBall}
          alt=""
        />

        <img id="warning" className="inspectable" src={warningSpec} alt="" />
        <motion.img
          id="warning"
          className="inspectable"
          variants={illustrationVariants}
          initial="hidden"
          whileHover="hidden"
          src={warning}
          alt=""
        />
      </motion.div>
    </header>
  );
};

export default Header;
