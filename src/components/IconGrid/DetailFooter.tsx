import React, { useRef, useEffect, CSSProperties, useMemo } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { useHotkeys } from "react-hotkeys-hook";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Svg2Png } from "svg2png-converter";
import { saveAs } from "file-saver";
import { Copy, CheckCircle, DownloadSimple, XCircle } from "phosphor-react";
import ReactGA from "react-ga4";

import Tabs, { Tab } from "@/components/Tabs";
import { useMediaQuery, useTransientState, useSessionState } from "@/hooks";
import { SnippetType } from "@/lib";
import {
  iconWeightAtom,
  iconSizeAtom,
  iconColorAtom,
  selectionEntryAtom,
  isDarkThemeSelector,
} from "@/state";
import { getCodeSnippets, supportsWeight } from "@/utils";

import TagCloud from "./TagCloud";

const variants: Record<string, Variants> = {
  desktop: {
    initial: { y: 188 },
    animate: { y: 0 },
    exit: { y: 188 },
  },
  mobile: {
    initial: { y: "60vh" },
    animate: { y: 0 },
    exit: { y: "60vh" },
  },
};

const RENDERED_SNIPPETS = [
  SnippetType.REACT,
  SnippetType.VUE,
  SnippetType.HTML,
  SnippetType.FLUTTER,
  SnippetType.ELM,
];

const buttonColor = "#35313D";
const successColor = "#1FA647";
const disabledColor = "#B7B7B7";

function cloneWithSize(svg: SVGSVGElement, size: number): SVGSVGElement {
  const sized = svg.cloneNode(true) as SVGSVGElement;
  sized.setAttribute("width", `${size}`);
  sized.setAttribute("height", `${size}`);
  return sized;
}

const DetailFooter = () => {
  const [entry, setSelectionEntry] = useRecoilState(selectionEntryAtom);

  const weight = useRecoilValue(iconWeightAtom);
  const size = useRecoilValue(iconSizeAtom);
  const color = useRecoilValue(iconColorAtom);
  const isDark = useRecoilValue(isDarkThemeSelector);
  const [copied, setCopied] = useTransientState<SnippetType | "SVG" | false>(
    false,
    2000
  );
  const ref = useRef<SVGSVGElement>(null);

  const [{ i }, setInitialTab] = useSessionState("tab", { i: 0 });

  const isMobile = useMediaQuery("(max-width: 719px)");

  const [snippets, tabs] = useMemo<
    [Partial<Record<SnippetType, string>>, Tab[]]
  >(() => {
    if (!entry) return [{}, []];

    const snippets = getCodeSnippets({
      displayName: entry?.pascal_name!,
      name: entry.name,
      weight,
      size,
      color,
    });

    const snippetButtonStyle: CSSProperties =
      weight === "duotone"
        ? { color: disabledColor, userSelect: "none" }
        : { color: "currentcolor" };

    const tabs = [
      {
        header: "Tags",
        content: (
          <TagCloud
            name={entry.name}
            tags={Array.from(
              new Set<string>([
                ...entry.categories,
                ...entry.name.split("-"),
                ...entry.tags,
              ])
            )}
          />
        ),
      },
    ].concat(
      RENDERED_SNIPPETS.map((type) => {
        const isWeightSupported = supportsWeight({ type, weight });

        return {
          header: type,
          content: (
            <div className="snippet" key={type}>
              <pre style={isWeightSupported ? undefined : snippetButtonStyle}>
                <span>
                  {isWeightSupported
                    ? snippets[type]
                    : "This weight is not yet supported"}
                </span>
                <button
                  title="Copy snippet"
                  onClick={(e) => handleCopySnippet(e, type)}
                  disabled={!isWeightSupported}
                  style={
                    isWeightSupported
                      ? { color: "currentColor" }
                      : snippetButtonStyle
                  }
                >
                  {copied === type ? (
                    <CheckCircle size={24} color={successColor} weight="fill" />
                  ) : (
                    <Copy
                      size={24}
                      color={
                        isWeightSupported
                          ? "currentColor"
                          : snippetButtonStyle.color
                      }
                      weight="fill"
                    />
                  )}
                </button>
              </pre>
            </div>
          ),
        };
      })
    );

    return [snippets, tabs];
  }, [entry, weight, size, copied, isDark]);

  useHotkeys("esc", () => setSelectionEntry(null));

  useEffect(() => {
    if (!entry) return;
    ReactGA.event({
      category: "Grid",
      action: "Details",
      label: entry.name,
    });
  }, [entry]);

  const buttonBarStyle: CSSProperties = {
    color: isDark ? "white" : buttonColor,
    backgroundColor: "transparent",
  };

  const handleCopySnippet = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: SnippetType
  ) => {
    event.currentTarget.blur();
    if (!entry) return;

    setCopied(type);
    const data = snippets[type];
    data && void navigator.clipboard?.writeText(data);
  };

  const handleCopySVG = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.currentTarget.blur();
    if (!entry) return;
    if (!ref.current) return;

    navigator.clipboard?.writeText(cloneWithSize(ref.current, size).outerHTML);
    setCopied("SVG");
  };

  const handleDownloadSVG = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.currentTarget.blur();
    if (!entry) return;
    if (!ref.current) return;

    const blob = new Blob([cloneWithSize(ref.current, size).outerHTML]);
    saveAs(
      blob,
      `${entry?.name}${weight === "regular" ? "" : `-${weight}`}.svg`
    );
  };

  const handleDownloadPNG = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.currentTarget.blur();
    if (!entry) return;
    if (!ref.current) return;

    Svg2Png.save(
      cloneWithSize(ref.current, size),
      `${entry?.name}${weight === "regular" ? "" : `-${weight}`}.png`
    );
  };

  return (
    <AnimatePresence initial={false}>
      {!!entry && (
        <motion.aside
          initial="initial"
          animate="animate"
          exit="exit"
          variants={isMobile ? variants.mobile : variants.desktop}
          className="secondary detail-footer card"
          transition={isMobile ? { duration: 0.25 } : { duration: 0.1 }}
        >
          <div className="detail-preview">
            <figure>
              <entry.Icon ref={ref} size={64}></entry.Icon>
              <figcaption>
                <p>{entry.name}</p>
                <small className="versioning">
                  available in v{entry.published_in.toFixed(1)}.0+
                </small>
              </figcaption>
            </figure>
            <div className="detail-actions">
              <button
                tabIndex={0}
                style={buttonBarStyle}
                onClick={handleDownloadPNG}
              >
                <DownloadSimple size={24} color="currentColor" weight="fill" />{" "}
                PNG
              </button>
              <button
                tabIndex={0}
                style={buttonBarStyle}
                onClick={handleDownloadSVG}
              >
                <DownloadSimple size={24} color="currentColor" weight="fill" />{" "}
                SVG
              </button>
              <button
                tabIndex={0}
                style={buttonBarStyle}
                onClick={handleCopySVG}
              >
                {copied === "SVG" ? (
                  <CheckCircle size={24} color={successColor} weight="fill" />
                ) : (
                  <Copy size={24} color="currentColor" weight="fill" />
                )}
                {copied === "SVG" ? "Copied!" : " SVG"}
              </button>
            </div>
          </div>

          <Tabs
            tabs={tabs}
            initialIndex={i}
            onTabChange={(i) => setInitialTab({ i })}
          />

          <button
            tabIndex={0}
            className="close-button"
            onClick={() => setSelectionEntry(null)}
            onKeyDown={(e) => {
              e.key === "Enter" && setSelectionEntry(null);
            }}
          >
            <XCircle color="currentColor" size={28} weight="fill" />
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default DetailFooter;
