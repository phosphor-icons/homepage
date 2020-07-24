import React from "react";
import { useRecoilState } from "recoil";

import { styleQueryAtom } from "../../state/atoms";
import { IconStyle } from "../../lib";

type StyleInputProps = {};

const StyleInput: React.FC<StyleInputProps> = () => {
  const [style, setStyle] = useRecoilState(styleQueryAtom);

  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStyle(event.target.value as IconStyle);
  };

  return (
    <div>
      <select
        id="style-input"
        aria-label="Icon Style"
        value={style?.toString()}
        onChange={handleStyleChange}
      >
        <option value={IconStyle.THIN}>Thin</option>
        <option value={IconStyle.LIGHT}>Light</option>
        <option value={IconStyle.REGULAR}>Regular</option>
        <option value={IconStyle.BOLD}>Bold</option>
        <option value={IconStyle.FILL}>Fill</option>
        <option value={IconStyle.DUOTONE}>Duotone</option>
      </select>
    </div>
  );
};

export default StyleInput;
