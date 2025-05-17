import { CassetteTapeIcon, CubeIcon, VirusIcon, ThumbsUpIcon } from "@phosphor-icons/react";

import { RecipeProps } from "../Recipe";

const animation: RecipeProps = {
  title: "Hand Drawn",
  url: "https://stackblitz.com/edit/stackblitz-starters-4vqgkm?file=src%2FApp.tsx",
  Example() {
    return (
      <div className="example">
        <CassetteTapeIcon
          color="teal"
          style={{ filter: "url(#displacementFilter)" }}
        >
          <defs>
            <filter id="displacementFilter">
              <feTurbulence
                type="turbulence"
                baseFrequency="0.02"
                numOctaves="3"
                result="turbulence"
              />
              <feDisplacementMap
                in2="turbulence"
                in="SourceGraphic"
                scale="4"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </CassetteTapeIcon>
        <CubeIcon color="teal" style={{ filter: "url(#displacementFilter)" }} />
        <ThumbsUpIcon color="teal" style={{ filter: "url(#displacementFilter)" }} />
        <VirusIcon color="teal" style={{ filter: "url(#displacementFilter)" }} />
      </div>
    );
  },
};

export default animation;
