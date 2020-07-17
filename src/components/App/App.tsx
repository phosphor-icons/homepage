import React from "react";
import { Toolbar, IconGrid } from "../";

const App = () => {
  return (
    <div>
      <header>
        <h1>Phosphor Icons</h1>
        <a
          href="https://play.google.com/store/apps/details?id=com.tobiasfried.phosphor"
          target="_blank"
          rel="noopener noreferrer"
        >
          on the play store
        </a>
      </header>
      <Toolbar />
      <IconGrid />
    </div>
  );
};

export default App;
