import React, { useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { motion, useAnimation } from "framer-motion";
import { useWindowSize } from "react-use";

import { filteredQueryResultsSelector } from "../../state/selectors";
import {
  iconColorAtom,
  iconSizeAtom,
  styleQueryAtom,
  searchQueryAtom,
} from "../../state/atoms";
import "./IconGrid.css";

import GridItem from "./IconGridItem";
import { WarningTriangle, IconProps } from "phosphor-react";

type IconGridProps = {};

const IconGridAnimated: React.FC<IconGridProps> = () => {
  const weight = useRecoilValue(styleQueryAtom);
  const query = useRecoilValue(searchQueryAtom);
  const size = useRecoilValue(iconSizeAtom);
  const color = useRecoilValue(iconColorAtom);
  const iconProps: IconProps = { weight, color, size };

  const { width } = useWindowSize();
  const spans = Math.floor((width - 32) / 172);

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
    <motion.div
      className="grid"
      initial="hidden"
      animate={controls}
      variants={{}}
    >
      {filteredQueryResults.map((iconEntry, i) => (
        <GridItem
          key={i}
          index={i}
          spans={spans}
          {...iconEntry}
          {...iconProps}
          originOffset={originOffset}
        />
      ))}
    </motion.div>
  );
};

export default IconGridAnimated;
