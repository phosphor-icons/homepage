import React from "react";
import "./Header.css";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div style={{ paddingLeft: 32 }}>
        <h1>Phosphor Icons</h1>
      </div>
      <div style={{ paddingRight: 32, textAlign: "end" }}>
        <button>Download All</button>
        <button>Request</button>
        <button>Donate</button>
      </div>
    </header>
  );
};

export default Header;
