import React, { useRef } from "react";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";

import { styleQueryAtom, iconSizeAtom, iconColorAtom } from "../../state/atoms";
import { Icon, ArrowUpRightCircle, Copy } from "phosphor-react";

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
  const ref = useRef<SVGSVGElement>(null);

  const htmlString = `<i class="ph-${name}${
    weight === "regular" ? "" : `-${weight}`
  }"></i>`;
  const reactString = `<${Icon.displayName} size={${size}} color="${color}" ${
    weight === "regular" ? "" : `weight="${weight}" `
  }/>`;

  const handleCopySnippet = (data: string) => {
    data && navigator.clipboard.writeText(data);
  };

  const handleDownloadSVG = () => {
    if (!ref.current?.outerHTML) return;
    const blob = new Blob([ref.current.outerHTML]);
    saveAs(blob, `${name}.svg`);
  };

  const handleCopySVG = () => {
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
        backgroundColor: isDark ? "rgb(73, 70, 80)" : "rgb(246, 242, 243)",
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
            {htmlString}
            <button
              title="Copy snippet"
              onClick={() => handleCopySnippet(htmlString)}
            >
              <Copy size={24} color="currentColor" weight="regular" />
            </button>
          </pre>
        </div>
        <div className="snippet">
          React
          <pre style={{ color: "black" }}>
            {reactString}
            <button
              title="Copy snippet"
              onClick={() => handleCopySnippet(reactString)}
            >
              <Copy size={24} color="currentColor" weight="regular" />
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
            <Copy
              size={32}
              style={{ marginRight: 8 }}
              color="currentColor"
              weight="regular"
            />{" "}
            Copy SVG
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default InfoPanel;
