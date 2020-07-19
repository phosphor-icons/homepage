import React, { useRef, useCallback, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { useVirtual } from "react-virtual";

import { filteredQueryResultsSelector } from "../../state/selectors";
// import { iconColorAtom, iconSizeAtom } from "../../state/atoms";
// import "./IconGridUV.css";

type IconGridProps = {};

const COLUMN_COUNT = 5;

const IconGrid: React.FC<IconGridProps> = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  // const color = useRecoilValue(iconColorAtom);
  // const size = useRecoilValue(iconSizeAtom);
  const filteredQueryResults = useRecoilValue(filteredQueryResultsSelector);
  // const categorizedQueryResults = useRecoilValue(categorizedQueryResultsSelector);
  // console.log(categorizedQueryResults);

  // const rowVirtualizer = useVirtual({
  //   size: useMemo(() => Math.ceil(filteredQueryResults.length / COLUMN_COUNT), [
  //     filteredQueryResults,
  //   ]),
  //   parentRef,
  //   estimateSize: useCallback(() => 220 * COLUMN_COUNT, []),
  // });

  const rowVirtualizer = useVirtual({
    size: useMemo(() => Math.ceil(filteredQueryResults.length / COLUMN_COUNT), [
      filteredQueryResults,
    ]),
    parentRef,
    estimateSize: useCallback(() => 240, []),
    overscan: 5,
  });

  const columnVirtualizer = useVirtual({
    horizontal: true,
    size: COLUMN_COUNT,
    parentRef,
    estimateSize: useCallback(() => 160, []),
  });

  return (
    <>
      <div ref={parentRef} style={{ height: "90vh", width: "100%", overflowY: "auto" }}>
        <div
          style={{
            height: `${rowVirtualizer.totalSize}px`,
            // width: `${columnVirtualizer.totalSize}px`,
            // height: `${rowVirtualizer.totalSize}px`,
            width: "100%",
            position: "relative",
          }}
          className="grid"
        >
          {rowVirtualizer.virtualItems.map((virtualRow) => (
            <React.Fragment key={virtualRow.index}>
              {columnVirtualizer.virtualItems.map((virtualColumn) => (
                <div
                  key={virtualColumn.index}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: `${virtualColumn.size}px`,
                    height: `${virtualRow.size}px`,
                    transform: `translateX(${virtualColumn.start}px) translateY(${virtualRow.start}px)`,
                  }}
                  className="grid-item"
                >
                  {(function () {
                    const icon =
                      filteredQueryResults[
                        virtualRow.index * COLUMN_COUNT + virtualColumn.index
                      ];
                      if (!icon) return null;
                     return (
                       <>
                        {/* <img
                          color={color}
                          style={{ height: size, width: size }}
                          src={icon.asset}
                          alt={`${icon.name} icon`}
                          width="100%"
                        /> */}
                        <p style={{ padding: 16 }}>{icon.name}</p>
                        </>
                    );
                  })()}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default IconGrid;
