import React from "react";

import { SearchInput, SizeInput, StyleInput, ColorInput } from "../";
import "./Toolbar.css";

type ToolbarProps = {};

const Toolbar: React.FC<ToolbarProps> = () => {
  return (
    <div className="toolbar">
      <StyleInput />
      <SearchInput />
      <SizeInput />
      <ColorInput />
    </div>
  );
};

export default Toolbar;
