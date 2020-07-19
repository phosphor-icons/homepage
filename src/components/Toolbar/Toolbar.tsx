import React from "react";
import { useRecoilState } from "recoil";

import { searchQueryAtom, styleQueryAtom, iconSizeAtom, iconColorAtom } from "../../state/atoms";
import { IconStyle } from "../../lib/Icon";

type ToolbarProps = {}

const Toolbar: React.FC<ToolbarProps> = () => {
  const [query, setQuery] = useRecoilState(searchQueryAtom);
  const [style, setStyle] = useRecoilState(styleQueryAtom);
  const [size, setSize] = useRecoilState(iconSizeAtom);
  const [color, setColor] = useRecoilState(iconColorAtom);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStyle(event.target.value as IconStyle);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value }} = event;
    const sizeInput = parseInt(value);

    if (sizeInput > 0) setSize(sizeInput);
  }

  void(color)
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value: color }} = event;
    if (color[0] === "#") setColor(color);
  }

  return (
    <div style={{ position: "sticky", top: 0, padding: 8, backgroundColor: "white", zIndex: 1.1 }}>
      <input value={query} onChange={handleSearchChange} />
      <select value={style?.toString()} onChange={handleStyleChange}>
        <option value={""}>All</option>
        <option value={IconStyle.THIN}>Thin</option>
        <option value={IconStyle.LIGHT}>Light</option>
        <option value={IconStyle.REGULAR}>Regular</option>
        <option value={IconStyle.BOLD}>Bold</option>
        <option value={IconStyle.FILL}>Fill</option>
        <option value={IconStyle.DUOTONE}>Duotone</option>
      </select>
      <input value={size} type="range" min={12} max={256} onChange={handleSizeChange}/>
      <input type="color" onChange={handleColorChange}/>
    </div>
  );
}

export default Toolbar;