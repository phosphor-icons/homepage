import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useDebounce } from "react-use";
import { MagnifyingGlass, X, HourglassHigh } from "phosphor-react";
import ReactGA from "react-ga";

import { searchQueryAtom } from "../../state/atoms";
import "./SearchInput.css";

type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = () => {
  const [value, setValue] = useState<string>("");
  const [query, setQuery] = useRecoilState(searchQueryAtom);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    let isMounted = true;
    if (value !== query) {
      isMounted && setValue(query);
      ReactGA.event({ category: "Search", action: "Tag", label: query });
    }
    return () => void (isMounted = false);
  }, [query]);
  /* eslint-enable react-hooks/exhaustive-deps */

  const [isReady] = useDebounce(
    () => {
      if (value !== query) {
        setQuery(value);
        !!value && ReactGA.event({ category: "Search", action: "Query", label: value });
      }
      !!value && void document
        .getElementById("beacon")
        ?.scrollIntoView({ block: "start", behavior: "smooth" });
    },
    250,
    [value]
  );

  const handleCancelSearch = () => {
    setValue("");
    // Should cancel pending debounce timeouts and immediately clear query
    // without causing lag!
    // setQuery("");
  };

  return (
    <div className="search-bar">
      <MagnifyingGlass id="search-icon" size={24} />
      <input
        id="search-input"
        title="Search for icon names, categories, or keywords"
        aria-label="Search for an icon"
        type="text"
        autoCapitalize="off"
        autoComplete="off"
        value={value}
        placeholder="Search"
        onChange={({ currentTarget }) => setValue(currentTarget.value)}
        onKeyPress={({ currentTarget, key }) =>
          key === "Enter" && currentTarget.blur()
        }
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
