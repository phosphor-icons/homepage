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

export interface Icon {
  name: string;
  style: IconStyle;
  categories: IconCategory[];
  tags: string[];
  asset: React.FC<React.SVGProps<SVGSVGElement>>;
}
