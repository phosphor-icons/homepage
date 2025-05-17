import { useMemo } from "react";
import {
  Icon,
  IconProps,
  BarricadeIcon,
  GasCanIcon,
  IceCreamIcon,
  FlyingSaucerIcon,
} from "@phosphor-icons/react";

import { RecipeProps } from "../Recipe";

type DuocolorProps = Omit<IconProps, "weight"> & {
  Icon: Icon;
  duocolor?: string;
};

function Duocolor({ Icon, duocolor, ...iconProps }: DuocolorProps) {
  const [uuid, style] = useMemo(() => {
    // UUID to make sure the inline stylesheet is "scoped" to this icon only.
    // Could also easily be implemented with a regular CSS selector.
    const uuid = "ph-" + Math.floor(Math.random() * 1_000_000).toString(16);
    // const uuid = "ph-" + crypto.randomUUID();
    return [uuid, !duocolor ? null : createDuocolorStyle(uuid, duocolor)];
  }, [duocolor]);

  return (
    <>
      {style}
      <Icon {...iconProps} weight="duotone" data-ph={uuid} />
    </>
  );
}

function createDuocolorStyle(id: string, color: string) {
  return (
    <style>
      {`
        [data-ph="${id}"] [opacity="0.2"] {
          opacity: 1;
          fill: ${color};
        }
      `}
    </style>
  );
}

const duocolor: RecipeProps = {
  title: "Duocolor",
  url: "https://stackblitz.com/edit/react-ts-kvdzu1?file=App.tsx",
  Example() {
    return (
      <div className="example">
        <Duocolor Icon={FlyingSaucerIcon} duocolor="darkcyan" />
        <Duocolor Icon={BarricadeIcon} color="darkgray" duocolor="orange" />
        <Duocolor Icon={IceCreamIcon} color="saddlebrown" duocolor="lightpink" />
        <Duocolor Icon={GasCanIcon} duocolor="indianred" />
      </div>
    );
  },
};

export default duocolor;
