import React, { useCallback } from "react";
import { useRecoilState } from "recoil";

import { iconSizeAtom } from "@/state";
import "./SizeInput.css";

type SizeInputProps = {};

const handleFocus = (event: React.UIEvent<HTMLInputElement>) => {
  event.currentTarget.focus();
};

const handleBlur = (event: React.UIEvent<HTMLInputElement>) => {
  event.currentTarget.blur();
};

const SizeInput = (_: SizeInputProps) => {
  const [size, setSize] = useRecoilState(iconSizeAtom);

  const handleSizeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = event;
      const sizeInput = parseInt(value);

      if (sizeInput > 0) setSize(sizeInput);
    },
    [setSize]
  );

  return (
    <div className="size-bar">
      <label htmlFor="size-input">{`${size}px`}</label>
      <input
        id="size-input"
        name="size-input"
        value={size}
        type="range"
        min={16}
        max={96}
        onChange={handleSizeChange}
        onTouchStart={handleFocus}
        onTouchEnd={handleBlur}
        onMouseUp={handleBlur}
        step={4}
      />
    </div>
  );
};

export default SizeInput;
