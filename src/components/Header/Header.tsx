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
        <button>Download all</button>
        <button>Request</button>
        <button>Donate</button>
        <a href="https://github.com/rektdeckard/phosphor-react">
          <button>Github</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
