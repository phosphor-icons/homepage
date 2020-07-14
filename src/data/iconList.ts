import { Icon, IconCategory, IconFillStyle } from "../lib/Icon";

export const ICON_LIST: Icon[] = [
  {
    name: "arrow-up",
    style: { type: IconFillStyle.LINE, weight: "light" },
    categories: [
      IconCategory.DESIGN,
      IconCategory.EDITOR,
      IconCategory.SYSTEM,
      IconCategory.OTHER,
    ],
    tags: ["point", "pointer", "direction"],
  },
  {
    name: "arrow-down",
    style: { type: IconFillStyle.LINE, weight: "light" },
    categories: [
      IconCategory.DESIGN,
      IconCategory.EDITOR,
      IconCategory.SYSTEM,
      IconCategory.OTHER,
    ],
    tags: ["point", "pointer", "direction"],
  },
  {
    name: "arrow-left",
    style: { type: IconFillStyle.LINE, weight: "light" },
    categories: [
      IconCategory.DESIGN,
      IconCategory.EDITOR,
      IconCategory.SYSTEM,
      IconCategory.OTHER,
    ],
    tags: ["point", "pointer", "direction"],
  },
  {
    name: "arrow-right",
    style: { type: IconFillStyle.LINE, weight: "light" },
    categories: [
      IconCategory.DESIGN,
      IconCategory.EDITOR,
      IconCategory.SYSTEM,
      IconCategory.OTHER,
    ],
    tags: ["point", "pointer", "direction"],
  },
  {
    name: "house",
    style: { type: IconFillStyle.FILL },
    categories: [IconCategory.MAP, IconCategory.OTHER],
    tags: ["building", "home", "place", "apartment"],
  },
  {
    name: "hospital",
    style: { type: IconFillStyle.FILL },
    categories: [IconCategory.MAP, IconCategory.HEALTH, IconCategory.OTHER],
    tags: ["building", "doctor", "place", "treatment"],
  },
  {
    name: "mail",
    style: { type: IconFillStyle.FILL },
    categories: [IconCategory.BUSINESS, IconCategory.SYSTEM],
    tags: ["email", "letter", "message", "messaging", "send"],
  },
  {
    name: "mail",
    style: { type: IconFillStyle.DUOTONE },
    categories: [
      IconCategory.BUSINESS,
      IconCategory.COMMUNICATION,
      IconCategory.SYSTEM,
    ],
    tags: ["email", "letter", "message", "messaging", "send"],
  },
  {
    name: "chat",
    style: { type: IconFillStyle.DUOTONE },
    categories: [IconCategory.COMMUNICATION, IconCategory.SYSTEM],
    tags: ["message", "messaging", "send"],
  },
  {
    name: "chat",
    style: { type: IconFillStyle.FILL },
    categories: [IconCategory.COMMUNICATION, IconCategory.SYSTEM],
    tags: ["message", "messaging", "send"],
  },
  // {
  //   name: "",
  //   style: IconFillStyle.FILL,
  //   categories: [],
  //   tags: [],
  // },
];
