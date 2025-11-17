import { IconStyle } from "@phosphor-icons/core";
import TinyColor from "tinycolor2";

import { SnippetType } from "@/lib";

function u8ToCGFloatStr(value: number): string {
  return (value / 255).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });
}

export function getCodeSnippets({
  name,
  displayName,
  weight,
  size,
  color,
}: {
  name: string;
  displayName: string;
  weight: IconStyle;
  size: number;
  color: string;
}): Record<SnippetType, string> {
  const isDefaultWeight = weight === "regular";
  const isDefaultColor = color === "#000000";
  const camelName = displayName.replace(/^\w/, (c) => c.toLowerCase());
  const pascalWeight = weight.replace(/^\w/, (c) => c.toUpperCase());
  const { r, g, b } = TinyColor(color).toRgb();

  return {
    [SnippetType.HTML]: `<i class="ph${
      isDefaultWeight ? "" : `-${weight}`
    } ph-${name}"></i>`,
    [SnippetType.REACT]: `<${displayName}Icon size={${size}} ${
      !isDefaultColor ? `color="${color}" ` : ""
    }${isDefaultWeight ? "" : `weight="${weight}" `}/>`,
    [SnippetType.VUE]: `<Ph${displayName} :size="${size}" ${
      !isDefaultColor ? `color="${color}" ` : ""
    }${isDefaultWeight ? "" : `weight="${weight}" `}/>`,
    [SnippetType.FLUTTER]: `Icon(\n  PhosphorIcons.${displayName.replace(
      /^\w/,
      (c) => c.toLowerCase()
    )}${
      isDefaultWeight ? "" : weight.replace(/^\w/, (c) => c.toUpperCase())
    },\n  size: ${size.toFixed(1)},\n${
      !isDefaultColor ? `  color: Color(0xff${color.replace("#", "")}),\n` : ""
    })`,
    [SnippetType.ELM]: `Phosphor.${camelName}${
      isDefaultWeight ? "" : " " + pascalWeight
    }
    |> withSize ${size}
    |> withSizeUnit "px"
    |> toHtml []`,
    [SnippetType.SWIFT]: `Ph.${camelName}.${weight}${
      !isDefaultColor
        ? `\n    .color(red: ${u8ToCGFloatStr(r)}, green: ${u8ToCGFloatStr(
            g
          )}, blue: ${u8ToCGFloatStr(b)})`
        : ""
    }
    .frame(width: ${size}, height: ${size})
    `,
  };
}

export function supportsWeight({
  type,
  weight,
}: {
  type: SnippetType;
  weight: IconStyle;
}): boolean {
  if (type !== SnippetType.FLUTTER) return true;
  return weight !== IconStyle.DUOTONE;
}

export function stripWrappingQuotes(value: string | null | undefined): string {
  return value?.replace(/["'](.+)["']/, "$1") ?? "";
}

export function parseWeight(weight: string | null | undefined): IconStyle {
  switch (stripWrappingQuotes(weight).toLowerCase()) {
    case "thin":
      return IconStyle.THIN;
    case "light":
      return IconStyle.LIGHT;
    case "bold":
      return IconStyle.BOLD;
    case "fill":
      return IconStyle.FILL;
    case "duotone":
      return IconStyle.DUOTONE;
    case "regular":
    default:
      return IconStyle.REGULAR;
  }
}

export function parseQuery(query: string | null | undefined): string {
  return stripWrappingQuotes(query);
}

export function parseSize(size: string | null | undefined): number {
  const sizeAsNumber = parseInt(stripWrappingQuotes(size) || "32", 10);
  return Number.isFinite(sizeAsNumber)
    ? Math.min(Math.max(sizeAsNumber, 16), 96)
    : 32;
}

export function parseColor(color: string | null | undefined): string {
  const parsedColor = TinyColor(stripWrappingQuotes(color) || "#000000");
  if (parsedColor.isValid()) {
    return parsedColor.toHexString();
  }
  return "#000000";
}
