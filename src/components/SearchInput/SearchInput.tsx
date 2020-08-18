import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { useDebounce } from "react-use";
import { MagnifyingGlass, X, HourglassHigh } from "phosphor-react";

import { searchQueryAtom } from "../../state/atoms";
import "./SearchInput.css";

type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = () => {
  const [value, setValue] = useState<string>("");
  const [query, setQuery] = useRecoilState(searchQueryAtom);
  void(query);

  const [isReady] = useDebounce(() => setQuery(value), 250, [value]);

  const handleCancelSearch = () => {
    setValue("");
    // Should cancel pending debounce timeouts and immediately clear query
    // without causing lag!
    // setQuery("");
  };

  return (
    <div className="search-bar">
      <MagnifyingGlass size={24} />
      <input
        id="search-input"
        aria-label="Search for an icon"
        type="text"
        autoComplete="off"
        value={value}
        placeholder="Search for an icon"
        onChange={({ currentTarget }) => setValue(currentTarget.value)}
      />
      {value ? (
        isReady() ? (
          <X className="clear-icon" size={18} onClick={handleCancelSearch} />
        ) : (
          <HourglassHigh className="wait-icon" weight="fill" size={18} />
        )
      ) : null}
    </div>
  );
};

export default SearchInput;
