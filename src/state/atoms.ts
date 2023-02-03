import { atom } from "recoil";
import { IconStyle } from "@phosphor-icons/core";
import { IconEntry } from "@/lib";

export const searchQueryAtom = atom<string>({
  key: "searchQuery",
  default: "",
});

export const iconWeightAtom = atom<IconStyle>({
  key: "iconWeight",
  default: IconStyle.REGULAR,
});

export const iconSizeAtom = atom<number>({
  key: "iconSize",
  default: 32,
});

export const iconColorAtom = atom<string>({
  key: "iconColor",
  default: "#000000",
});

export const iconPreviewOpenAtom = atom<string | false>({
  key: "iconPreviewOpen",
  default: false,
});

export const selectionEntryAtom = atom<IconEntry | null>({
  key: "selectionEntry",
  default: null,
});
