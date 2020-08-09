import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
import "./Header.css";

type HeaderProps = {};

const variants = {
  hidden: { opacity: 0, transition: { duration: 0.2 } },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const Header: React.FC<HeaderProps> = () => {
  const [hovered, setHovered] = useState<string | false>(false);
  const clearHover = () => setHovered(false);
  // const handleScrollToIcons = () => {};

  return (
    <header>
      <motion.div
        className="image-container"
        variants={variants}
        initial="visible"
        // animate="visible"
        transition={{ duration: 2 }}
      >
        <img src={markerPurple} id="marker-purple" />
        <img src={paperclips} id="paperclips" />
        <AnimatePresence>
          {hovered === "tablet" ? (
            <motion.img
              id="tablet"
              key="tablet-spec"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              // onHoverStart={() => setHovered("tablet")}
              onHoverEnd={clearHover}
              src={tabletSpec}
            />
          ) : (
            <motion.img
              id="tablet"
              key="tablet"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              onHoverStart={() => setHovered("tablet")}
              // onHoverEnd={clearHover}
              src={tablet}
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
              variants={variants}
              // onHoverStart={() => setHovered("billiard-ball")}
              onHoverEnd={clearHover}
              src={billiardBallSpec}
            />
          ) : (
            <motion.img
              id="billiard-ball"
              key="billiard-ball"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              onHoverStart={() => setHovered("billiard-ball")}
              // onHoverEnd={clearHover}
              src={billiardBall}
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
              variants={variants}
              // onHoverStart={() => setHovered("warning")}
              onHoverEnd={clearHover}
              src={warningSpec}
            />
          ) : (
            <motion.img
              id="warning"
              key="warning"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              onHoverStart={() => setHovered("warning")}
              // onHoverEnd={clearHover}
              src={warning}
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
              variants={variants}
              // onHoverStart={() => setHovered("cutting-mat")}
              onHoverEnd={clearHover}
              src={cuttingMatSpec}
            />
          ) : (
            <motion.img
              id="cutting-mat"
              key="cutting-mat"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              onHoverStart={() => setHovered("cutting-mat")}
              // onHoverEnd={clearHover}
              src={cuttingMat}
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
              variants={variants}
              // onHoverStart={() => setHovered("receipt")}
              onHoverEnd={clearHover}
              src={receiptSpec}
            />
          ) : (
            <motion.img
              id="receipt"
              key="receipt"
              className="inspectable"
              initial="visible"
              variants={variants}
              onHoverStart={() => setHovered("receipt")}
              // onHoverEnd={clearHover}
              src={receipt}
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
              variants={variants}
              // onHoverStart={() => setHovered("calculator")}
              onHoverEnd={clearHover}
              src={calculatorSpec}
            />
          ) : (
            <motion.img
              id="calculator"
              key="calculator"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              onHoverStart={() => setHovered("calculator")}
              // onHoverEnd={clearHover}
              src={calculator}
            />
          )}
        </AnimatePresence>
        <div className="intro">
          <h2>
            Phosphor Icons is a flexible icon family for interfaces, diagrams,
            presentations – whatever really.
          </h2>
          <div style={{ display: "flex" }}>
            <button className="main-button">Get started</button>

            <button
              className="main-button"
              onClick={() => {
                document
                  .getElementById("toolbar")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Explore icons
            </button>
          </div>
          <div className="links">
            <a
              className="nav-link"
              href="https://github.com/rektdeckard/phosphor-web#phosphor-icons"
            >
              Docs
            </a>
            <a className="nav-link" href="#">
              Download
            </a>
            <a
              className="nav-link"
              href="https://github.com/rektdeckard/phosphor-web/issues"
            >
              Request
            </a>
            <a className="nav-link" href="#">
              Donate
            </a>
            <a
              className="nav-link"
              href="https://github.com/rektdeckard/phosphor-web"
            >
              Github
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
