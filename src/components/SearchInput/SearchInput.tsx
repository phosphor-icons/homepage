import React from "react";
import { useRecoilState } from "recoil";

import { searchQueryAtom } from "../../state/atoms";
import { Search } from "phosphor-react";
import "./SearchInput.css";

type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = () => {
  const [query, setQuery] = useRecoilState(searchQueryAtom);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <div className="search-bar">
      <Search />
      <input
        id="search-input"
        aria-label="Search for an icon"
        type="text"
        value={query}
        placeholder="Search for an icon"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchInput;
