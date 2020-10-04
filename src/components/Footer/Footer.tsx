import React from "react";
import { ArrowElbowDownRight, Coffee, Heart } from "phosphor-react";

import uArrowUpLeft from "../../assets/u-arrow-up-left.svg";
import markerGreen from "../../assets/marker-green.svg";
import postIt from "../../assets/footer-mobile.svg";
import commandKey from "../../assets/command-key.svg";
import commandKeySpec from "../../assets/command-key-spec.svg";
import "./Footer.css";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="container">
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
        <div className="outro">
          <img id="command" src={commandKeySpec} alt="" />
          <img
            id="command"
            className="inspectable xray"
            src={commandKey}
            alt=""
          />
          <div className="links">
            <div>
              <ArrowElbowDownRight size={24} />
              <a
                className="nav-link"
                href="https://phosphoricons.com/assets/phosphor-icons.zip"
                download
              >
                Download all
              </a>
            </div>
            <div>
              <ArrowElbowDownRight size={24} />
              <a className="nav-link" href="#">
                Figma library
              </a>
            </div>
            <div>
              <ArrowElbowDownRight size={24} />
              <a className="nav-link" href="#">
                Figma plugin
              </a>
            </div>
            <div>
              <ArrowElbowDownRight size={24} />
              <a
                className="nav-link"
                href="https://github.com/phosphor-icons/phosphor-web/issues"
              >
                Request an icon
              </a>
            </div>
            <div>
              <ArrowElbowDownRight size={24} />
              <span>
                <a className="nav-link" href="https://paypal.me/minoraxis">
                  Donate on PayPal
                </a>
                {" / "}
                <a className="nav-link" href="#">
                  Patreon
                </a>
              </span>
            </div>
            <div>
              <ArrowElbowDownRight size={24} />
              <a
                className="nav-link"
                href="https://github.com/phosphor-icons/phosphor-web"
              >
                Github
              </a>
            </div>
          </div>
          <p>
            We designed the icon library we always wanted to use. Easy to pick
            up and plug in. Truly consistent in style and scale. Flexible to
            multiple sizes and weights. Reserved enough to be multi-purpose, but
            a little quirky, too.
          </p>
          <p>
            We're thankful for the open-source tools we've benefited from and
            this is our small contribution towards a collaborative digital
            community.
          </p>
          <p>
            Phosphor is licensed under{" "}
            <a
              className="main-link"
              href="https://raw.githubusercontent.com/phosphor-icons/phosphor-web/master/LICENSE"
            >
              MIT
            </a>
            , free to use without attribution. If you enjoy these icons, please
            support us with a donation.
          </p>
          <div className="button-container">
            <button
              className="main-button"
              onClick={() =>
                window.open(
                  "https://paypal.me/minoraxis",
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              <Coffee size={24} weight="fill" />
              Buy us a coffee
            </button>
            <button
              className="main-button"
              onClick={() => window.open("#", "_blank", "noopener noreferrer")}
            >
              <Heart size={24} weight="fill" />
              Become a patron
            </button>
          </div>
          <div className="fine-print">
            <p>
              Copyright © 2020 Phosphor Icons. Phosphor Icons is designed by{" "}
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
