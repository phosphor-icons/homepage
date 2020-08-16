import { atom } from "recoil";
import { IconStyle } from "../lib";

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
  default: 56,
});

export const iconColorAtom = atom<string>({
  key: "iconColorAtom",
  default: "#000000",
});

export const iconPreviewOpenAtom = atom<string | false>({
  key: "iconPreviewOpenAtom",
  default: false,
});
