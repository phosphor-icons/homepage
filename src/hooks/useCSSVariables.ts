import { useEffect, useRef } from "react";

type CSSCustomPropertyName = `--${string}`;

type CSSCustomProperties = {
  [property: CSSCustomPropertyName]: string | null;
};

function simpleDiff(prev: CSSCustomProperties, next: CSSCustomProperties) {
  const merge = { ...prev, ...next };
  return Object.entries(merge).reduce<
    [property: CSSCustomPropertyName, value: string | null][]
  >((acc, [k, val]) => {
    let key = k as CSSCustomPropertyName;

    if (
      !prev[key as CSSCustomPropertyName] ||
      prev[key as CSSCustomPropertyName] !== val
    ) {
      acc.push([key, val]);
    }
    return acc;
  }, []);
}

export default function useCSSVariables(properties: CSSCustomProperties) {
  const p = useRef<CSSCustomProperties>({});

  useEffect(() => {
    const diff = simpleDiff(p.current, properties);

    if (diff.length > 0) {
      diff.forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });

      p.current = properties;
    }
  }, [properties]);
}
