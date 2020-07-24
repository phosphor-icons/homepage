import React, {
  useRef,
  useLayoutEffect,
  useEffect,
  MutableRefObject,
} from "react";
import { useRecoilState } from "recoil";
import { motion, AnimatePresence } from "framer-motion";

import { iconPreviewOpenAtom } from "../../state/atoms";
import { IconProps, Icon } from "phosphor-react";

interface IconGridItemProps extends IconProps {
  index: number;
  name: string;
  Icon: Icon;
  originOffset: MutableRefObject<{ top: number; left: number }>;
  spans: number;
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: (delayRef: any) => ({
    opacity: 1,
    transition: { delay: delayRef.current },
  }),
};
const whileHover = { boxShadow: "0 0 0 2px rgb(0, 0, 0)" };
const whileTap = { boxShadow: "0 0 0 4px rgb(139, 0, 139)" };
const transition = { duration: 0.2 };
const originIndex = 0;
const delayPerPixel = 0.0004;

const infoVariants = {
  open: { opacity: 1, height: 176, marginTop: 4, marginBottom: 4, padding: 16 },
  collapsed: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
  },
};

const IconGridItem: React.FC<IconGridItemProps> = (props) => {
  const { index, spans, originOffset, name, Icon, ...iconProps } = props;
  const [open, setOpen] = useRecoilState(iconPreviewOpenAtom);
  const delayRef = useRef<number>(0);
  const offset = useRef({ top: 0, left: 0 });
  const ref = useRef<any>();

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
  }, []);

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    delayRef.current = d * delayPerPixel;
  }, []);

  return (
    <>
      <motion.div
        className="grid-item"
        ref={ref}
        style={{ order: index }}
        custom={delayRef}
        key={name}
        whileHover={whileHover}
        whileTap={whileTap}
        transition={transition}
        variants={itemVariants}
        onClick={() =>
          setOpen((openName) => (name === openName ? false : name))
        }
      >
        <Icon {...iconProps} />
        <p>{name}</p>
      </motion.div>
      <AnimatePresence initial={false}>
        {open === name && <InfoPanel {...props} />}
      </AnimatePresence>
    </>
  );
};

const InfoPanel: React.FC<IconGridItemProps> = (props) => {
  const { index, spans, name, Icon, color, weight } = props;
  return (
    <motion.section
      className="info-box"
      animate="open"
      exit="collapsed"
      variants={infoVariants}
      style={{ order: index + (spans - (index % spans)) }}
    >
      <div style={{ height: "100%" }}>
        <Icon color={color} weight={weight} size={128} />
        <p>{name}</p>
      </div>
      <div style={{ flex: 1, padding: 32 }}>
        HTML
        <pre>{`<i class="ph-${name}${
          weight === "regular" ? "" : `-${weight}`
        }"></i>`}</pre>
        React
        <pre>{`<${Icon.displayName} ${
          weight === "regular" ? "" : `weight="${weight}"`
        }/>`}</pre>
      </div>
    </motion.section>
  );
};

export default IconGridItem;
