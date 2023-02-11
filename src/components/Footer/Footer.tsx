import { useRecoilValue } from "recoil";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Coffee, Heart, ArrowULeftUp } from "phosphor-react";

import Links from "@/components/Links/Links";

import { ReactComponent as MarkerGreen } from "@/assets/marker-green.svg";
import { ReactComponent as PostIt } from "@/assets/footer-mobile.svg";
import { useMediaQuery } from "@/hooks";
import { selectionEntryAtom } from "@/state";
import "./Footer.css";

type FooterProps = {};

const variants: Variants = {
  initial: { y: 188 },
  animate: { y: 0 },
  exit: { y: 188 },
};

const Footer = (_: FooterProps) => {
  const isMobile = useMediaQuery("(max-width: 719px)");
  const isViewing = !!useRecoilValue(selectionEntryAtom);

  return (
    <footer>
      <div className="container">
        <AnimatePresence initial={false}>
          {(!isMobile || !isViewing) && (
            <motion.button
              id="back-to-top-button"
              aria-label="back-to-top button"
              className="main-button"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.1 }}
              onClick={() => {
                document
                  .getElementById("root")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <ArrowULeftUp size="1em" />
            </motion.button>
          )}
        </AnimatePresence>
        <div className="outro">
          <Links />
          <p>
            We designed the icon library we always wanted to use. Easy to pick
            up and plug in. Truly consistent in style and scale. Flexible to
            multiple sizes and weights. Reserved enough to be multi-purpose, but
            a little quirky, too.
          </p>
          <p>
            We're thankful for the tools we've benefited from and this is our
            contribution towards a collaborative community.
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
              onClick={() =>
                window.open(
                  "https://patreon.com/phosphoricons",
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              <Heart size={24} weight="fill" />
              Become a patron
            </button>
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
            <MarkerGreen id="marker-green" />
          </div>
        </div>
        <div className="illustrations-footer">
          <PostIt id="post-it" width="878" height="667" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
