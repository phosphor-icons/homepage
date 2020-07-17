import React from "react";
import { useRecoilValue } from "recoil";
import { Grid } from "react-virtualized";

import { filteredQueryResultsSelector } from "../../state/selectors";
import "./IconGrid.css";

type IconGridProps = {};

const COLUMN_COUNT = 5;

export default class IconGridVirtualized extends React.PureComponent {
  constructor(props: IconGridProps) {
    super(props);
  }
  
  render() {
    const filteredQueryResults = useRecoilValue(filteredQueryResultsSelector);

    const cellRenderer = () => <div></div>

    return (
      <Grid 
        columnCount={COLUMN_COUNT}
        columnWidth={100}
        height={300}
        rowCount={Math.ceil(filteredQueryResults.length / COLUMN_COUNT)}
        rowHeight={220}
        width={300}
        cellRenderer={cellRenderer}
      />
    )
  }
}
