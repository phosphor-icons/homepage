import { useCallback } from "react";
import { useShallow } from "zustand/react/shallow";
import { EyedropperSampleIcon } from "@phosphor-icons/react";

import { useThrottled } from "@/hooks";
import { ApplicationTheme, useApplicationStore } from "@/state";

import "./ColorInput.css";

type ColorInputProps = {};

const ColorInput = (_: ColorInputProps) => {
  const { color, setColor, theme } = useApplicationStore(useShallow((state) => ({
    color: state.iconColor,
    setColor: state.setIconColor,
    theme: state.applicationTheme,
  })));

  const handleColorChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value: color },
      } = event;
      if (color[0] === "#") setColor(color);
    },
    [setColor]
  );

  const handleSetInheritedColor = (e: React.MouseEvent) => {
    e.preventDefault();
    setColor("currentColor");
  };

  const throttledColorChange = useThrottled(handleColorChange, 100, [
    handleColorChange,
  ]);

  return (
    <div
      className="color-picker"
      title="Select a color, or right-click to use inherited color"
      onContextMenu={handleSetInheritedColor}
    >
      <input
        className="color-input"
        aria-label="Icon Color"
        style={{ backgroundColor: color }}
        type="color"
        onChange={throttledColorChange}
        value={color}
      />
      <span style={{ color: theme === ApplicationTheme.DARK ? "black" : "white" }}>
        {color === "currentColor" ? (
          <EyedropperSampleIcon size={28} weight="fill" />
        ) : (
          color
        )}
      </span>
    </div>
  );
};

export default ColorInput;
