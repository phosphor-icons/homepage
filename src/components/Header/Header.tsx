import {
  ArrowCircleUpRightIcon,
  ArrowCircleDownIcon,
  MegaphoneSimpleIcon,
  HandHeartIcon,
} from "@phosphor-icons/react";

import Banner from "@/components/Banner";

import { ReactComponent as PhosphorLogo } from "@/assets/phosphor-logo.svg";
import { ReactComponent as PaperClipsTwo } from "@/assets/paperclips-2.svg";
import { ReactComponent as PaperClipsThree } from "@/assets/paperclips-3.svg";
import { ReactComponent as IPad } from "@/assets/ipad.svg";
import { ReactComponent as IPadSpec } from "@/assets/ipad-spec.svg";
import { ReactComponent as Map } from "@/assets/map.svg";
import { ReactComponent as MapSpec } from "@/assets/map-spec.svg";
import { ReactComponent as Synth } from "@/assets/synth.svg";
import { ReactComponent as SynthSpec } from "@/assets/synth-spec.svg";

import { Watch, WatchSpec } from "./dynamic/Watch";

import Links from "@/components/Links";
import "./Header.css";

type HeaderProps = {};

const handleGetStarted = () =>
  window.open(
    "https://github.com/phosphor-icons/homepage#phosphor-icons",
    "_blank",
    "noopener noreferrer"
  );

const handleScrollToIcons = () =>
  document
    .getElementById("toolbar")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

const Header = (_: HeaderProps) => {
  return (
    <header>
      <Banner.Container>
        <Banner id={"rename-notice"}>
          <div className="message">
            <MegaphoneSimpleIcon size={32} mirrored />
            <small>
              Some packages may be renaming icons in coming versions, and deprecating older names. Existing names will continue to work, but we recommend upgrading at your convenience. See{" "}
              <a href="https://github.com/phosphor-icons/react/releases/tag/v2.1.8">
                release notes
              </a>{" "}
              for details.
            </small>
          </div>
        </Banner>
        <Banner id={"buymeacoffee2"}>
          <div className="message">
            <HandHeartIcon size={32} mirrored />
            <small>
              We are now processing donations via{" "}
              <a href="https://www.buymeacoffee.com/phosphoricons">
                Buy Me a Coffee
              </a>{", "}
              <a href="https://ko-fi.com/phosphoricons">
                Ko-fi
              </a>{", and "}
              <a href="https://opencollective.com/phosphoricons">
                Open Collective
              </a>
              ! Your one-time or recurring contribution does a lot to keep us
              going. Please show us some support if you can!
            </small>
          </div>
        </Banner>
      </Banner.Container>
      <div className="header-contents">
        <div className="illustrations-top">
          <PhosphorLogo id="logo" />

          <PaperClipsThree id="paperclips-three" />

          <IPadSpec className="ipad" />
          <IPad className="ipad inspectable xray" />
        </div>
        <div className="intro">
          <h2>
            Phosphor is a flexible icon family for interfaces, diagrams,
            presentations — whatever, really.
          </h2>
          <div className="button-container">
            <button className="main-button" onClick={handleGetStarted}>
              <ArrowCircleUpRightIcon size={24} />
              Get started
            </button>
            <button className="main-button" onClick={handleScrollToIcons}>
              <ArrowCircleDownIcon size={24} />
              Explore icons
            </button>
          </div>
          <Links />
        </div>
        <div className="illustrations-bottom">
          <MapSpec className="map" />
          <Map className="map inspectable xray" />

          <SynthSpec className="synth" />
          <Synth className="synth inspectable xray" />

          <WatchSpec className="watch" />
          <Watch className="watch inspectable xray" />

          <PaperClipsTwo id="paperclips" />
        </div>
      </div>
    </header>
  );
};

export default Header;
