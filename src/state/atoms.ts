import { atom } from "recoil";
import { syncEffect } from "recoil-sync";
import TinyColor from "tinycolor2";
import { custom, stringLiterals } from "@recoiljs/refine";
import { IconStyle } from "@phosphor-icons/core";
import { IconEntry } from "@/lib";

export const searchQueryAtom = atom<string>({
  key: "searchQuery",
  default: "",
  effects: [
    syncEffect({
      itemKey: "q",
      refine: custom((q) => {
        return (q as string).toString() ?? "";
      }),
      syncDefault: false,
    }),
  ],
});

export const iconWeightAtom = atom<IconStyle>({
  key: "iconWeight",
  default: IconStyle.REGULAR,
  effects: [
    syncEffect<IconStyle>({
      itemKey: "weight",
      refine: stringLiterals({
        thin: IconStyle.THIN,
        light: IconStyle.LIGHT,
        regular: IconStyle.REGULAR,
        bold: IconStyle.BOLD,
        fill: IconStyle.FILL,
        duotone: IconStyle.DUOTONE,
      }),
      write: (atom, w) => {
        if (typeof w === "string") {
          atom.write("weight", w);
        } else {
          atom.reset("weight");
        }
      },
      syncDefault: false,
    }),
  ],
});

export const iconSizeAtom = atom<number>({
  key: "iconSize",
  default: 32,
  effects: [
    syncEffect({
      itemKey: "size",
      refine: custom((s) => {
        const size = Number.isFinite(Number(s)) ? Number(s) : 32;
        return Math.min(Math.max(size, 16), 96);
      }),
      syncDefault: false,
    }),
  ],
});

export const iconColorAtom = atom<string>({
  key: "iconColor",
  default: "#000000",
  effects: [
    syncEffect({
      itemKey: "color",
      refine: custom((c) => {
        if (typeof c === "string") {
          const normalizedColor = TinyColor(c);
          if (normalizedColor.isValid()) {
            return normalizedColor.toHexString();
          }
        }
        return "#000000";
      }),
      write: (atom, c) => {
        if (typeof c === "string") {
          const color = c.replace("#", "");
          atom.write("color", color);
        } else {
          atom.reset("color");
        }
      },
      syncDefault: false,
    }),
  ],
});

export const iconPreviewOpenAtom = atom<string | false>({
  key: "iconPreviewOpen",
  default: false,
});

export const selectionEntryAtom = atom<IconEntry | null>({
  key: "selectionEntry",
  default: null,
});
