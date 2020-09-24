import { useWindowSize } from "react-use";

const GRID_PADDING = 32; // .grid-container { padding }
const TOOLBAR_WIDTH = 17; // IS THIS BROWSER-SPECIFIC?
const MAX_GRID_WIDTH = 1120; // .grid { max-width }
const ITEM_WIDTH = 168; // .grid-item { width; height; margin }

export default (): number => {
  const { width } = useWindowSize();
  return Math.floor(
    Math.min(width - GRID_PADDING - TOOLBAR_WIDTH, MAX_GRID_WIDTH) / ITEM_WIDTH
  );
};
