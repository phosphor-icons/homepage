import { atom } from "recoil";
import { ModalInstance } from "../components/Modal/Modal";
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
  default: 48,
});

export const iconColorAtom = atom<string>({
  key: "iconColorAtom",
  default: "#000000",
});

export const iconPreviewOpenAtom = atom<string | false>({
  key: "iconPreviewOpenAtom",
  default: false,
});

export const modalAtom = atom<((props: ModalInstance) => JSX.Element) | null>({
  key: "modalAtom",
  default: null,
});

export const modalOpenAtom = atom<boolean>({
  key: "modalOpenAtom",
  default: false,
});
