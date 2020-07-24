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
  BRAND = "Brand",
  BUSINESS = "Business",
  COMMUNICATION = "Communication",
  DESIGN = "Design",
  DEVELOPMENT = "Development",
  DEVICE = "Device",
  DOCUMENT = "Document",
  EDITOR = "Editor",
  FINANCE = "Finance",
  HEALTH = "Health & Medical",
  MAP = "Map",
  MEDIA = "Media",
  SYSTEM = "System",
  USERS = "Users",
  WEATHER = "Weather",
  OTHER = "Other",
}

export interface IconEntry {
  name: string;
  categories: IconCategory[];
  tags: string[];
  Icon: Icon;
}
