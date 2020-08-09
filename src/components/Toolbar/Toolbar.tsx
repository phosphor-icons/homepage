import React from "react";

import { SearchInput, SizeInput, StyleInput, ColorInput } from "../";
import "./Toolbar.css";

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
