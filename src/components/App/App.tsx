import React, { Suspense } from "react";

import { Header, Toolbar, Footer } from "../";
import "./App.css";
import IconGrid from "../IconGrid/IconGrid";

const App: React.FC<any> = () => {
  return (
    <>
      <Header />
      <main>
        <Toolbar />
        <Suspense fallback={<div>Loading...</div>}>
          <IconGrid />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
