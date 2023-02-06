import { CSSProperties, ReactNode, useState } from "react";
import { useRecoilValue } from "recoil";

import { isDarkThemeSelector } from "@/state";

import "./Tabs.css";

export type Tab = {
  header: ReactNode;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

type CSSCustomPropertyName = `--${string}`;

type CSSCustomProperties = {
  [property: CSSCustomPropertyName]: string;
};

const colorStyles: Record<string, CSSProperties & CSSCustomProperties> = {
  light: { "--tabs-background": "white" },
  dark: { "--tabs-background": "rgba(194, 186, 196, 0.25)" },
} as const;

const contentStyles: Record<string, CSSProperties> = {
  activeLeft: { borderTopLeftRadius: 0 },
  activeRight: { borderTopRightRadius: 0 },
} as const;

const Tabs = ({ tabs }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isDark = useRecoilValue(isDarkThemeSelector);

  return (
    <div
      className="tabs"
      tabIndex={0}
      style={isDark ? colorStyles.dark : colorStyles.light}
    >
      <div className="tabs-header">
        {tabs.map((tab, i) => (
          <button
            key={i}
            tabIndex={0}
            className={`tab ${activeIndex === i ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
          >
            {tab.header}
          </button>
        ))}
      </div>
      <div
        className="tab-content"
        style={
          activeIndex === 0
            ? contentStyles.activeLeft
            : activeIndex === tabs.length - 1
            ? contentStyles.activeRight
            : undefined
        }
      >
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
};

export default Tabs;
