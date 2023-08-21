import { Fragment, Suspense, useMemo } from "react";
import { useRecoilValue } from "recoil";

import "./App.css";
import Header from "@/components/Header";
import Toolbar from "@/components/Toolbar";
import IconGrid from "@/components/IconGrid";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import Notice from "@/components/Notice";
// import Recipes from "@/components/Recipes";
import {
  useIconParameters,
  usePersistSettings,
  useCSSVariables,
} from "@/hooks";
import { isDarkThemeSelector } from "@/state";

const errorFallback = <Notice message="Search error" />;
const waitingFallback = <Notice type="none" message="" />;

const App: React.FC<any> = () => {
  // useIconParameters();
  // usePersistSettings();

  const isDark = useRecoilValue(isDarkThemeSelector);

  const properties = useMemo(
    () => ({
      "--foreground": isDark ? "white" : "var(--moss)",
      "--foreground-card": isDark ? "white" : "var(--moss)",
      "--foreground-secondary": isDark ? "var(--pewter)" : "var(--elephant)",
      "--background": isDark ? "var(--slate)" : "var(--vellum)",
      "--background-card": isDark ? "var(--stone)" : "var(--vellum)",
      "--background-layer": isDark ? "var(--scrim)" : "var(--translucent)",
      "--border-card": isDark ? "var(--shadow)" : "var(--moss-shadow)",
      "--border-secondary": isDark ? "var(--scrim)" : "var(--moss-shadow)",
      "--hover-tabs": isDark ? "var(--slate-sheer)" : "var(--ghost-sheer)",
      "--hover-buttons": isDark ? "var(--scrim)" : "var(--slate)",
    }),
    [isDark]
  );

  useCSSVariables(properties);

  return (
    <Fragment>
      <Header />
      <main>
        <Toolbar />
        <ErrorBoundary fallback={errorFallback}>
          <Suspense fallback={waitingFallback}>
            <IconGrid />
          </Suspense>
        </ErrorBoundary>
      </main>
      {/* <Recipes /> */}
      <Footer />
    </Fragment>
  );
};

export default App;
