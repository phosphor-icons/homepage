import React from "react";
import { useRecoilValue } from "recoil";

import { filteredQueryResultsSelector } from "../../state/selectors";
import "./IconGrid.css";

type IconGridProps = {};

const IconGrid: React.FC<IconGridProps> = () => {
  const filteredQueryResults = useRecoilValue(filteredQueryResultsSelector);

  return (
    <div className="grid">
      {filteredQueryResults.map((icon) => (
        <div key={`ph-${icon.name}-${icon.style}`} className="grid-item">
          <img
            src={icon.asset}
            alt={`${icon.name} icon`}
            width="100%"
          />
          <div style={{ padding: 16 }}>{icon.name}</div>
        </div>
      ))}
    </div>
  );
};

export default IconGrid;
