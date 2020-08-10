import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "phosphor-react";

import uArrowUpLeft from "../../assets/u-arrow-up-left.svg";
import markerGreen from "../../assets/marker-green.svg";
import phone from "../../assets/phone.svg";
import phoneSpec from "../../assets/phone-spec.svg";
import commandKey from "../../assets/command-key.svg";
import commandKeySpec from "../../assets/command-key-spec.svg";
import "./Footer.css";

type FooterProps = {};

const variants = {
  hidden: { opacity: 0, transition: { duration: 0.2 } },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const Footer: React.FC<FooterProps> = () => {
  const [hovered, setHovered] = useState<string | false>(false);
  const clearHover = () => setHovered(false);

  return (
    <footer>
      <div className="outro-container">
        <div className="outro">
          <h2>
            Phosphor is free and open source software. If you enjoy these icons,
            please consider supporting us with a donation.
          </h2>
          <button
            className="main-button"
            onClick={(e) => e.currentTarget.blur()}
          >
            <Heart size={24} weight="fill" style={{ marginRight: 12 }} />
            Buy us a coffee
          </button>
          <p className="fine-print">
            Copyright © 2020 Phosphor Icons
            <br />
            Designed by{" "}
            <a className="main-link" href="https://helenazhang.com">
              Helena Zhang
            </a>{" "}
            + built by{" "}
            <a className="main-link" href="https://tobiasfried.com">
              Tobias Fried
            </a>{" "}
            <span
              role="img"
              aria-label="Emoji of woman technologist, man technologist, and cat"
            >
              👩🏻‍💻👨‍💻🐱
            </span>
            <br />
            This website is set in{" "}
            <a className="main-link" href="https://manropefont.com/">
              Manrope
            </a>{" "}
            by{" "}
            <a className="main-link" href="https://gent.media/">
              Mikhail Sharanda
            </a>
            .
            <br />
            See also:{" "}
            <a
              className="main-link"
              href="https://play.google.com/store/apps/details?id=com.tobiasfried.phosphor"
            >
              Phosphor for Android
            </a>
          </p>
        </div>
        <div id="back-to-top">
          <button
            id="back-to-top-button"
            className="main-button"
            onClick={() => {
              document
                .getElementById("root")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <img src={uArrowUpLeft} alt="" />
          </button>
        </div>
        <img id="marker-green" src={markerGreen} alt="" />
        <AnimatePresence>
          {hovered === "phone" ? (
            <motion.img
              id="phone"
              key="phone-spec"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              // onHoverStart={() => setHovered("phone")}
              onHoverEnd={clearHover}
              src={phoneSpec}
            />
          ) : (
            <motion.img
              id="phone"
              key="phone"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              onHoverStart={() => setHovered("phone")}
              // onHoverEnd={clearHover}
              src={phone}
            />
          )}
          {hovered === "command" ? (
            <motion.img
              id="command"
              key="command-spec"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              // onHoverStart={() => setHovered("command")}
              onHoverEnd={clearHover}
              src={commandKeySpec}
            />
          ) : (
            <motion.img
              id="command"
              key="command"
              className="inspectable"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              onHoverStart={() => setHovered("command")}
              // onHoverEnd={clearHover}
              src={commandKey}
            />
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
};

export default Footer;
