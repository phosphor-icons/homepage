import { selector, selectorFamily } from "recoil";

import { searchQueryAtom, styleQueryAtom } from "./atoms";
import { IconEntry, IconCategory } from "../lib";
import { icons } from "../lib/icons";

/**
 * SELECTOR
 * A selector represents a piece of derived state. Derived state is a transformation of state.
 * You can think of derived state as the output of passing state to a pure function that
 * modifies the given state in some way:
 */

const isQueryMatch = (icon: IconEntry, query: string): boolean => {
  return (
    icon.name.includes(query) ||
    icon.tags.some((tag) => tag.toLowerCase().includes(query)) ||
    icon.categories.some((category) => category.toLowerCase().includes(query))
  );
};

export const filteredQueryResultsSelector = selector<Readonly<IconEntry[]>>({
  key: "filteredQueryResultsSelector",
  get: ({ get }) => {
    const query = get(searchQueryAtom).trim().toLowerCase();
    const style = get(styleQueryAtom);

    if (!query && !style) return icons;

    return icons.filter((icon) => {
      return isQueryMatch(icon, query);
    });
    // .sort(() => Math.floor(Math.random() - 0.5));
  },
});

type CategorizedIcons = Partial<Record<IconCategory, IconEntry[]>>;

export const categorizedQueryResultsSelector = selector<
  Readonly<CategorizedIcons>
>({
  key: "categorizedQueryResultsSelector",
  get: ({ get }) => {
    const filteredResults = get(filteredQueryResultsSelector);
    return filteredResults.reduce<CategorizedIcons>((acc, curr) => {
      curr.categories.forEach((category) => {
        if (!acc[category]) acc[category] = [];
        acc[category]!!.push(curr);
      });
      return acc;
    }, {});
  },
});

export const singleCategoryQueryResultsSelector = selectorFamily<
  Readonly<IconEntry[]>,
  IconCategory
>({
  key: "singleCategoryQueryResultsSelector",
  get: (category: IconCategory) => ({ get }) => {
    const filteredResults = get(filteredQueryResultsSelector);
    return filteredResults.filter((icon) => icon.categories.includes(category));
  },
});
