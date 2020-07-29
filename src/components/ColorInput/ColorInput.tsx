import React from "react";
import { useRecoilState } from "recoil";
import TinyColor from "tinycolor2";

import { iconColorAtom } from "../../state/atoms";
import useThrottled from "../../hooks/useThrottled";
import "./ColorInput.css";

type ColorInputProps = {};

const ColorInput: React.FC<ColorInputProps> = () => {
  const [color, setColor] = useRecoilState(iconColorAtom);
  const isDark = TinyColor(color).isDark();
  
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: color },
    } = event;
    if (color[0] === "#") setColor(color);
  };
  
  const throttledColorChange = useThrottled(handleColorChange, 100, [handleColorChange])
  
  return (
    <div className="color-picker">
      <input
        className="color-input"
        aria-label="Icon Color"
        style={{ backgroundColor: color }}
        type="color"
        onChange={throttledColorChange}
        value={color}
      />
      <span style={{ color: isDark ? "white" : "black" }}>{color}</span>
    </div>
  );
};

export default ColorInput;
