import { ReactNode } from "react";
import { motion } from "framer-motion";
import { HourglassMedium, Question, SmileyXEyes } from "@phosphor-icons/react";

interface NoticeProps {
  message?: ReactNode;
  type?: "wait" | "help" | "warn" | "none";
  children?: ReactNode;
}

const Notice = ({
  message = "An error occurred.",
  type = "warn",
  children,
}: NoticeProps) => {
  return (
    <div className="primary">
      <motion.div
        className="empty-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="empty-list-box">
          {type === "wait" && <HourglassMedium size={128} weight="fill" />}
          {type === "help" && <Question size={128} weight="fill" />}
          {type === "warn" && <SmileyXEyes size={128} weight="fill" />}
          <p>{message}</p>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Notice;
