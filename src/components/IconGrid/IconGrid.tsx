import React, { useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { motion, useAnimation } from "framer-motion";
import { useWindowSize } from "react-use";
import TinyColor from "tinycolor2";
import { IconContext, WarningTriangle } from "phosphor-react";

import {
  styleQueryAtom,
  iconSizeAtom,
  iconColorAtom,
  searchQueryAtom,
} from "../../state/atoms";
import { filteredQueryResultsSelector } from "../../state/selectors";
import GridItem from "./IconGridItem";
import "./IconGrid.css";

type IconGridProps = {};

const IconGridAnimated: React.FC<IconGridProps> = () => {
  const weight = useRecoilValue(styleQueryAtom);
  const size = useRecoilValue(iconSizeAtom);
  const color = useRecoilValue(iconColorAtom);
  const query = useRecoilValue(searchQueryAtom);
  const isDark = TinyColor(color).isLight();

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
      <motion.div
        className="empty-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <WarningTriangle size={92} color="darkmagenta" weight="duotone" />
        <p>{`No results for '${query}'`}</p>
      </motion.div>
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

export default IconGridAnimated;
