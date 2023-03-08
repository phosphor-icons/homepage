import {
  ArrowCircleUpRight,
  ArrowCircleDown,
  Broadcast,
} from "@phosphor-icons/react";

import Banner from "@/components/Banner";

import { ReactComponent as MarkerPurple } from "@/assets/marker-purple.svg";
import { ReactComponent as PaperClips } from "@/assets/paperclips-header-mobile.svg";
import { ReactComponent as PaperClipsThree } from "@/assets/paperclips-header.svg";
import { ReactComponent as Tablet } from "@/assets/tablet.svg";
import { ReactComponent as TabletSpec } from "@/assets/tablet-spec.svg";
import { ReactComponent as BilliardBall } from "@/assets/billiard-ball.svg";
import { ReactComponent as BilliardBallSpec } from "@/assets/billiard-ball-spec.svg";
import { ReactComponent as Warning } from "@/assets/warning.svg";
import { ReactComponent as WarningSpec } from "@/assets/warning-spec.svg";
import { ReactComponent as CuttingMat } from "@/assets/cutting-mat.svg";
import { ReactComponent as CuttingMatSpec } from "@/assets/cutting-mat-spec.svg";
import { ReactComponent as Receipt } from "@/assets/receipt.svg";
import { ReactComponent as ReceiptSpec } from "@/assets/receipt-spec.svg";
import { ReactComponent as Calculator } from "@/assets/calculator.svg";
import { ReactComponent as CalculatorSpec } from "@/assets/calculator-spec.svg";

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
      <Banner id="2.0">
        <div className="message">
          <Broadcast size={32} weight="fill" />
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
      <div className="header-contents">
        <div className="illustrations-top">
          <MarkerPurple id="marker-purple" />
          <PaperClips id="paperclips" />
          <PaperClipsThree id="paperclips-three" />
          <TabletSpec className="tablet" />
          <Tablet className="tablet inspectable xray" />
          <BilliardBallSpec className="billiard-ball" />
          <BilliardBall className="billiard-ball inspectable xray" />

          <WarningSpec className="warning" />
          <Warning className="warning inspectable xray" />
        </div>
        <div className="intro">
          <h2>
            Phosphor is a flexible icon family for interfaces, diagrams,
            presentations — 
            <wbr />
            whatever, really.
          </h2>
          <div className="button-container">
            <button className="main-button" onClick={handleGetStarted}>
              <ArrowCircleUpRight size={24} weight="fill" />
              Get started
            </button>
            <button className="main-button" onClick={handleScrollToIcons}>
              <ArrowCircleDown size={24} weight="fill" />
              Explore icons
            </button>
          </div>
          <Links />
        </div>
        <div className="illustrations-bottom">
          <CuttingMatSpec className="cutting-mat" />
          <CuttingMat className="cutting-mat inspectable xray" />
          <ReceiptSpec className="receipt" />
          <Receipt className="receipt inspectable xray" />
          <CalculatorSpec className="calculator" />
          <Calculator className="calculator inspectable xray" />
        </div>
      </div>
    </header>
  );
};

export default Header;
