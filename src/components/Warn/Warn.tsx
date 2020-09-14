import React from "react";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";

import { isDarkThemeSelector } from "../../state/selectors";
import { searchQueryAtom } from "../../state/atoms";
import { Warning } from "phosphor-react";

interface WarnProps {
  message?: string;
}

const Warn: React.FC<WarnProps> = ({ message }) => {
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
        <Warning size={128} color="currentColor" weight="fill" />
        {message ?? (
          <p>
            No results for '<code>{query}</code>'
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default Warn;
