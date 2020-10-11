import { Icon } from "phosphor-react";

export enum IconStyle {
  THIN = "thin",
  LIGHT = "light",
  REGULAR = "regular",
  BOLD = "bold",
  FILL = "fill",
  DUOTONE = "duotone",
}

export enum IconCategory {
  ARROWS = "arrows",
  BRAND = "brands",
  COMMERCE = "commerce",
  COMMUNICATION = "communications",
  DESIGN = "design",
  DEVELOPMENT = "development",
  OFFICE = "office",
  EDITOR = "editor",
  FINANCE = "finances",
  GAMES = "games",
  HEALTH = "health & wellness",
  MAP = "maps & navigation",
  MEDIA = "media",
  NATURE = "nature",
  OBJECTS = "objects",
  PEOPLE = "people",
  SYSTEM = "system",
  WEATHER = "weather",
}

export interface IconEntry {
  name: string;
  categories: IconCategory[];
  tags: string[];
  Icon: Icon;
}
