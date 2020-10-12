import React from "react";
import { OutboundLink } from "react-ga";
import { ArrowElbowDownRight } from "phosphor-react";

import { iconCount } from "../../lib/icons";

import "./Links.css";

interface LinksProps {}

const Links: React.FC<LinksProps> = () => {
  return (
    <div className="links">
      <div>
        <ArrowElbowDownRight size={24} />
        <OutboundLink
          className="nav-link"
          to="https://phosphoricons.com/assets/phosphor-icons.zip"
          eventLabel="Download all"
          download
          type="application/zip"
        >
          Download all ({iconCount})
        </OutboundLink>
      </div>
      <div>
        <ArrowElbowDownRight size={24} />
        <OutboundLink
          className="nav-link"
          to="#"
          eventLabel="Figma library"
          style={{ textDecoration: "line-through" }}
        >
          Add Figma library
        </OutboundLink>
      </div>
      <div>
        <ArrowElbowDownRight size={24} />
        <OutboundLink
          className="nav-link"
          to="https://www.figma.com/community/plugin/892854133443228626/Phosphor-Icons"
          eventLabel="Figma plugin"
          style={{ textDecoration: "line-through" }}
        >
          Add Figma plugin
        </OutboundLink>
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
          <a className="nav-link" href="https://patreon.com/phosphoricons">
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
  );
};

export default Links;
