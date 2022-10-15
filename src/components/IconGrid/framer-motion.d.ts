import { AnimatePresenceProps as AnimatePresencePropsOrigin } from "framer-motion";
import { ReactNode } from "react";

declare module "framer-motion" {
  interface AnimatePresenceProps extends AnimatePresencePropsOrigin {
    children: ReactNode;
  }

  export declare const AnimatePresence: React.FunctionComponent<AnimatePresenceProps>;
}
