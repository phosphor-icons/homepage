import { selector, selectorFamily } from "recoil";

import { searchQueryAtom, styleQueryAtom } from "./atoms";
import { Icon, IconStyle, IconCategory } from "../lib/Icon";
import { iconList } from "../lib/iconList";

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

export const filteredQueryResultsSelector = selector<Icon[]>({
  key: "filteredQueryResultsSelector",
  get: ({ get }) => {
    const query = get(searchQueryAtom).trim().toLowerCase();
    const style = get(styleQueryAtom);

    if (!query && !style) return iconList;

    return iconList.filter((icon) => {
      return isStyleMatch(icon, style) && isQueryMatch(icon, query);
    });
    // .sort(() => Math.floor(Math.random() - 0.5));
  },
});

type CategorizedIcons = {
  [key in IconCategory]?: Icon[];
};

export const categorizedQueryResultsSelector = selector<CategorizedIcons>({
  key: "categorizedQueryResultsSelector",
  get: ({ get }) => {
    const filteredResults = get(filteredQueryResultsSelector);
    return filteredResults.reduce<CategorizedIcons>((acc, curr) => {
      curr.categories.forEach((category) => {
        if (acc[category]) acc[category]?.push(curr);
        else acc[category] = [curr];
      });
      return acc;
    }, {});
  },
});

export const singleCategoryQueryResultsSelector = selectorFamily<Icon[], IconCategory>({
  key: "singleCategoryQueryResultsSelector",
  get: (category: IconCategory) => ({ get }) => {
    const filteredResults = get(filteredQueryResultsSelector);
    return filteredResults.filter((icon) => icon.categories.includes(category));
  },
});
