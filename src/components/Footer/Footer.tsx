import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowULeftUpIcon, CoffeeIcon, HandHeartIcon } from "@phosphor-icons/react";

import Links from "@/components/Links/Links";

import { ReactComponent as RulerMarker } from "@/assets/ruler-marker.svg";
import { ReactComponent as RulerMarkerSpec } from "@/assets/ruler-marker-spec.svg";
import { useMediaQuery } from "@/hooks";
import { useApplicationStore } from "@/state";
import "./Footer.css";

type FooterProps = {};

const variants: Variants = {
  initial: { y: 188 },
  animate: { y: 0 },
  exit: { y: 188 },
};

const Footer = (_: FooterProps) => {
  const isMobile = useMediaQuery("(max-width: 719px)");
  const isViewing = !!useApplicationStore.use.selectionEntry();

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
              <ArrowULeftUpIcon size="1em" />
            </motion.button>
          )}
        </AnimatePresence>
        <div className="outro">
          <Links />
          <p>
            Phosphor is a passion project by{" "}
            <a className="main-link" href="https://helenazhang.com">
              Helena Zhang
            </a>{" "}
            and{" "}
            <a className="main-link" href="https://tobiasfried.com">
              Tobias Fried
            </a>
            .
          </p>
          <p>
            It’s used by companies and creatives like{" "}
            <a className="main-link" href="https://alltrails.com">
              AllTrails
            </a>
            ,{" "}
            <a className="main-link" href="https://www.anthropic.com">
              Anthropic
            </a>
            ,{" "}
            <a className="main-link" href="https://www.babbel.com/">
              Babbel
            </a>
            ,{" "}
            <a
              className="main-link"
              href="https://www.dive.club/course/figma-academy"
            >
              Figma Academy
            </a>
            ,{" "}
            <a className="main-link" href="https://www.framer.com/">
              Framer
            </a>
            ,{" "}
            <a className="main-link" href="https://www.khanacademy.org/">
              Khan Academy
            </a>
            ,{" "}
            <a
              className="main-link"
              href="https://twitter.com/pablostanley/status/1520222483949015041"
            >
              Pablo Stanley
            </a>
            ,{" "}
            <a className="main-link" href="https://qatalog.com/">
              Qatalog
            </a>
            ,{" "}
            <a className="main-link" href="https://remarkable.com/">
              reMarkable
            </a>
            ,{" "}
            <a className="main-link" href="https://www.spacedrive.com/">
              Spacedrive
            </a>
            ,{" "}
            <a className="main-link" href="https://www.stash.com/">
              Stash
            </a>
            , and{" "}
            <a className="main-link" href="https://threads.com/">
              Threads
            </a>
            .
          </p>
          <p>
            Phosphor is free and open-source, licensed under{" "}
            <a
              className="main-link"
              href="https://raw.githubusercontent.com/phosphor-icons/homepage/master/LICENSE"
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
                  "https://www.buymeacoffee.com/phosphoricons",
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              <CoffeeIcon size={24} />
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
              <HandHeartIcon size={24} />
              Become a patron
            </button>
          </div>
          <div className="fine-print">
            <p>
              Type set in{" "}
              <a className="main-link" href="https://www.gent.media/manrope">
                Manrope
              </a>{" "}
              by Mikhail Sharanda and{" "}
              <a className="main-link" href="https://www.ibm.com/plex/">
                IBM Plex Mono
              </a>
              . Contact us at{" "}
              <a className="main-link" href="mailto:hello@phosphoricons.com">
                hello@phosphoricons.com
              </a>{" "}
              <span
                role="img"
                aria-label="Emoji of woman technologist, man technologist, and cat"
              >
                🙇🏻‍♀️👨‍💻🐈
              </span>
            </p>
          </div>
          <div className="illustrations-footer">
            <RulerMarkerSpec className="ruler-marker spec" />
            <RulerMarker className="ruler-marker inspectable xray" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
