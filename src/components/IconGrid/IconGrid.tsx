import React from "react";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";

import { filteredQueryResultsSelector } from "../../state/selectors";
import { iconColorAtom, iconSizeAtom, styleQueryAtom } from "../../state/atoms";
import "./IconGrid.css";

type IconGridProps = {};

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// }

const whileHover = {
  boxShadow: "0 0 0 2px rgb(0, 0, 0)",
  // scale: 1.2,
};

const transition = { duration: 0.2 };

const IconGrid: React.FC<IconGridProps> = () => {
  const weight = useRecoilValue(styleQueryAtom);
  const color = useRecoilValue(iconColorAtom);
  const size = useRecoilValue(iconSizeAtom);
  const filteredQueryResults = useRecoilValue(filteredQueryResultsSelector);

  return (
    <motion.div className="grid">
      {filteredQueryResults.map(({ name, Icon }) => (
        <motion.div
          key={name}
          className="grid-item"
          whileHover={whileHover}
          transition={transition}
        >
          <Icon color={color} size={size} weight={weight} />
          <p>{name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default IconGrid;
