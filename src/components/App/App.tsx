import React, { Suspense } from "react";

import { Info, Toolbar, IconGrid, Header } from "../";
import { Heart, Droid } from "phosphor-react";
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
      <Info id="footer">
        <div className="feature">
          <h3>
            A labor
            <br />
            of love
          </h3>
          <div className="feature-contents">
            <p>
              Phosphor is free and open source software. If you enjoy these
              icons, please consider supporting us with a donation.
            </p>
            <button
              className="main-button"
              onClick={(e) => e.currentTarget.blur()}
            >
              <Heart size={32} style={{ marginRight: 12 }} />
              Buy us a coffee
            </button>
          </div>
        </div>
        <div className="feature">
          <h3>
            <span
              role="img"
              aria-label="Emoji of woman technologist, man technologist, and cat"
            >
              👩🏻‍💻👨‍💻🐱
            </span>
          </h3>
          <div className="feature-contents">
            <p>
              Copyright © 2020 Phosphor Icons
              <br />
              Phosphor Icons is designed by{" "}
              <a className="main-link" href="https://helenazhang.com">
                Helena Zhang
              </a>{" "}
              + built by{" "}
              <a className="main-link" href="https://tobiasfried.com">
                Tobias Fried
              </a>
              .
              <br />
              This website is set in{" "}
              <a className="main-link" href="https://manropefont.com/">
                Manrope
              </a>{" "}
              by{" "}
              <a className="main-link" href="https://gent.media/">
                Mikhail Sharanda
              </a>
              .
            </p>
            <p>
              See also: <Droid size={20} />{" "}
              <a
                className="main-link"
                href="https://play.google.com/store/apps/details?id=com.tobiasfried.phosphor"
              >
                Phosphor for Android
              </a>
            </p>
            <a className="main-link" href="#">
              Back to zee top
            </a>
          </div>
        </div>
      </Info>
    </>
  );
};

export default App;
