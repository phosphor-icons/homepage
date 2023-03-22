import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  HTMLAttributes,
} from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { useHotkeys } from "react-hotkeys-hook";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Svg2Png } from "svg2png-converter";
import { saveAs } from "file-saver";
import {
  Copy,
  CheckCircle,
  ArrowFatLinesDown,
  XCircle,
  CaretDoubleLeft,
  CaretDoubleRight,
} from "@phosphor-icons/react";
import ReactGA from "react-ga4";

import Tabs, { Tab } from "@/components/Tabs";
import { useMediaQuery, useTransientState, useSessionStorage } from "@/hooks";
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
  SnippetType.HTML,
  SnippetType.VUE,
  SnippetType.FLUTTER,
  SnippetType.ELM,
];

enum CopyType {
  SVG,
  SVG_RAW,
  SVG_DATA,
  PNG,
  PNG_DATA,
}

function cloneWithSize(svg: SVGSVGElement, size: number): SVGSVGElement {
  const sized = svg.cloneNode(true) as SVGSVGElement;
  sized.setAttribute("width", `${size}`);
  sized.setAttribute("height", `${size}`);
  return sized;
}

const ActionButton = (
  props: {
    active?: boolean;
    label: string;
    download?: boolean;
  } & HTMLAttributes<HTMLButtonElement>
) => {
  const { active, download, label, ...rest } = props;
  const Icon = download ? ArrowFatLinesDown : Copy;
  return (
    <button {...rest} className="action-button text" tabIndex={0}>
      {active ? (
        <CheckCircle size={20} color="var(--olive)" weight="fill" />
      ) : (
        <Icon size={20} color="currentColor" weight="fill" />
      )}
      {label}
    </button>
  );
};

const Panel = () => {
  const [entry, setSelectionEntry] = useRecoilState(selectionEntryAtom);

  const weight = useRecoilValue(iconWeightAtom);
  const size = useRecoilValue(iconSizeAtom);
  const color = useRecoilValue(iconColorAtom);
  const isDark = useRecoilValue(isDarkThemeSelector);
  const [copied, setCopied] = useTransientState<SnippetType | CopyType | false>(
    false,
    2000
  );
  const ref = useRef<SVGSVGElement>(null);

  const [showMoreActions, setShowMoreActions] = useState<boolean>(false);

  const [i, setInitialTab] = useSessionStorage("tab", 0);

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

    const tabs = [
      {
        header: "Tags",
        content: (
          <TagCloud
            name={entry.name}
            tags={Array.from(
              new Set<string>([
                ...entry.tags,
                ...entry.categories,
                ...entry.name.split("-"),
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
              <pre className={!isWeightSupported ? "disabled" : undefined}>
                <span className={!isWeightSupported ? "disabled" : undefined}>
                  {isWeightSupported
                    ? snippets[type]
                    : "This weight is not yet supported"}
                </span>
                {isWeightSupported && (
                  <button
                    title="Copy snippet"
                    className="action-button"
                    onClick={(e) => handleCopySnippet(e, type)}
                  >
                    {copied === type ? (
                      <CheckCircle
                        size={20}
                        color="var(--olive)"
                        weight="fill"
                      />
                    ) : (
                      <Copy size={20} color="var(--foreground)" weight="fill" />
                    )}
                  </button>
                )}
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
    setCopied(CopyType.SVG);
  };

  const handleCopyDataSVG = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.currentTarget.blur();
    if (!entry) return;
    if (!ref.current) return;

    navigator.clipboard?.writeText(
      "data:image/svg+xml;base64," +
        btoa(
          unescape(
            encodeURIComponent(cloneWithSize(ref.current, size).outerHTML)
          )
        )
    );
    setCopied(CopyType.SVG_DATA);
  };

  const handleCopyRawSVG = async () => {
    if (!entry) return;

    const { name } = entry;
    const data = await fetch(
      `https://raw.githubusercontent.com/phosphor-icons/core/main/raw/${weight}/${name}${
        weight === "regular" ? "" : `-${weight}`
      }.svg`
    );
    const content = await data.text();
    navigator.clipboard?.writeText(content);
    setCopied(CopyType.SVG_RAW);
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

  const handleCopyPNG = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.currentTarget.blur();
    if (!entry) return;
    if (!ref.current) return;

    Svg2Png.toDataURL(cloneWithSize(ref.current, size))
      .then((data) => fetch(data))
      .then((res) => res.blob())
      .then((blob) =>
        navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob,
          }),
        ])
      )
      .then(() => {
        setCopied(CopyType.PNG);
      });
  };

  // const handleCopyDataPNG = async (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   event.currentTarget.blur();
  //   if (!entry) return;
  //   if (!ref.current) return;

  //   const data = await Svg2Png.toDataURL(cloneWithSize(ref.current, size));
  //   navigator.clipboard?.writeText(data);
  //   setCopied(CopyType.PNG_DATA);
  // };

  return (
    <AnimatePresence initial={true}>
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
            <hr />
            <div className="detail-meta">
              <div className="detail-actions">
                {!showMoreActions ? (
                  <>
                    <ActionButton
                      label="SVG"
                      title="Download SVG"
                      download
                      onClick={handleDownloadSVG}
                    />

                    <ActionButton
                      label="SVG"
                      title="Copy SVG"
                      active={copied === CopyType.SVG}
                      onClick={handleCopySVG}
                    />

                    <ActionButton
                      label="SVG Raw"
                      title="Copy raw SVG including original strokes"
                      active={copied === CopyType.SVG_RAW}
                      onClick={handleCopyRawSVG}
                    />
                  </>
                ) : (
                  <>
                    <ActionButton
                      label="PNG"
                      title="Download PNG"
                      download
                      onClick={handleDownloadPNG}
                    />

                    <ActionButton
                      label="PNG"
                      title="Copy PNG"
                      active={copied === CopyType.PNG}
                      onClick={handleCopyPNG}
                    />

                    <ActionButton
                      label="Data SVG"
                      title="Copy SVG as DataURL"
                      active={copied === CopyType.SVG_DATA}
                      onClick={handleCopyDataSVG}
                    />
                  </>
                )}
              </div>
              <button
                className="action-button"
                title="More actions"
                tabIndex={0}
                onClick={() => setShowMoreActions((s) => !s)}
              >
                {!showMoreActions ? (
                  <CaretDoubleRight
                    size={16}
                    weight="bold"
                    color="var(--foreground)"
                  />
                ) : (
                  <CaretDoubleLeft
                    size={16}
                    weight="bold"
                    color="var(--foreground)"
                  />
                )}
              </button>
            </div>
          </div>

          <Tabs tabs={tabs} initialIndex={i} onTabChange={setInitialTab} />

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

export default Panel;
