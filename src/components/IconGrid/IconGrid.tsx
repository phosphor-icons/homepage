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
import Warn from "../Warn/Warn";
import "./IconGrid.css";

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

  if (!filteredQueryResults.length) return <Warn />;

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
            <IconGridItem
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
