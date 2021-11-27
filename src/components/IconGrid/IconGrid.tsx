import React, { useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { motion, useAnimation } from "framer-motion";
import { IconContext } from "phosphor-react";

import { iconWeightAtom, iconSizeAtom, iconColorAtom } from "../../state/atoms";
import {
  filteredQueryResultsSelector,
  isDarkThemeSelector,
} from "../../state/selectors";
import useGridSpans from "../../hooks/useGridSpans";
import IconGridItem from "./IconGridItem";
import TagCloud from "./TagCloud";
import Notice from "../Notice/Notice";
import "./IconGrid.css";

const defaultSearchTags = [
  "*new*",
  "*updated*",
  "communication",
  "editor",
  "emoji",
  "maps",
  "weather",
];

type IconGridProps = {};

const IconGrid: React.FC<IconGridProps> = () => {
  const weight = useRecoilValue(iconWeightAtom);
  const size = useRecoilValue(iconSizeAtom);
  const color = useRecoilValue(iconColorAtom);
  const isDark = useRecoilValue(isDarkThemeSelector);
  const spans = useGridSpans();

  const filteredQueryResults = useRecoilValue(filteredQueryResultsSelector);

  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls, filteredQueryResults]);

  if (!filteredQueryResults.length)
    return (
      <Notice>
        <span>Try searching a category or keyword:</span>
        <TagCloud name="empty-state" isDark={isDark} tags={defaultSearchTags} />
      </Notice>
    );

  return (
    <IconContext.Provider value={{ weight, size, color, mirrored: false }}>
      <div
        className="grid-container"
        style={{ backgroundColor: isDark ? "#35313D" : "" }}
      >
        <i id="beacon" className="beacon" />
        <motion.div
          className="grid"
          initial="hidden"
          animate={controls}
          variants={{}}
        >
          {filteredQueryResults.map((iconEntry, index) => (
            <IconGridItem
              key={index}
              index={index}
              spans={spans}
              isDark={isDark}
              entry={iconEntry}
              originOffset={originOffset}
            />
          ))}
        </motion.div>
      </div>
    </IconContext.Provider>
  );
};

export default IconGrid;
