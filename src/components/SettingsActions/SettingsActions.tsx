import { useState } from "react";
import ReactGA from "react-ga4";
import { useShallow } from "zustand/react/shallow";
import {
  ArrowCounterClockwiseIcon,
  CheckCircleIcon,
  DiceFiveIcon,
  LinkIcon,
} from "@phosphor-icons/react";
import { IconStyle } from "@phosphor-icons/core";

import { useTransientState } from "@/hooks";
import { useApplicationStore } from "@/state";

import "./SettingsActions.css";

const SettingsActions = () => {
  const { weight, setWeight, setSize, setColor, reset } = useApplicationStore(useShallow((state) => ({
    weight: state.iconWeight,
    setWeight: state.setIconWeight,
    setSize: state.setIconSize,
    setColor: state.setIconColor,
    reset: state.resetApplicationState,
  })));

  const [copied, setCopied] = useTransientState<boolean>(false, 2000);
  const [booped, setBooped] = useState<boolean>(false);

  const copyDeepLinkToClipboard = () => {
    void navigator.clipboard
      ?.writeText(`${window.location.origin}${window.location.search}`)
      .then(() => {
        setCopied(true);
      })
      .catch(() => {
        alert("Clipboard permissions must be enabled to copy links!");
      });
  };

  const randomizeSettings = () => {
    if (booped) setBooped(false);
    setBooped(true);

    const rWeight = Object.values(IconStyle).filter((w) => w !== weight)[
      Math.floor(Math.random() * 5)
    ];
    const rSize = 16 + Math.floor(Math.random() * 20 + 1) * 4;
    const rColor =
      "#" +
      Math.floor(Math.random() * (0xffffff + 1))
        .toString(16)
        .padStart(6, "0");

    setWeight(rWeight);
    setColor(rColor);
    setSize(rSize);

    ReactGA.event({ category: "Settings", action: "Random" });
  };

  return (
    <>
      <button
        className="tool-button"
        title="Restore default settings"
        onClick={reset}
      >
        <ArrowCounterClockwiseIcon size={24} />
      </button>
      <button
        className="tool-button"
        title="Copy URL for current settings"
        onClick={copyDeepLinkToClipboard}
      >
        {copied ? (
          <CheckCircleIcon size={24} color="var(--olive)" weight="fill" />
        ) : (
          <LinkIcon size={24} />
        )}
      </button>
      <button
        className="tool-button"
        title="Randomize"
        onClick={randomizeSettings}
      >
        <span
          className={booped ? "bounce" : ""}
          style={{ display: "flex" }}
          onAnimationEnd={() => setBooped(false)}
        >
          <DiceFiveIcon className={booped ? "spin" : ""} size={24} />
        </span>
      </button>
    </>
  );
};

export default SettingsActions;
