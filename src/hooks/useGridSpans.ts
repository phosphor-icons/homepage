import { useWindowSize } from "react-use";

const MOBILE_BREAKPOINT = 536;

const GRID_PADDING = 32; // .grid-container { padding }
const TOOLBAR_WIDTH = 17; // IS THIS BROWSER-SPECIFIC?
const MAX_GRID_WIDTH = 1120; // .grid { max-width }
const ITEM_WIDTH = 168; // .grid-item { width; height; margin }
const ITEM_WIDTH_MOBILE = 108; // .grid-item { width; height; margin }

export default function useGridSpans(): number {
  const { width } = useWindowSize();
  const itemWidth = width <= MOBILE_BREAKPOINT ? ITEM_WIDTH_MOBILE : ITEM_WIDTH;

  return Math.floor(
    Math.min(width - GRID_PADDING - TOOLBAR_WIDTH, MAX_GRID_WIDTH) / itemWidth
  );
}
