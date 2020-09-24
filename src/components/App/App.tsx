import React, { Suspense } from "react";

import "./App.css";
import Header from "../Header/Header";
import Toolbar from "../Toolbar/Toolbar";
import IconGrid from "../IconGrid/IconGrid";
import Footer from "../Footer/Footer";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Warn from "../Warn/Warn";

const App: React.FC<any> = () => {
  return (
    <React.StrictMode>
      <Header />
      <main>
        <Toolbar />
        <ErrorBoundary fallback={<Warn message="Search error"/>}>
          <Suspense fallback={<div>Loading...</div>}>
            <IconGrid />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </React.StrictMode>
  );
};

export default App;
