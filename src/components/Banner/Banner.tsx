import { ReactNode, Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { XCircleIcon } from "@phosphor-icons/react";
import ReactGA from "react-ga4";

import { useLocalStorage } from "@/hooks";

import "./Banner.css";

type BannerState = {
  seen: Record<string, boolean>;
};

type BannerProps = {
  id: string;
  children?: ReactNode;
  onClose?: (dispatch: Dispatch<SetStateAction<BannerState>>) => void;
};

const variants: Variants = {
  initial: { y: -120 },
  animate: { y: 0 },
  exit: { opacity: 0 },
};

const BANNER_STATE_KEY = "banner_state";

const Banner = ({ id, children, onClose }: BannerProps) => {
  const [
    {
      seen: { [id]: seen },
    },
    setBannerState,
  ] = useLocalStorage<BannerState>(BANNER_STATE_KEY, {
    seen: { [id]: false },
  });

  const handleClose = () => {
    ReactGA.event({
      category: "Banner",
      action: "Dismiss",
      label: id,
    });
    onClose
      ? onClose(setBannerState)
      : setBannerState((state) => ({
        ...state,
        seen: { ...state.seen, [id]: true },
      }));
  };

  return (
    <AnimatePresence initial={true}>
      {!seen && (
        <motion.aside
          className="banner"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
        >
          <div className="banner-content">
            {children}
            <button
              tabIndex={0}
              className="banner-button"
              onClick={handleClose}
              onKeyDown={(e) => {
                e.key === "Enter" && handleClose();
              }}
            >
              <XCircleIcon size={28} weight="regular" />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

Banner.Container = ({ children }: { children: ReactNode }) => {
  return <div className="banner-container">{children}</div>;
};

export default Banner;
