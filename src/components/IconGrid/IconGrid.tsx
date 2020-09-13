import React, { useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { motion, useAnimation } from "framer-motion";
import { useWindowSize } from "react-use";
import { IconContext, Warning } from "phosphor-react";

import {
  iconStyleAtom,
  iconSizeAtom,
  iconColorAtom,
  searchQueryAtom,
} from "../../state/atoms";
import {
  filteredQueryResultsSelector,
  isDarkThemeSelector,
} from "../../state/selectors";
import GridItem from "./IconGridItem";
import "./IconGrid.css";

type IconGridProps = {};

const IconGrid: React.FC<IconGridProps> = () => {
  const weight = useRecoilValue(iconStyleAtom);
  const size = useRecoilValue(iconSizeAtom);
  const color = useRecoilValue(iconColorAtom);
  const query = useRecoilValue(searchQueryAtom);
  const isDark = useRecoilValue(isDarkThemeSelector);

  const { width } = useWindowSize();
  const spans = Math.floor(Math.min(width - 32, 1120) / 168);

  const filteredQueryResults = useRecoilValue(filteredQueryResultsSelector);

  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls, filteredQueryResults]);

  if (!filteredQueryResults.length)
    return (
      <div style={isDark ? { backgroundColor: "#35313D", color: "white" } : {}}>
        <motion.div
          className="empty-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Warning size={128} color="currentColor" weight="fill" />
          <p>
            No results for '<code>{query}</code>'
          </p>
        </motion.div>
      </div>
    );

  return (
    <IconContext.Provider value={{ weight, size, color, mirrored: false }}>
      <div
        className="grid-container"
        style={{ backgroundColor: isDark ? "#35313D" : "" }}
      >
        <motion.div
          className="grid"
          initial="hidden"
          animate={controls}
          variants={{}}
        >
          {filteredQueryResults.map((iconEntry, index) => (
            <GridItem
              key={index}
              index={index}
              spans={spans}
              isDark={isDark}
              {...iconEntry}
              originOffset={originOffset}
            />
          ))}
        </motion.div>
      </div>
    </IconContext.Provider>
  );
};

export default IconGrid;
