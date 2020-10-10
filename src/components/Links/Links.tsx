import React from "react";
import { OutboundLink } from "react-ga";
import { ArrowElbowDownRight } from "phosphor-react";

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
          Download all
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
          Figma library
        </OutboundLink>
      </div>
      <div>
        <ArrowElbowDownRight size={24} />
        <OutboundLink
          className="nav-link"
          to="#"
          eventLabel="Figma plugin"
          style={{ textDecoration: "line-through" }}
        >
          Figma plugin
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
