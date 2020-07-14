export interface IconStyle {
  type: IconFillStyle;
  weight?: "light" | "regular" | "medium" | "bold";
}

export enum IconFillStyle {
  LINE = "line",
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
  LOGOS = "Logos",
  MAP = "Map",
  MEDIA = "Media",
  SYSTEM = "System",
  USERS = "Users",
  WEATHER = "Weather",
  OTHER = "Other",
}

export interface Icon {
  name: string;
  style: IconStyle;
  categories: IconCategory[];
  tags: string[];
}
