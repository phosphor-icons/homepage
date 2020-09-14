import { selector, selectorFamily } from "recoil";
import TinyColor from "tinycolor2";

import { searchQueryAtom, iconStyleAtom, iconColorAtom } from "./atoms";
import { IconEntry, IconCategory } from "../lib";
import { icons } from "../lib/icons";

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
    const style = get(iconStyleAtom);

    if (!query && !style) return icons;

    return new Promise((resolve) =>
      resolve(icons.filter((icon) => isQueryMatch(icon, query)))
    );
  },
});

type CategorizedIcons = Partial<Record<IconCategory, IconEntry[]>>;

export const categorizedQueryResultsSelector = selector<
  Readonly<CategorizedIcons>
>({
  key: "categorizedQueryResultsSelector",
  get: ({ get }) => {
    const filteredResults = get(filteredQueryResultsSelector);
    return new Promise((resolve) =>
      resolve(
        filteredResults.reduce<CategorizedIcons>((acc, curr) => {
          curr.categories.forEach((category) => {
            if (!acc[category]) acc[category] = [];
            acc[category]!!.push(curr);
          });
          return acc;
        }, {})
      )
    );
  },
});

export const singleCategoryQueryResultsSelector = selectorFamily<
  Readonly<IconEntry[]>,
  IconCategory
>({
  key: "singleCategoryQueryResultsSelector",
  get: (category: IconCategory) => ({ get }) => {
    const filteredResults = get(filteredQueryResultsSelector);
    return new Promise((resolve) =>
      resolve(
        filteredResults.filter((icon) => icon.categories.includes(category))
      )
    );
  },
});

export const isDarkThemeSelector = selector<boolean>({
  key: "isDarkThemeSelector",
  get: ({ get }) => TinyColor(get(iconColorAtom)).isLight(),
});
