import { CSSProperties, ReactNode, useState } from "react";

import "./Tabs.css";

export type Tab = {
  header: ReactNode;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  initialIndex?: number;
  onTabChange?: (index: number) => void;
};

const contentStyles: Record<string, CSSProperties> = {
  activeLeft: { borderTopLeftRadius: 0 },
  activeRight: { borderTopRightRadius: 0 },
} as const;

const Tabs = ({ tabs, initialIndex = 0, onTabChange }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(
    !!tabs[initialIndex] ? initialIndex : 0
  );

  return (
    <div className="secondary tabs" tabIndex={0}>
      <div className="tabs-header">
        {tabs.map((tab, i) => (
          <button
            key={i}
            tabIndex={0}
            className={`tab ${activeIndex === i ? "active" : ""}`}
            onClick={() => {
              setActiveIndex(i);
              onTabChange?.(i);
            }}
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
