import { atom } from "recoil";
import { IconStyle } from "../lib";

/**
 * ATOM
 * An atom represents a piece of state. Atoms can be read from and written to from any component.
 * Components that read the value of an atom are implicitly subscribed to that atom, so any atom
 * updates will result in a re-render of all components subscribed to that atom:
 */

export const searchQueryAtom = atom<string>({
  key: "searchQueryAtom",
  default: "",
});

export const styleQueryAtom = atom<IconStyle>({
  key: "styleQueryAtom",
  default: IconStyle.REGULAR,
});

export const iconSizeAtom = atom<number>({
  key: "iconSizeAtom",
  default: 32,
});

export const iconColorAtom = atom<string>({
  key: "iconColorAtom",
  default: "#000000",
});
