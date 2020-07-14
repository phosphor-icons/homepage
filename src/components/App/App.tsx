import React from "react";
import { IconSearch, IconGrid } from "../";

const App = () => {
  return (
    <div>
      <header>
        Phosphor Icons{" "}
        <a
          // className="App-link"
          href="https://play.google.com/store/apps/details?id=com.tobiasfried.phosphor"
          target="_blank"
          rel="noopener noreferrer"
        >
          on the play store
        </a>
      </header>
      <IconSearch />
      <IconGrid />
    </div>
  );
};

export default App;
