import React from "react";
import { OutboundLink } from "react-ga";
import { useSetRecoilState } from "recoil";
import { ArrowElbowDownRight } from "phosphor-react";

import { iconCount } from "lib/icons";
import { modalSelector } from "state/selectors";
import DonationModal from "components/Modal/DonationModal";

import "./Links.css";

interface LinksProps {}

const Links: React.FC<LinksProps> = () => {
  const openModal = useSetRecoilState(modalSelector);
  const openDonationModal = () => openModal({ type: DonationModal });

  const delayedOpenDonationModal = () => setTimeout(openDonationModal, 2000);

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
          onClick={delayedOpenDonationModal}
        >
          Download all ({iconCount})
        </OutboundLink>
      </div>
      <div>
        <ArrowElbowDownRight size={24} />
        <span>
          <OutboundLink
            className="nav-link"
            to="https://www.figma.com/community/file/903830135544202908/Phosphor-Icons"
            eventLabel="Figma library"
          >
            Figma library
          </OutboundLink>
          {" / "}
          <OutboundLink
            className="nav-link"
            to="https://www.figma.com/community/plugin/898620911119764089/Phosphor-Icons"
            eventLabel="Figma plugin"
          >
            plugin
          </OutboundLink>
        </span>
      </div>
      <div>
        <ArrowElbowDownRight size={24} />
        <a
          className="nav-link"
          href="https://github.com/phosphor-icons/phosphor-home/issues"
        >
          Request an icon
        </a>
      </div>
      <div>
        <ArrowElbowDownRight size={24} />
        <span className="nav-link" onClick={openDonationModal}>
          Donate
        </span>
      </div>
      <div>
        <ArrowElbowDownRight size={24} />
        <a className="nav-link" href="https://patreon.com/phosphoricons">
          Support us on Patreon
        </a>
      </div>
      <div>
        <ArrowElbowDownRight size={24} />
        <a
          className="nav-link"
          href="https://github.com/phosphor-icons/phosphor-home"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Links;
