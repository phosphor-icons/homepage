import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRightCircle } from "phosphor-react";

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
  const [hovered, setHovered] = useState<string | false>(false);
  const clearHover = () => setHovered(false);

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
              <ArrowUpRightCircle size={24} weight="fill" />
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
        </div>
        <AnimatePresence>
          {hovered === "tablet" ? (
            <motion.img
              id="tablet"
              key="tablet-spec"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={illustrationVariants}
              // onHoverStart={() => setHovered("tablet")}
              onHoverEnd={clearHover}
              src={tabletSpec}
              alt=""
            />
          ) : (
            <motion.img
              id="tablet"
              key="tablet"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={illustrationVariants}
              onHoverStart={() => setHovered("tablet")}
              // onHoverEnd={clearHover}
              src={tablet}
              alt=""
            />
          )}
          {hovered === "billiard-ball" ? (
            <motion.img
              id="billiard-ball"
              key="billiard-ball-spec"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={illustrationVariants}
              // onHoverStart={() => setHovered("billiard-ball")}
              onHoverEnd={clearHover}
              src={billiardBallSpec}
              alt=""
            />
          ) : (
            <motion.img
              id="billiard-ball"
              key="billiard-ball"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={illustrationVariants}
              onHoverStart={() => setHovered("billiard-ball")}
              // onHoverEnd={clearHover}
              src={billiardBall}
              alt=""
            />
          )}
          {hovered === "warning" ? (
            <motion.img
              id="warning"
              key="warning-spec"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={illustrationVariants}
              // onHoverStart={() => setHovered("warning")}
              onHoverEnd={clearHover}
              src={warningSpec}
              alt=""
            />
          ) : (
            <motion.img
              id="warning"
              key="warning"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={illustrationVariants}
              onHoverStart={() => setHovered("warning")}
              // onHoverEnd={clearHover}
              src={warning}
              alt=""
            />
          )}
          {hovered === "cutting-mat" ? (
            <motion.img
              id="cutting-mat"
              key="cutting-mat-spec"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={illustrationVariants}
              // onHoverStart={() => setHovered("cutting-mat")}
              onHoverEnd={clearHover}
              src={cuttingMatSpec}
              alt=""
            />
          ) : (
            <motion.img
              id="cutting-mat"
              key="cutting-mat"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={illustrationVariants}
              onHoverStart={() => setHovered("cutting-mat")}
              // onHoverEnd={clearHover}
              src={cuttingMat}
              alt=""
            />
          )}
          {hovered === "receipt" ? (
            <motion.img
              id="receipt"
              key="receipt-spec"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={illustrationVariants}
              // onHoverStart={() => setHovered("receipt")}
              onHoverEnd={clearHover}
              src={receiptSpec}
              alt=""
            />
          ) : (
            <motion.img
              id="receipt"
              key="receipt"
              className="inspectable"
              initial="visible"
              variants={illustrationVariants}
              onHoverStart={() => setHovered("receipt")}
              // onHoverEnd={clearHover}
              src={receipt}
              alt=""
            />
          )}
          {hovered === "calculator" ? (
            <motion.img
              id="calculator"
              key="calculator-spec"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={illustrationVariants}
              // onHoverStart={() => setHovered("calculator")}
              onHoverEnd={clearHover}
              src={calculatorSpec}
              alt=""
            />
          ) : (
            <motion.img
              id="calculator"
              key="calculator"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={illustrationVariants}
              onHoverStart={() => setHovered("calculator")}
              // onHoverEnd={clearHover}
              src={calculator}
              alt=""
            />
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Header;
