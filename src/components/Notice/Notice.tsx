import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";

import { isDarkThemeSelector } from "../../state/selectors";
import { searchQueryAtom } from "../../state/atoms";
import { HourglassMedium, Question, SmileyXEyes } from "phosphor-react";

interface NoticeProps {
  message?: string;
  type?: "wait" | "help" | "warn" | "none";
  children?: ReactNode;
}

const Notice: React.FC<NoticeProps> = ({
  message,
  type = "warn",
  children,
}) => {
  const isDark = useRecoilValue(isDarkThemeSelector);
  const query = useRecoilValue(searchQueryAtom);

  return (
    <div style={isDark ? { backgroundColor: "#35313D", color: "white" } : {}}>
      <motion.div
        className="empty-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {type === "wait" && (
          <HourglassMedium size={128} color="#615C68" weight="duotone" />
        )}
        {type === "help" && (
          <Question size={128} color="#615C68" weight="duotone" />
        )}
        {type === "warn" && (
          <SmileyXEyes size={128} color="#615C68" weight="duotone" />
        )}
        {message ?? (
          <p>
            No results for "<code>{query}</code>"
          </p>
        )}
        {children}
      </motion.div>
    </div>
  );
};

export default Notice;
