import React, { Suspense } from "react";

import "./App.css";
import Header from "../Header/Header";
import Toolbar from "../Toolbar/Toolbar";
import IconGrid from "../IconGrid/IconGrid";
import Footer from "../Footer/Footer";

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
