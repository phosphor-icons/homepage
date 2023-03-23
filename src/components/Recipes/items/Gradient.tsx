import { Fire, Image, Peace, RainbowCloud } from "@phosphor-icons/react";

import { RecipeProps } from "../Recipe";

const gradient: RecipeProps = {
  title: "Gradients",
  url: "",
  Example() {
    return (
      <div className="example">
        <Fire weight="fill" color="url(#flame)">
          <defs>
            <linearGradient id="flame" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="10%" stopColor="#FFDB00" />
              <stop offset="20%" stopColor="#F8BA09" />
              <stop offset="30%" stopColor="#F19A11" />
              <stop offset="50%" stopColor="#E9791A" />
              <stop offset="95%" stopColor="#E25822" />
            </linearGradient>
          </defs>
        </Fire>

        <RainbowCloud color="url(#spectrum)">
          <defs>
            <linearGradient id="spectrum">
              <stop offset="10%" stopColor="indigo" />
              <stop offset="20%" stopColor="blue" />
              <stop offset="30%" stopColor="green" />
              <stop offset="50%" stopColor="gold" />
              <stop offset="95%" stopColor="red" />
            </linearGradient>
          </defs>
        </RainbowCloud>

        <Peace weight="fill" color="url(#spectrum2)">
          <defs>
            <radialGradient id="spectrum2">
              <stop offset="15%" stopColor="indigo" />
              <stop offset="25%" stopColor="blue" />
              <stop offset="35%" stopColor="green" />
              <stop offset="50%" stopColor="gold" />
              <stop offset="95%" stopColor="red" />
            </radialGradient>
          </defs>
        </Peace>

        <Image color="url(#sunset)" weight="fill">
          <defs>
            <linearGradient id="sunset" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="violet" />
              <stop offset="100%" stopColor="yellow" />
            </linearGradient>
          </defs>
        </Image>
      </div>
    );
  },
};

export default gradient;
