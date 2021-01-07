import React, { useEffect } from "react";
import { useSearchParam } from "react-use";
import { useSetRecoilState } from "recoil";
import TinyColor from "tinycolor2";

import { iconColorAtom } from "../../state/atoms";

const Parameters: React.FC<{}> = () => {
  const color = useSearchParam("color")?.replace(/["']/g, "");
  const setColor = useSetRecoilState(iconColorAtom);

  useEffect(() => {
    if (color) {
      const normalizedColor = TinyColor(color);
      if (normalizedColor.isValid()) setColor(normalizedColor.toHexString());
    }
  }, [color, setColor]);

  return null;
};

export default Parameters;
