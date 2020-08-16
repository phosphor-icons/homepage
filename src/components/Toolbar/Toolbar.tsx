import React from "react";

import "./Toolbar.css";
import StyleInput from "../StyleInput/StyleInput";
import SearchInput from "../SearchInput/SearchInput";
import SizeInput from "../SizeInput/SizeInput";
import ColorInput from "../ColorInput/ColorInput";

type ToolbarProps = {};

const Toolbar: React.FC<ToolbarProps> = () => {
  return (
    <menu className="toolbar" id="toolbar">
      <div className="toolbar-contents">
        <StyleInput />
        <SearchInput />
        <SizeInput />
        <ColorInput />
      </div>
    </menu>
  );
};

export default Toolbar;
