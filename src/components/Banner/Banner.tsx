import React from "react";
import { Medal } from "phosphor-react";
import ReactGA from "react-ga";

import "./Banner.css";

const Banner = () => {
  const handleClick = () => {
    ReactGA.event({ category: "Outbound", action: "Click", label: "Vote" });
  };

  return (
    <div className="banner">
      The 2022 Figma Community Awards are here!
      <a className="main-button"
        href="https://www.figma.com/community/file/903830135544202908"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <Medal size={24} weight="fill" />
        Vote for Phosphor
      </a>
    </div>
  );
};

export default Banner;
