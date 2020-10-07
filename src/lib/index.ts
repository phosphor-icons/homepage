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
  BUSINESS = "business",
  COMMUNICATION = "communications",
  DESIGN = "design",
  DEVELOPMENT = "development",
  DEVICE = "devices",
  DOCUMENT = "documents",
  EDITOR = "editor",
  FINANCE = "finances",
  HEALTH = "health & medical",
  MAP = "maps",
  MEDIA = "media",
  SYSTEM = "system",
  USERS = "users",
  WEATHER = "weather",
  OTHER = "other",
}

export interface IconEntry {
  name: string;
  categories: IconCategory[];
  tags: string[];
  Icon: Icon;
}
