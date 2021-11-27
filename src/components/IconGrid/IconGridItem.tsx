import React, {
  useRef,
  useLayoutEffect,
  useEffect,
  MutableRefObject,
} from "react";
import { useRecoilState } from "recoil";
import { motion, AnimatePresence } from "framer-motion";

import { iconPreviewOpenAtom } from "../../state/atoms";
import DetailsPanel from "./DetailsPanel";
import { IconEntry } from "../../lib";

interface IconGridItemProps {
  index: number;
  spans: number;
  isDark: boolean;
  entry: IconEntry;
  originOffset: MutableRefObject<{ top: number; left: number }>;
}

const transition = { duration: 0.2 };
const originIndex = 0;
const delayPerPixel = 0.0004;

const itemVariants = {
  hidden: { opacity: 0 },
  visible: (delayRef: any) => ({
    opacity: 1,
    transition: { delay: delayRef.current },
  }),
};

const IconGridItem: React.FC<IconGridItemProps> = (props) => {
  const { index, originOffset, entry } = props;
  const { name, Icon } = entry;
  const [open, setOpen] = useRecoilState(iconPreviewOpenAtom);
  const isOpen = open === name;
  const isNew = entry.tags.includes("*new*");
  const isUpdated = entry.tags.includes("*updated*");
  const delayRef = useRef<number>(0);
  const offset = useRef({ top: 0, left: 0 });
  const ref = useRef<any>();

  const handleOpen = () => setOpen(isOpen ? false : name);

  // The measurement for all elements happens in the layoutEffect cycle
  // This ensures that when we calculate distance in the effect cycle
  // all elements have already been measured
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    offset.current = {
      top: element.offsetTop,
      left: element.offsetLeft,
    };

    if (index === originIndex) {
      originOffset.current = offset.current;
    }
  }, [index, originOffset]);

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    delayRef.current = d * delayPerPixel;
  }, [originOffset]);

  return (
    <>
      <motion.div
        className="grid-item"
        key={name}
        ref={ref}
        tabIndex={0}
        style={{
          order: index,
          backgroundColor: isOpen ? "rgba(163, 159, 171, 0.1)" : undefined,
        }}
        custom={delayRef}
        transition={transition}
        variants={itemVariants}
        onKeyPress={(e) => e.key === "Enter" && handleOpen()}
        onClick={handleOpen}
      >
        <Icon />
        <p>
          {name}
          {isNew && <span className="badge new">•</span>}
          {isUpdated && <span className="badge updated">•</span>}
        </p>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && <DetailsPanel {...props} />}
      </AnimatePresence>
    </>
  );
};

export default IconGridItem;
