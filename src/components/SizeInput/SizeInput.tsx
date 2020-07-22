import React from "react";
import { useRecoilState } from "recoil";

import { iconSizeAtom } from "../../state/atoms";
import "./SizeInput.css";

type SizeInputProps = {};

const SizeInput: React.FC<SizeInputProps> = () => {
  const [size, setSize] = useRecoilState(iconSizeAtom);

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    const sizeInput = parseInt(value);

    if (sizeInput > 0) setSize(sizeInput);
  };

  return (
    <div className="size-bar">
      <label htmlFor="size-input">{`Size: ${size}px`}</label>
      <input
        id="size-input"
        value={size}
        type="range"
        title={size.toString()}
        min={16}
        max={96}
        onChange={handleSizeChange}
        step={4}
      />
    </div>
  );
};

export default SizeInput;
