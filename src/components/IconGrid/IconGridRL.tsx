import React from "react";
import { useRecoilValue } from "recoil";
import ReactList from "react-list";

import { filteredQueryResultsSelector } from "../../state/selectors";
import "./IconGrid.css";

type IconGridProps = {};

const IconGridRL: React.FC<IconGridProps> = () => {
  const filteredQueryResults = useRecoilValue(filteredQueryResultsSelector);

  const renderItem = (index: number, key: number | string) => {
    const icon = filteredQueryResults[index];
    return (
      <div key={key} className="grid-item" style={{ width: 120}}>
        <img src={icon.asset} alt={`${icon.name} icon`} width="100%" />
        <div style={{ padding: 16 }}>{icon.name}</div>
      </div>
    );
  };

  return (
    <div style={{ overflow: "auto", maxHeight: 400 }}>
      <ReactList
        itemRenderer={renderItem}
        length={filteredQueryResults.length}
        type="uniform"
      />
    </div>
  );
};

export default IconGridRL;
