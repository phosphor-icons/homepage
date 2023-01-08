import { Icon } from "phosphor-react";
import { IconCategory } from "@phosphor-icons/core";

export interface IconEntry {
  name: string;
  categories: IconCategory[];
  tags: string[];
  Icon: Icon;
}

export enum SnippetType {
  REACT = "React",
  VUE = "Vue",
  HTML = "HTML/CSS",
  FLUTTER = "Flutter",
}
