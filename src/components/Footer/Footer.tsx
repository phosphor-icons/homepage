import React from "react";
import { Coffee, Heart } from "phosphor-react";

import uArrowUpLeft from "../../assets/u-arrow-up-left.svg";
import markerGreen from "../../assets/marker-green.svg";
import postIt from "../../assets/footer-mobile.svg";
import Links from "../Links/Links";
import "./Footer.css";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="container">
        <a
          id="back-to-top-button"
          aria-label="back-to-top button"
          className="main-button"
          href="#root"
        >
          <img src={uArrowUpLeft} alt="" />
        </a>
        <div className="outro">
          <Links />
          <p>
            We designed the icon library we always wanted to use. Easy to pick
            up and plug in. Truly consistent in style and scale. Flexible to
            multiple sizes and weights. Reserved enough to be multi-purpose, but
            a little quirky, too.
          </p>
          <p>
            We're thankful for the tools we've benefited from and
            this is our contribution towards a collaborative community.
          </p>
          <p>
            Phosphor is free and open-source, licensed under{" "}
            <a
              className="main-link"
              href="https://raw.githubusercontent.com/phosphor-icons/phosphor-home/master/LICENSE"
            >
              MIT
            </a>
            . If you enjoy these icons, please support us with a donation.
          </p>
          <div className="button-container">
            <a
              className="main-button"
              href="https://paypal.me/minoraxis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Coffee size={24} weight="fill" />
              Buy us a coffee
            </a>
            <a
              className="main-button"
              href="https://patreon.com/phosphoricons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart size={24} weight="fill" />
              Become a patron
            </a>
          </div>
          <div className="fine-print">
            <p>
              Phosphor Icons is designed by{" "}
              <a className="main-link" href="https://helenazhang.com">
                Helena Zhang
              </a>{" "}
              and built by{" "}
              <a className="main-link" href="https://tobiasfried.com">
                Toby Fried
              </a>{" "}
              <span
                role="img"
                aria-label="Emoji of woman technologist, man technologist, and cat"
              >
                🙇🏻‍♀️👨‍💻🐈
              </span>
              . Contact us at{" "}
              <a className="main-link" href="mailto:hello@phosphoricons.com">
                hello@phosphoricons.com
              </a>
              . Check out our sister project:{" "}
              <a
                className="main-link"
                href="https://play.google.com/store/apps/details?id=com.tobiasfried.phosphor"
              >
                Phosphor for Android
              </a>
              . Type set in{" "}
              <a className="main-link" href="https://manropefont.com/">
                Manrope
              </a>{" "}
              by Mikhail Sharanda.
            </p>
            <img id="marker-green" src={markerGreen} alt="" />
          </div>
        </div>
        <div className="illustrations-footer">
          <img id="post-it" src={postIt} width="878" height="667" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
