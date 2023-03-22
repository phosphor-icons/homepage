import {
  ArrowCircleUpRight,
  ArrowCircleDown,
  MegaphoneSimple,
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
        <Banner id={"2.0.1"}>
          <div className="message">
            <MegaphoneSimple size={32} mirrored />
            <small>
              Phosphor 2.0 is out, with some big updates and some small API
              changes. Check our{" "}
              <a href="https://github.com/phosphor-icons/homepage#readme">
                documentation
              </a>{" "}
              to see what's new!
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
              <ArrowCircleUpRight size={24} />
              Get started
            </button>
            <button className="main-button" onClick={handleScrollToIcons}>
              <ArrowCircleDown size={24} />
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
          <Watch className="watch inspectable xray">
            <foreignObject>
              <span>FOOO</span>
            </foreignObject>
          </Watch>

          <PaperClipsTwo id="paperclips" />
        </div>
      </div>
    </header>
  );
};

export default Header;
