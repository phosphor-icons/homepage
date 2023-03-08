import { Icon } from "@phosphor-icons/react";
import { IconEntry as CoreEntry } from "@phosphor-icons/core";

export interface IconEntry extends CoreEntry {
  Icon: Icon;
}

export enum SnippetType {
  REACT = "React",
  VUE = "Vue",
  HTML = "HTML/CSS",
  FLUTTER = "Flutter",
  ELM = "Elm",
}
