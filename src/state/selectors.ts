import { selector } from "recoil";
import { searchQueryAtom, styleQueryAtom } from "./atoms";
import { iconList } from "../lib/iconList";
import { Icon, IconStyle } from "../lib/Icon";

/**
 * SELECTOR
 * A selector represents a piece of derived state. Derived state is a transformation of state.
 * You can think of derived state as the output of passing state to a pure function that
 * modifies the given state in some way:
 */

const isQueryMatch = (icon: Icon, query: string): boolean => {
  return (
    icon.name.includes(query) ||
    icon.tags.some((tag) => tag.toLowerCase().includes(query)) ||
    icon.categories.some((category) => category.toLowerCase().includes(query))
  );
};

const isStyleMatch = (icon: Icon, style?: IconStyle): boolean => {
  return !style || icon.style === style;
};

export const filteredQueryResultsSelector = selector({
  key: "filteredQueryResultsSelector",
  get: ({ get }) => {
    const query = get(searchQueryAtom).trim().toLowerCase();
    const style = get(styleQueryAtom);

    if (!query && !style) return iconList;

    return iconList.filter((icon) => {
      return isStyleMatch(icon, style) && isQueryMatch(icon, query);
    });
  },
});
