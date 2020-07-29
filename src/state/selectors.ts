import { selector, selectorFamily } from "recoil";

import { searchQueryAtom, styleQueryAtom } from "./atoms";
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
  get: async ({ get }) => {
    const query = get(searchQueryAtom).trim().toLowerCase();
    const style = get(styleQueryAtom);

    if (!query && !style) return icons;

    return await new Promise((resolve) =>
      resolve(icons.filter((icon) => isQueryMatch(icon, query)))
    );
  },
});

type CategorizedIcons = Partial<Record<IconCategory, IconEntry[]>>;

export const categorizedQueryResultsSelector = selector<
  Readonly<CategorizedIcons>
>({
  key: "categorizedQueryResultsSelector",
  get: async ({ get }) => {
    const filteredResults = get(filteredQueryResultsSelector);
    return await new Promise((resolve) =>
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
  get: (category: IconCategory) => async ({ get }) => {
    const filteredResults = get(filteredQueryResultsSelector);
    return await new Promise((resolve) =>
      resolve(
        filteredResults.filter((icon) => icon.categories.includes(category))
      )
    );
  },
});
