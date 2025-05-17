import {
  useState,
  useEffect,
  useRef,
  MutableRefObject,
  ReactNode,
} from "react";
import { useShallow } from "zustand/react/shallow";
import { useHotkeys } from "react-hotkeys-hook";
import {
  CommandIcon,
  MagnifyingGlassIcon,
  XIcon,
  HourglassHighIcon,
} from "@phosphor-icons/react";
import ReactGA from "react-ga4";

import { useDebounce } from "@/hooks";
import "./SearchInput.css";
import { useApplicationStore } from "@/state";

const apple = /iPhone|iPod|iPad|Macintosh|MacIntel|MacPPC/i;
const isApple = apple.test(window.navigator.platform);

const mobile = /Android|iPhone|iPod|iPad|Opera Mini|IEMobile/i;
const isMobile = mobile.test(window.navigator.userAgent);

type SearchInputProps = {};

const SearchInput = (_: SearchInputProps) => {
  const [value, setValue] = useState<string>("");
  const { query, setQuery } = useApplicationStore(useShallow((state) => ({
    query: state.searchQuery,
    setQuery: state.setSearchQuery,
  })));
  const inputRef =
    useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  useHotkeys("ctrl+k,meta+k", (e) => {
    e.preventDefault();
    if (!e.repeat) {
      inputRef.current?.focus();
      inputRef.current.select();
    }
  });

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

  const [_isReady, _cancel] = useDebounce(
    () => {
      if (value !== query) {
        setQuery(value);
        !!value &&
          ReactGA.event({ category: "Search", action: "Query", label: value });
      }
      !!value &&
        void document
          .getElementById("beacon")
          ?.scrollIntoView({ block: "start", behavior: "smooth" });
    },
    500,
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
      <MagnifyingGlassIcon id="search-icon" size={24} />
      <input
        ref={inputRef}
        id="search-input"
        title="Search for icon names, categories, or keywords"
        aria-label="Search for an icon"
        type="text"
        autoCapitalize="off"
        autoComplete="off"
        value={value}
        placeholder="Search"
        onChange={({ currentTarget }) => setValue(currentTarget.value)}
        onKeyDown={({ currentTarget, key }) =>
          (key === "Enter" || key === "Escape") && currentTarget.blur()
        }
      />
      {!value && !isMobile && <Keys>{isApple ? <CommandIcon /> : "Ctrl + "}K</Keys>}
      {value ? (
        value === query ? (
          <XIcon className="clear-icon" size={18} onClick={handleCancelSearch} />
        ) : (
          <HourglassHighIcon className="wait-icon" weight="fill" size={18} />
        )
      ) : null}
    </div>
  );
};

const Keys = ({ children }: { children?: ReactNode }) => (
  <div className="keys">{children}</div>
);

export default SearchInput;
