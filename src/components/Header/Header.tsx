import React from "react";
import { motion } from "framer-motion";

import markerPurple from "../../assets/marker-purple.svg";
import tablet from "../../assets/tablet.svg";
import billiardBall from "../../assets/billiard-ball.svg";
import warning from "../../assets/warning.svg";
import paperclips from "../../assets/paperclips.svg";
import cuttingMat from "../../assets/cutting-mat.svg";
import receipt from "../../assets/receipt.svg";
import calculator from "../../assets/calculator.svg";
import "./Header.css";

type HeaderProps = {};

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <motion.div
        className="image-container"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
      >
        {/* <MarkerPurple id="marker-purple" /> */}
        {/* <Tablet id="tablet" /> */}
        <img src={tablet} id="tablet" />
        <img src={markerPurple} id="marker-purple" />
        <img src={billiardBall} id="billiard-ball" />
        <img src={warning} id="warning" />
        <img src={paperclips} id="paperclips" />
        <img src={cuttingMat} id="cutting-mat" />
        <img src={receipt} id="receipt" />
        <img src={calculator} id="calculator" />
      </motion.div>
    </header>
  );
};

export default Header;
