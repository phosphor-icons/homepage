import React, { Suspense } from "react";

import "./App.css";
import Header from "../Header/Header";
import Toolbar from "../Toolbar/Toolbar";
import IconGrid from "../IconGrid/IconGrid";
import Footer from "../Footer/Footer";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Notice from "../Notice/Notice";
import useIconParameters from "../../hooks/useIconParameters";
import usePersistSettings from "../../hooks/usePersistSettings";

const errorFallback = <Notice message="Search error" />;
const waitingFallback = <Notice type="none" message="" />;

const App: React.FC<any> = () => {
  useIconParameters();
  usePersistSettings();

  return (
    <React.StrictMode>
      <Header />
      <main>
        <Toolbar />
        <ErrorBoundary fallback={errorFallback}>
          <Suspense fallback={waitingFallback}>
            <IconGrid />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </React.StrictMode>
  );
};

export default App;
