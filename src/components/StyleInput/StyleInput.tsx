import React from "react";
import { useRecoilState } from "recoil";
import Select from "react-dropdown-select";

import { styleQueryAtom } from "../../state/atoms";
import { IconStyle } from "../../lib";
import "./StyleInput.css";
import { Heart } from "phosphor-react";

const options = [
  { key: "Thin", value: IconStyle.THIN, icon: <Heart weight="thin" /> },
  { key: "Light", value: IconStyle.LIGHT, icon: <Heart weight="light" /> },
  {
    key: "Regular",
    value: IconStyle.REGULAR,
    icon: <Heart weight="regular" />,
  },
  { key: "Bold", value: IconStyle.BOLD, icon: <Heart weight="bold" /> },
  { key: "Fill", value: IconStyle.FILL, icon: <Heart weight="fill" /> },
  {
    key: "Duotone",
    value: IconStyle.DUOTONE,
    icon: <Heart weight="duotone" />,
  },
];

type StyleInputProps = {};

const StyleInput: React.FC<StyleInputProps> = () => {
  const [style, setStyle] = useRecoilState(styleQueryAtom);
  void style;

  // const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setStyle(event.target.value as IconStyle);
  // };

  return (
    <Select
      style={{ height: 48 }}
      options={options}
      values={[options[2]]}
      searchable={false}
      labelField="key"
      onChange={(values) => setStyle(values[0].value as IconStyle)}
      // itemRenderer={({ item, methods }) => (
      //   <div
      //     className="react-dropdown-select-item"
      //     onClick={() => methods.addItem(item)}
      //   >
      //     {item.icon}
      //     {item.key}
      //   </div>
      // )}
    />
  );
};

export default StyleInput;
