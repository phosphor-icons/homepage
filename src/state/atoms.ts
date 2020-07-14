import { atom } from "recoil";
import { IconFillStyle } from "../lib/Icon";

/**
 * ATOM
 * An atom represents a piece of state. Atoms can be read from and written to from any component.
 * Components that read the value of an atom are implicitly subscribed to that atom, so any atom
 * updates will result in a re-render of all components subscribed to that atom:
 */

export type IconStyleQuery = IconFillStyle | null | undefined;

export const searchQueryAtom = atom<string>({
  key: "searchQueryAtom",
  default: "",
});

export const styleQueryAtom = atom<IconStyleQuery>({
  key: "styleQueryAtom",
  default: undefined,
});
