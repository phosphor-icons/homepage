import React, { Suspense } from "react";

import { NavBar, Panorama, Info, Toolbar, IconGrid } from "../";
import { ArrowUpRightCircle, DocumentText, Heart, Droid } from "phosphor-react";
import "./App.css";

const App: React.FC<any> = () => {
  return (
    <>
      <NavBar />
      <Panorama />
      <Info id="overview">
        <h2>
          Phosphor is a flexible icon family for interfaces, diagrams,
          presentations — whatever, really.
        </h2>
        <div className="feature">
          <h3>
            Clear and
            <br />
            reductive
          </h3>
          <div className="feature-contents">
            <p>
              Phosphor has been meticulously crafted to work together in
              harmony. With 6 weights and alternative glyphs, Phosphor pairs
              with all sorts of type sizes and layouts.
            </p>
            <h4>Design Specs</h4>
            <ul>
              <li>6 weights: Regular, Bold, Light, Thin, Fill, Duotone</li>
              <li>Designed at 16px to scale down to a small size</li>
              <li>Rounded end caps and ever so slightly rounded corners</li>
              <li>Alternate glyphs to suit your needs</li>
              <li>6,341 icons and counting</li>
            </ul>
            <button
              className="main-button"
              onClick={(e) => e.currentTarget.blur()}
            >
              <ArrowUpRightCircle size={32} style={{ marginRight: 12 }} />
              Download icons
            </button>
          </div>
        </div>
        <div className="feature">
          <h3>
            Intuitive
            <br />
            and light
          </h3>
          <div className="feature-contents">
            <p>
              Phosphor is available as an icon font and a React package, and can
              be sourced from NPM, a CDN like CDNJS and jsDelivr, or downloaded
              and used locally.
            </p>
            <h4>Eng Specs</h4>
            <ul>
              <li>Intuitive, powerful API to style and add interactivity</li>
              <li>Lightweight and full support for tree-shaking</li>
              <li>Familiar usage and naming scheme</li>
              <li>
                Built with TypeScript, and includes type definitions to ease
                development
              </li>
            </ul>
            <button
              className="main-button"
              onClick={(e) =>
                window.open(
                  "https://github.com/rektdeckard/phosphor-web#phosphor-icons"
                ) && e.currentTarget.blur()
              }
            >
              <DocumentText size={32} style={{ marginRight: 12 }} />
              See documentation
            </button>
          </div>
        </div>
      </Info>
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
              <a className="main-link" href="https://helenazhang.com">Helena Zhang</a> + built by{" "}
              <a className="main-link" href="https://tobiasfried.com">Tobias Fried</a>.
              <br />
              This website is set in{" "}
              <a className="main-link" href="https://manropefont.com/">Manrope</a> by{" "}
              <a className="main-link" href="https://gent.media/">Mikhail Sharanda</a>.
            </p>
            <p>
              See also: <Droid size={20} />{" "}
              <a className="main-link" href="https://play.google.com/store/apps/details?id=com.tobiasfried.phosphor">
                Phosphor for Android
              </a>
            </p>
            <a className="main-link" href="#">Back to zee top</a>
          </div>
        </div>
      </Info>
    </>
  );
};

export default App;
