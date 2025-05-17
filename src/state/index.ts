import Fuse from "fuse.js";
import { create, type UseBoundStore, type StoreApi } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

import TinyColor from "tinycolor2";
import { IconStyle } from "@phosphor-icons/core";
import { type IconEntry, icons } from "@/lib";
import { parseColor, parseQuery, parseSize, parseWeight } from "@/utils";

export const STORAGE_KEY = "__phosphor_settings__";

interface ApplicationFields {
  // Fields
  applicationTheme: ApplicationTheme;
  searchQuery: string;
  iconWeight: IconStyle;
  iconSize: number;
  iconColor: string;
  iconPreviewOpen: string | false;
  selectionEntry: IconEntry | null;
  filteredQueryResults: ReadonlyArray<IconEntry>;
}

interface PersistedApplicationFields {
  searchQuery?: string;
  iconWeight?: IconStyle;
  iconSize?: number;
  iconColor?: string;
}

export interface ApplicationState extends ApplicationFields {
  setSearchQuery: (query: string) => void;
  setIconWeight: (weight: IconStyle) => void;
  setIconSize: (size: number) => void;
  setIconColor: (color: string) => void;
  setIconPreviewOpen: (open: string | false) => void;
  setSelectionEntry: (entry: IconEntry | null) => void;
  resetApplicationState: () => void;
}

export enum ApplicationTheme {
  LIGHT = "light",
  DARK = "dark",
}

const fuse = new Fuse(icons, {
  keys: [{ name: "name", weight: 4 }, "tags", "categories", "codepoint"],
  threshold: 0.2,
  useExtendedSearch: true,
});

const searchParameterStorage: PersistStorage<PersistedApplicationFields> = {
  getItem: (name) => {
    const params = new URLSearchParams(window.location.search);

    let state: PersistedApplicationFields | null = null;
    switch (name) {
      case STORAGE_KEY:
        state = {
          iconWeight: parseWeight(params.get("weight")),
          iconSize: parseSize(params.get("size")),
          iconColor: parseColor(params.get("color")),
          searchQuery: parseQuery(params.get("q")),
        };
        break;
      default:
        break;
    }

    return state === null ? null : { state };
  },
  setItem: (name, value) => {
    if (name === STORAGE_KEY) {
      const params = new URLSearchParams(window.location.search);
      if (value !== null) {
        for (const [k, v] of Object.entries(value.state)) {
          switch (k) {
            case "iconWeight": {
              if (v === IconStyle.REGULAR) {
                params.delete("weight");
              } else {
                params.set("weight", v);
              }
              break;
            }
            case "iconSize": {
              if (v === 32) {
                params.delete("size");
              } else {
                params.set("size", v.toString());
              }
              break;
            }
            case "iconColor": {
              if (v === "#000000") {
                params.delete("color");
              } else {
                params.set("color", v.replace("#", ""));
              }
              break;
            }
            case "searchQuery": {
              if (v === "") {
                params.delete("q");
              } else {
                params.set("q", v);
              }
              break;
            }
            default:
              break;
          }
        }
      }
      if (params.size === 0) {
        window.history.replaceState({}, "", window.location.pathname);
      } else {
        window.history.replaceState(
          {},
          "",
          `${window.location.pathname}?${params.toString()}`
        );
      }
    }
  },
  removeItem: (name) => {
    if (name !== STORAGE_KEY) return;
    const params = new URLSearchParams(window.location.search);
    params.delete("weight");
    params.delete("size");
    params.delete("color");
    params.delete("q");
    if (params.size === 0) {
      window.history.replaceState({}, "", window.location.pathname);
    } else {
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params.toString()}`
      );
    }
  },
};

export const useApplicationStore = createSelectors(
  create<ApplicationState>()(
    persist(
      (set) => {
        return {
          // Fields
          ...initialState(),
          // Actions
          setSearchQuery: (searchQuery: string) => {
            const filteredQueryResults =
              searchQuery.trim() === ""
                ? icons
                : fuse.search(searchQuery).map((value) => value.item);

            set({ searchQuery, filteredQueryResults });
          },
          setIconWeight: (weight: IconStyle) => set({ iconWeight: weight }),
          setIconSize: (size: number) => set({ iconSize: size }),
          setIconColor: (color: string) => {
            const normalizedColor = TinyColor(color);
            if (normalizedColor.isValid()) {
              set({
                iconColor: normalizedColor.toHexString(),
                applicationTheme: normalizedColor.isLight()
                  ? ApplicationTheme.DARK
                  : ApplicationTheme.LIGHT,
              });
            }
          },
          setIconPreviewOpen: (open: string | false) =>
            set({ iconPreviewOpen: open }),
          setSelectionEntry: (entry: IconEntry | null) =>
            set({ selectionEntry: entry }),
          resetApplicationState: () => {
            set({
              applicationTheme: ApplicationTheme.LIGHT,
              iconWeight: IconStyle.REGULAR,
              iconSize: 32,
              iconColor: "#000000",
            });
          },
        };
      },
      {
        name: STORAGE_KEY,
        storage: searchParameterStorage,
        partialize: (state): PersistedApplicationFields => ({
          searchQuery: state.searchQuery,
          iconWeight: state.iconWeight,
          iconSize: state.iconSize,
          iconColor: state.iconColor,
        }),
      }
    )
  )
);

function initialState(): ApplicationFields {
  const params = new URLSearchParams(window.location.search);
  const searchQuery = parseQuery(params.get("q"));
  const iconWeight = parseWeight(params.get("weight"));
  const iconSize = parseSize(params.get("size"));
  const iconColor = parseColor(params.get("color"));

  return {
    applicationTheme: TinyColor(iconColor).isLight()
      ? ApplicationTheme.DARK
      : ApplicationTheme.LIGHT,
    searchQuery,
    iconWeight,
    iconSize,
    iconColor,
    iconPreviewOpen: false,
    selectionEntry: null,
    filteredQueryResults:
      searchQuery.trim() === ""
        ? icons
        : fuse.search(searchQuery).map((value) => value.item),
  };
}

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

function createSelectors<S extends UseBoundStore<StoreApi<object>>>(_store: S) {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
}
