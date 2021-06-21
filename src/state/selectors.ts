import { DefaultValue, selector, selectorFamily } from "recoil";
import TinyColor from "tinycolor2";
import Fuse from "fuse.js";

import {
  searchQueryAtom,
  iconColorAtom,
  modalAtom,
  modalOpenAtom,
} from "./atoms";
import { IconEntry, IconCategory } from "../lib";
import { icons } from "../lib/icons";
import { ModalInstance } from "../components/Modal/Modal";

const fuse = new Fuse(icons, {
  keys: [{ name: "name", weight: 4 }, "tags", "categories"],
  threshold: 0.2, // Tweak this to what feels like the right number of results
  // shouldSort: false,
  useExtendedSearch: true,
});

export const filteredQueryResultsSelector = selector<ReadonlyArray<IconEntry>>({
  key: "filteredQueryResultsSelector",
  get: ({ get }) => {
    const query = get(searchQueryAtom).trim().toLowerCase();
    if (!query) return icons;

    return new Promise((resolve) =>
      resolve(fuse.search(query).map((value) => value.item))
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
  ReadonlyArray<IconEntry>,
  IconCategory
>({
  key: "singleCategoryQueryResultsSelector",
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
  key: "isDarkThemeSelector",
  get: ({ get }) => TinyColor(get(iconColorAtom)).isLight(),
});

export const modalSelector = selector<{
  type: (props: ModalInstance) => JSX.Element;
} | null>({
  key: "openModalSelector",
  set: ({ set }, instance) => {
    if (instance instanceof DefaultValue || instance === null) {
      set(modalAtom, null);
      set(modalOpenAtom, false);
      return;
    }

    set(modalAtom, () => instance.type!!);
    set(modalOpenAtom, true);
  },
  get: ({ get }) => {
    const currentModal = get(modalAtom);
    if (!currentModal) return null;
    return { type: currentModal };
  },
});
