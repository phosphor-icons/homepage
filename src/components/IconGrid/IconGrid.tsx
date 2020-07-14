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
        <div key={`${icon.name}-${icon.style.type.toString()}`} className="grid-item">
          <img
            src="https://i.imgur.com/zaO12Y8m.jpeg"
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
