import React from "react";

import { Droid } from "phosphor-react";
import "./Footer.css";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <span role="img" aria-label="Emoji of female technologist, male technologist, and cat">👩🏻‍💻👨🏻‍💻🐱</span>
      <div>Copyright © 2020 Phosphor Icons</div>
      <div>
        Phosphor Icons is designed by{" "}
        <a href="https://helenazhang.com">Helena Zhang</a> & built by{" "}
        <a href="https://tobiasfried.com">Tobias Fried</a>, with love.
      </div>
      <button style={{ display: "flex", alignItems: "center", padding: 8 }}>Phosphor for <Droid /></button>
    </footer>
  );
};

export default Footer;
