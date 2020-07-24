import React from "react";
import { useRecoilState } from "recoil";

import { iconColorAtom } from "../../state/atoms";

type ColorInputProps = {};

const ColorInput: React.FC<ColorInputProps> = () => {
  const [color, setColor] = useRecoilState(iconColorAtom);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: color },
    } = event;
    if (color[0] === "#") setColor(color);
  };

  return (
    <div>
      <input
        id="color-picker"
        aria-label="Icon Color"
        type="color"
        onChange={handleColorChange}
        value={color}
      />
    </div>
  );
};

export default ColorInput;
