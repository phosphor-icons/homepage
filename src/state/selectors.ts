import { selector, selectorFamily } from "recoil";
import TinyColor from "tinycolor2";
// @ts-ignore
import Fuse from "fuse.js";
import { IconCategory } from "@phosphor-icons/core";

import {
  searchQueryAtom,
  iconWeightAtom,
  iconSizeAtom,
  iconColorAtom,
} from "./atoms";
import { IconEntry } from "@/lib";
import { icons } from "@/lib/icons";

const fuse = new Fuse(icons, {
  keys: [{ name: "name", weight: 4 }, "tags", "categories"],
  threshold: 0.2, // Tweak this to what feels like the right number of results
  // shouldSort: false,
  useExtendedSearch: true,
});

export const filteredQueryResultsSelector = selector<ReadonlyArray<IconEntry>>({
  key: "filteredQueryResults",
  get: ({ get }) => {
    const query = get(searchQueryAtom).trim().toLowerCase();
    if (!query) return icons;

    return new Promise((resolve) =>
      // @ts-ignore
      resolve(fuse.search(query).map((value) => value.item))
    );
  },
});

type CategorizedIcons = Partial<Record<IconCategory, IconEntry[]>>;

export const categorizedQueryResultsSelector = selector<
  Readonly<CategorizedIcons>
>({
  key: "categorizedQueryResults",
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
  ReadonlyArray<IconEntry>,
  IconCategory
>({
  key: "singleCategoryQueryResults",
  get:
    (category: IconCategory) =>
    ({ get }) => {
      const filteredResults = get(filteredQueryResultsSelector);
      return new Promise((resolve) =>
        resolve(
          filteredResults.filter((icon) => icon.categories.includes(category))
        )
      );
    },
});

export const isDarkThemeSelector = selector<boolean>({
  key: "isDarkTheme",
  get: ({ get }) => TinyColor(get(iconColorAtom)).isLight(),
});

export const resetSettingsSelector = selector<null>({
  key: "resetSettings",
  get: () => null,
  set: ({ reset }) => {
    reset(iconWeightAtom);
    reset(iconSizeAtom);
    reset(iconColorAtom);
  },
});
