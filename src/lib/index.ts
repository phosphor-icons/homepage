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
  BRAND = "Brands",
  BUSINESS = "Businesses",
  COMMUNICATION = "Communications",
  DESIGN = "Design",
  DEVELOPMENT = "Development",
  DEVICE = "Devices",
  DOCUMENT = "Documents",
  EDITOR = "Editors",
  FINANCE = "Finances",
  HEALTH = "Health & Medical",
  MAP = "Maps",
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
