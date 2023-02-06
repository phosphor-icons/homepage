import { ReactNode, useState } from "react";

import "./Tabs.css";

export type Tab = {
  header: ReactNode;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs = ({ tabs }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`tab ${activeIndex === i ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
          >
            {tab.header}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeIndex]?.content}</div>
    </div>
  );
};

export default Tabs;
