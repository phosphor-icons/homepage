import { ReactNode } from "react";
import { motion } from "framer-motion";
import { HourglassMediumIcon, QuestionIcon, SmileyXEyesIcon } from "@phosphor-icons/react";

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
          {type === "wait" && <HourglassMediumIcon size={128} weight="fill" />}
          {type === "help" && <QuestionIcon size={128} weight="fill" />}
          {type === "warn" && <SmileyXEyesIcon size={128} weight="fill" />}
          <p>{message}</p>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Notice;
