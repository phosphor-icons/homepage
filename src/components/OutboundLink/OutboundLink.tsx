import {
  DetailedHTMLProps,
  AnchorHTMLAttributes,
  useCallback,
  MouseEventHandler,
} from "react";
import ReactGA from "react-ga4";
import { UaEventOptions } from "react-ga4/types/ga4";

interface OutboundLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  eventLabel: string;
}

const NEWTAB = "_blank";
const MIDDLECLICK = 1;
const DEFAULT_META: UaEventOptions = {
  category: "Outbound",
  action: "Click",
};

const OutboundLink = ({
  eventLabel,
  target,
  href,
  ...props
}: OutboundLinkProps) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(
    (event) => {
      const eventMeta = { ...DEFAULT_META, label: eventLabel };
      const sameTarget = target !== NEWTAB;
      const normalClick = !(
        event.ctrlKey ||
        event.shiftKey ||
        event.metaKey ||
        event.button === MIDDLECLICK
      );

      if (!!href && sameTarget && normalClick) {
        event.preventDefault();
        ReactGA.event(eventMeta);
        window.location.href = href;
      } else {
        ReactGA.event(eventMeta);
      }
    },
    [href, eventLabel]
  );

  return (
    <a
      {...props}
      href={href}
      onClick={handleClick}
      rel={target === NEWTAB ? "noopener noreferrer" : ""}
      className="nav-link"
    />
  );
};

export default OutboundLink;
