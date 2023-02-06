import React, { useRef, useEffect, CSSProperties } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useHotkeys } from "react-hotkeys-hook";
import { motion } from "framer-motion";
import { Svg2Png } from "svg2png-converter";
import { saveAs } from "file-saver";
import { Copy, X, CheckCircle, Download } from "phosphor-react";
import ReactGA from "react-ga4";

import { useTransientState } from "@/hooks";
import { IconEntry, SnippetType } from "@/lib";
import {
  iconWeightAtom,
  iconSizeAtom,
  iconColorAtom,
  iconPreviewOpenAtom,
} from "@/state";
import { getCodeSnippets, supportsWeight } from "@/utils";

import TagCloud from "./TagCloud";

const panelVariants = {
  open: {
    opacity: 1,
    height: "100%",
    marginTop: "4px",
    marginBottom: "4px",
    transition: { type: "tween", duration: 0.1 },
  },
  collapsed: {
    opacity: 0,
    height: "0px",
    marginTop: "0px",
    marginBottom: "0px",
    transition: { type: "tween", duration: 0.1 },
  },
};

const contentVariants = {
  open: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
  collapsed: { opacity: 0, transition: { duration: 0 } },
};

const buttonColor = "#35313D";
const successColor = "#1FA647";
const disabledColor = "#B7B7B7";

interface InfoPanelProps {
  index: number;
  spans: number;
  isDark: boolean;
  entry: IconEntry;
}

const renderedSnippets = [
  SnippetType.REACT,
  SnippetType.VUE,
  SnippetType.HTML,
  SnippetType.FLUTTER,
];

const DetailsPanel = (props: InfoPanelProps) => {
  const { index, spans, isDark, entry } = props;
  const { name, Icon, categories, tags } = entry;
  const weight = useRecoilValue(iconWeightAtom);
  const size = useRecoilValue(iconSizeAtom);
  const color = useRecoilValue(iconColorAtom);
  const setOpen = useSetRecoilState(iconPreviewOpenAtom);
  const [copied, setCopied] = useTransientState<SnippetType | "SVG" | false>(
    false,
    2000
  );
  const ref = useRef<SVGSVGElement>(null);

  useHotkeys("esc", () => setOpen(false));

  useEffect(
    () => ReactGA.event({ category: "Grid", action: "Details", label: name }),
    [name]
  );

  const buttonBarStyle: CSSProperties = {
    color: isDark ? "white" : buttonColor,
  };
  const snippetButtonStyle: CSSProperties =
    weight === "duotone"
      ? { color: disabledColor, userSelect: "none" }
      : { color: buttonColor };

  const snippets = getCodeSnippets({
    displayName: Icon.displayName!,
    name,
    weight,
    size,
    color,
  });

  const handleCopySnippet = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: SnippetType
  ) => {
    event.currentTarget.blur();
    setCopied(type);
    const data = snippets[type];
    data && void navigator.clipboard?.writeText(data);
  };

  const handleCopySVG = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.currentTarget.blur();
    setCopied("SVG");
    ref.current && void navigator.clipboard?.writeText(ref.current.outerHTML);
  };

  const handleDownloadSVG = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.currentTarget.blur();
    if (!ref.current?.outerHTML) return;
    const blob = new Blob([ref.current.outerHTML]);
    saveAs(blob, `${name}${weight === "regular" ? "" : `-${weight}`}.svg`);
  };

  const handleDownloadPNG = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.currentTarget.blur();
    if (!ref.current?.outerHTML) return;
    Svg2Png.save(
      ref.current,
      `${name}${weight === "regular" ? "" : `-${weight}`}.png`,
      { scaleX: 2.667, scaleY: 2.667 }
    );
  };

  return (
    <motion.section
      className="info-box"
      animate="open"
      exit="collapsed"
      variants={panelVariants}
      style={{
        order: index + (spans - (index % spans)),
        color: isDark ? "white" : "black",
      }}
    >
      <motion.div
        initial="collapsed"
        animate="open"
        exit="collapsed"
        variants={contentVariants}
        className="icon-preview"
      >
        <Icon ref={ref} color={color} weight={weight} size={192} />
        <p className="name">{name}</p>
        <p className="versioning">in &ge; {entry.published_in.toFixed(1)}.0</p>
        <TagCloud
          name={name}
          tags={Array.from(
            new Set<string>([...categories, ...name.split("-"), ...tags])
          )}
          isDark={isDark}
        />
      </motion.div>

      <motion.div
        initial="collapsed"
        animate="open"
        exit="collapsed"
        variants={contentVariants}
        className="icon-usage"
      >
        {renderedSnippets.map((type) => {
          const isWeightSupported = supportsWeight({ type, weight });

          return (
            <div className="snippet" key={type}>
              {type}
              <pre
                tabIndex={0}
                style={isWeightSupported ? undefined : snippetButtonStyle}
              >
                <span>
                  {isWeightSupported
                    ? snippets[type]
                    : "This weight is not yet supported"}
                </span>
                <button
                  title="Copy snippet"
                  onClick={(e) => handleCopySnippet(e, type)}
                  disabled={!isWeightSupported}
                  style={isWeightSupported ? undefined : snippetButtonStyle}
                >
                  {copied === type ? (
                    <CheckCircle size={24} color={successColor} weight="fill" />
                  ) : (
                    <Copy
                      size={24}
                      color={
                        isWeightSupported
                          ? buttonColor
                          : snippetButtonStyle.color
                      }
                      weight="fill"
                    />
                  )}
                </button>
              </pre>
            </div>
          );
        })}

        <div className="button-row">
          <button style={buttonBarStyle} onClick={handleDownloadPNG}>
            <Download size={32} color="currentColor" weight="fill" /> Download
            PNG
          </button>
          <button style={buttonBarStyle} onClick={handleDownloadSVG}>
            <Download size={32} color="currentColor" weight="fill" /> Download
            SVG
          </button>
          <button style={buttonBarStyle} onClick={handleCopySVG}>
            {copied === "SVG" ? (
              <CheckCircle size={32} color={successColor} weight="fill" />
            ) : (
              <Copy size={32} color="currentColor" weight="fill" />
            )}
            {copied === "SVG" ? "Copied!" : "Copy SVG"}
          </button>
        </div>
      </motion.div>
      <motion.span
        initial="collapsed"
        animate="open"
        exit="collapsed"
        variants={contentVariants}
        title="Close"
      >
        <X
          className="close-icon"
          tabIndex={0}
          color={buttonBarStyle.color}
          size={32}
          weight="fill"
          onClick={() => setOpen(false)}
          onKeyDown={(e) => {
            e.key === "Enter" && setOpen(false);
          }}
        />
      </motion.span>
    </motion.section>
  );
};

export default DetailsPanel;
