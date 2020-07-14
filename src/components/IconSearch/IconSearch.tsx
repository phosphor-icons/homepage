import React from "react";
import { useRecoilState } from "recoil";

import { searchQueryAtom, styleQueryAtom } from "../../state/atoms";
import { IconFillStyle } from "../../lib/Icon";

type IconSearchProps = {};

const IconSearch: React.FC<IconSearchProps> = () => {
  const [query, setQuery] = useRecoilState(searchQueryAtom);
  const [style, setStyle] = useRecoilState(styleQueryAtom);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStyle(event.target.value as IconFillStyle);
  };

  return (
    <>
      <input value={query} onChange={handleSearchChange} />
      <select value={style?.toString()} onChange={handleStyleChange}>
        <option value={""}>All</option>
        <option value={IconFillStyle.LINE}>Line</option>
        <option value={IconFillStyle.FILL}>Fill</option>
        <option value={IconFillStyle.DUOTONE}>Duotone</option>
      </select>
    </>
  );
};

export default IconSearch;
