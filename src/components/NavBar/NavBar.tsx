import React from "react";
import "./NavBar.css";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav>
      <div className="title-container">
        <div
          style={{
            height: 32,
            width: 32,
            backgroundColor: "black",
            borderRadius: "50%",
          }}
        ></div>
        <div className="title">
          <h1>Phosphor Icons</h1>
          <small>v0.1.6</small>
        </div>
      </div>
      <div className="links">
        <a className="nav-link" href="#">Download</a>
        <a className="nav-link" href="https://github.com/rektdeckard/phosphor-web/issues">Request</a>
        <a className="nav-link" href="#">Donate</a>
        <a className="nav-link" href="https://github.com/rektdeckard/phosphor-react">
          <span>Github</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
