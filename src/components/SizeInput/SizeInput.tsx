import { ChangeEvent, UIEvent, useCallback } from "react";
import { useRecoilState } from "recoil";

import { iconSizeAtom } from "../../state/atoms";
import "./SizeInput.css";

const handleFocus = (event: UIEvent<HTMLInputElement>) => {
  event.currentTarget.focus();
};

const handleBlur = (event: UIEvent<HTMLInputElement>) => {
  event.currentTarget.blur();
};

const SizeInput = () => {
  const [size, setSize] = useRecoilState(iconSizeAtom);

  const handleSizeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
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
