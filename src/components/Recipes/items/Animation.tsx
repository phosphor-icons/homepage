import { Cube } from "@phosphor-icons/react";

import { RecipeProps } from "../Recipe";

const animation: RecipeProps = {
  title: "SVG Wizardry",
  url: "https://stackblitz.com/edit/react-ts-f7q7gs?file=App.tsx,style.css",
  Example() {
    return (
      <div className="example">
        <Cube color="red" weight="fill" style={{ fill: "url(#star)" }}>
          <defs>
            <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
              <polygon
                points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"
                fill="red"
              />
            </pattern>
          </defs>
        </Cube>
        <Cube color="red" weight="duotone" style={{ filter: "url(#emboss)" }}>
          <filter id="emboss">
            <feConvolveMatrix
              kernelMatrix="
                3 0 0
                0 0 0
                0 0 -3
              "
            />
          </filter>
        </Cube>
        <Cube color="red" weight="duotone">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="4s"
            repeatCount="indefinite"
          ></animate>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="5s"
            from="0 0 0"
            to="360 0 0"
            repeatCount="indefinite"
          ></animateTransform>
        </Cube>
        <Cube
          color="red"
          weight="duotone"
          style={{ filter: "url(#displacementFilter)" }}
        >
          <filter id="displacementFilter">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01"
              numOctaves="3"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="20"
              xChannelSelector="B"
              yChannelSelector="G"
            />
          </filter>
        </Cube>
      </div>
    );
  },
};

export default animation;
