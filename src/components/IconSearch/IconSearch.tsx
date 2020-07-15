import React from "react";
import { useRecoilState } from "recoil";

import { searchQueryAtom, styleQueryAtom } from "../../state/atoms";
import { IconStyle } from "../../lib/Icon";

type IconSearchProps = {};

const IconSearch: React.FC<IconSearchProps> = () => {
  const [query, setQuery] = useRecoilState(searchQueryAtom);
  const [style, setStyle] = useRecoilState(styleQueryAtom);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStyle(event.target.value as IconStyle);
  };

  return (
    <>
      <input value={query} onChange={handleSearchChange} />
      <select value={style?.toString()} onChange={handleStyleChange}>
        <option value={""}>All</option>
        <option value={IconStyle.THIN}>Thin</option>
        <option value={IconStyle.LIGHT}>Light</option>
        <option value={IconStyle.REGULAR}>Regular</option>
        <option value={IconStyle.BOLD}>Bold</option>
        <option value={IconStyle.FILL}>Fill</option>
        <option value={IconStyle.DUOTONE}>Duotone</option>
      </select>
    </>
  );
};

export default IconSearch;
