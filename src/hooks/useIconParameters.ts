import { useEffect } from "react";
import { useSearchParam } from "react-use";
import { useSetRecoilState } from "recoil";
import TinyColor from "tinycolor2";
import { iconColorAtom, iconWeightAtom, iconSizeAtom } from "../state/atoms";
import { IconStyle } from "../lib";

export default () => {
  const weight = useSearchParam("weight")?.replace(/["']/g, "");
  const size = useSearchParam("size")?.replace(/["']/g, "");
  const color = useSearchParam("color")?.replace(/["']/g, "");

  const setColor = useSetRecoilState(iconColorAtom);
  const setWeight = useSetRecoilState(iconWeightAtom);
  const setSize = useSetRecoilState(iconSizeAtom);

  useEffect(() => {
    if (weight) {
      if (weight.toUpperCase() in IconStyle) setWeight(weight as IconStyle);
    }
  }, [weight, setWeight]);

  useEffect(() => {
    if (size) {
      const normalizedSize = parseInt(size);
      if (typeof normalizedSize === "number" && isFinite(normalizedSize))
        setSize(Math.min(Math.max(normalizedSize, 16), 96));
    }
  }, [size, setSize]);

  useEffect(() => {
    if (color) {
      const normalizedColor = TinyColor(color);
      if (normalizedColor.isValid()) setColor(normalizedColor.toHexString());
    }
  }, [color, setColor]);
};
