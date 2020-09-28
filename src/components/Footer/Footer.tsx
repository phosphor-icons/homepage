import React, { useState } from "react";
import { motion } from "framer-motion";
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
  const [phoneHovered, setPhoneHovered] = useState<boolean>(false);

  return (
    <footer>
      <div className="container">
        <div className="outro">
          <h2>
            Phosphor is free and open source software. If you enjoy these icons,
            please support us with a donation.
          </h2>
          <button
            className="main-button"
            onClick={() =>
              window.open(
                "https://paypal.me/TobiasFried",
                "_blank",
                "noopener noreferrer"
              )
            }
          >
            <Heart size={24} weight="fill" />
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
              👩🏻‍💻👨‍💻🐈
            </span>
            <br />
            This website is set in{" "}
            <a className="main-link" href="https://manropefont.com/">
              Manrope
            </a>
            <br />
            See also:{" "}
            <a
              className="main-link"
              href="https://play.google.com/store/apps/details?id=com.tobiasfried.phosphor"
            >
              Phosphor for Android
            </a>
          </p>
          <div id="back-to-top">
            <button
              id="back-to-top-button"
              aria-label="back-to-top button"
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
          {phoneHovered && (
            <motion.img
              id="phone"
              className="inspectable"
              variants={variants}
              initial="hidden"
              animate={phoneHovered ? "visible" : "hidden"}
              src={phoneSpec}
              alt=""
            />
          )}
          <motion.img
            id="phone"
            className="inspectable"
            variants={variants}
            initial="visible"
            whileHover="hidden"
            onHoverStart={() => setPhoneHovered(true)}
            onHoverEnd={() => setPhoneHovered(false)}
            src={phone}
            alt=""
          />
          <img
            id="command"
            className="inspectable"
            src={commandKeySpec}
            alt=""
          />
          <motion.img
            id="command"
            className="inspectable"
            variants={variants}
            initial="visible"
            whileHover="hidden"
            src={commandKey}
            alt=""
          />
          <img id="marker-green" src={markerGreen} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
