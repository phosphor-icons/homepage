import React, { useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";

import {
  styleQueryAtom,
  iconSizeAtom,
  iconColorAtom,
  iconPreviewOpenAtom,
} from "../../state/atoms";
import useTransientState from "../../hooks/useTransientState";
import {
  Icon,
  ArrowUpRightCircle,
  Copy,
  Prohibit,
  CheckCircle,
} from "phosphor-react";

const infoVariants = {
  open: {
    opacity: 1,
    height: 396,
    margin: 4,
    // transition: { stiffness: 600, damping: 32, duration: 0.2 },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    margin: 0,
    // transition: { stiffness: 600, damping: 32, duration: 0.2 },
  },
};

interface InfoPanelProps {
  index: number;
  spans: number;
  isDark: boolean;
  name: string;
  Icon: Icon;
}

const InfoPanel: React.FC<InfoPanelProps> = (props) => {
  const { index, spans, isDark, name, Icon } = props;
  const weight = useRecoilValue(styleQueryAtom);
  const size = useRecoilValue(iconSizeAtom);
  const color = useRecoilValue(iconColorAtom);
  const setOpen = useSetRecoilState(iconPreviewOpenAtom);
  const [copied, setCopied] = useTransientState<string | false>(false, 2000);
  const ref = useRef<SVGSVGElement>(null);

  const snippets = {
    html: `<i class="ph-${name}${
      weight === "regular" ? "" : `-${weight}`
    }"></i>`,
    react: `<${Icon.displayName} size={${size}} ${color !== "#000000" ? `color="${color}" ` : ""}${
      weight === "regular" ? "" : `weight="${weight}" `
    }/>`,
  };

  const handleCopySnippet = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: "html" | "react"
  ) => {
    event.currentTarget.blur();
    setCopied(type);
    const data = snippets[type];
    if (!navigator.clipboard) throw new Error("no clipboard!");
    data && navigator.clipboard.writeText(data);
  };

  const handleDownloadSVG = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.currentTarget.blur();
    if (!ref.current?.outerHTML) return;
    const blob = new Blob([ref.current.outerHTML]);
    saveAs(blob, `${name}.svg`);
  };

  const handleCopySVG = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.currentTarget.blur();
    setCopied("svg");
    ref.current && navigator.clipboard.writeText(ref.current.outerHTML);
  };

  return (
    <motion.section
      className="info-box"
      animate="open"
      exit="collapsed"
      variants={infoVariants}
      style={{
        order: index + (spans - (index % spans)),
        backgroundColor: "rgba(163, 159, 171, 0.1)",
        color: isDark ? "white" : "black",
      }}
    >
      <div className="icon-preview">
        <div>
          <Icon ref={ref} color={color} weight={weight} size={192} />
          <p>{name}</p>
        </div>
      </div>
      <div className="icon-usage">
        <div className="snippet">
          HTML/CSS
          <pre style={{ color: "black" }}>
            {snippets.html}
            <button
              title="Copy snippet"
              onClick={(e) => handleCopySnippet(e, "html")}
            >
              {copied === "html" ? (
                <CheckCircle size={24} color="#1FA647" weight="fill" />
              ) : (
                <Copy size={24} color="currentColor" weight="regular" />
              )}
            </button>
          </pre>
        </div>
        <div className="snippet">
          React
          <pre style={{ color: "black" }}>
            {snippets.react}
            <button
              title="Copy snippet"
              onClick={(e) => handleCopySnippet(e, "react")}
            >
              {copied === "react" ? (
                <CheckCircle size={24} color="#1FA647" weight="fill" />
              ) : (
                <Copy size={24} color="currentColor" weight="regular" />
              )}
            </button>
          </pre>
        </div>
        <div className="button-row">
          <button
            style={{ color: isDark ? "white" : "black" }}
            onClick={handleDownloadSVG}
          >
            <ArrowUpRightCircle
              size={32}
              style={{ marginRight: 8 }}
              color="currentColor"
              weight="regular"
            />{" "}
            Download SVG
          </button>
          <button
            style={{ color: isDark ? "white" : "black" }}
            onClick={handleCopySVG}
          >
            {copied === "svg" ? (
              <CheckCircle
                size={32}
                style={{ marginRight: 8 }}
                color="#1FA647"
                weight="fill"
              />
            ) : (
              <Copy
                size={32}
                style={{ marginRight: 8 }}
                color="currentColor"
                weight="regular"
              />
            )}
            {copied === "svg" ? "Copied!" : "Copy SVG"}
          </button>
        </div>
      </div>
      <div className="close">
        <Prohibit
          className="close-icon"
          color="currentColor"
          size={32}
          weight="regular"
          onClick={() => setOpen(false)}
        />
      </div>
    </motion.section>
  );
};

export default InfoPanel;
