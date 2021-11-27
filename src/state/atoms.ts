import { atom } from "recoil";
import { IconStyle } from "../lib";

export const searchQueryAtom = atom<string>({
  key: "searchQueryAtom",
  default: "",
});

export const iconWeightAtom = atom<IconStyle>({
  key: "iconWeightAtom",
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

export const iconPreviewOpenAtom = atom<string | false>({
  key: "iconPreviewOpenAtom",
  default: false,
});
