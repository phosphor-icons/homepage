import React, { Suspense } from "react";

import Header from "components/Header";
import Modal from "components/Modal";
import Toolbar from "components/Toolbar";
import IconGrid from "components/IconGrid";
import Footer from "components/Footer";
import ErrorBoundary from "components/ErrorBoundary";
import Notice from "components/Notice";

import useIconParameters from "hooks/useIconParameters";

import "./App.css";

const errorFallback = <Notice message="Search error" />;
const paymentFallback = <Notice message="Could not connect to payments" />;
const waitingFallback = <Notice type="none" message="" />;

const App: React.FC<any> = () => {
  useIconParameters();

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
      <Suspense fallback={paymentFallback}>
        <Modal />
      </Suspense>
      <Footer />
    </React.StrictMode>
  );
};

export default App;
