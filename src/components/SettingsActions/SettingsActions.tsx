import React from "react";
import { ArrowCounterClockwise, CheckCircle, Link } from "phosphor-react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { iconWeightAtom, iconSizeAtom, iconColorAtom } from "../../state/atoms";
import "./SettingsActions.css";
import useTransientState from "../../hooks/useTransientState";
import { resetSettingsSelector } from "../../state/selectors";

const SettingsActions: React.FC = () => {
  const weight = useRecoilValue(iconWeightAtom);
  const size = useRecoilValue(iconSizeAtom);
  const color = useRecoilValue(iconColorAtom);
  const reset = useResetRecoilState(resetSettingsSelector);

  const [copied, setCopied] = useTransientState<boolean>(false, 2000);

  const copyDeepLinkToClipboard = () => {
    const paramString = new URLSearchParams([
      ["weight", weight.toString()],
      ["size", size.toString()],
      ["color", color.replace("#", "")],
    ]).toString();
    void navigator.clipboard
      ?.writeText(`${window.location.host}?${paramString}`)
      .then(() => {
        setCopied(true);
      })
      .catch(() => {
        alert("Clipboard permissions must be enabled to copy links!");
      });
  };

  return (
    <>
      <button
        className="action-button"
        title="Restore default settings"
        onClick={reset}
      >
        <ArrowCounterClockwise size={24} />
      </button>
      <button
        className="action-button"
        title="Copy URL for current settings"
        onClick={copyDeepLinkToClipboard}
      >
        {copied ? (
          <CheckCircle size={24} color="#1FA647" weight="fill" />
        ) : (
          <Link size={24} />
        )}
      </button>
    </>
  );
};

export default SettingsActions;
