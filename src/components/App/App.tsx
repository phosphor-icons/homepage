import React from "react";

import { Header, Toolbar, IconGrid, Footer } from "../";
import "./App.css";

const App: React.FC<any> = () => {
  return (
    <>
      <Header />
      <main>
        <Toolbar />
        <IconGrid />
      </main>
      <Footer />
    </>
  );
};

export default App;
