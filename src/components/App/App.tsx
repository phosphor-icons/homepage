import React, { Suspense } from "react";

import { Toolbar, IconGrid, Header, Footer } from "../";
import "./App.css";

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
