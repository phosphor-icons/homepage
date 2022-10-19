import { Suspense } from "react";

import useIconParameters from "../../hooks/useIconParameters";
import usePersistSettings from "../../hooks/usePersistSettings";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import IconGrid from "../IconGrid/IconGrid";
import Notice from "../Notice/Notice";
import Toolbar from "../Toolbar/Toolbar";
import "./App.css";

const errorFallback = <Notice message="Search error" />;
const waitingFallback = <Notice type="none" message="" />;

const App = () => {
  useIconParameters();
  usePersistSettings();

  return (
    <>
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
    </>
  );
};

export default App;
