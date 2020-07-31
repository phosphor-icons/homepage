import { useState, useEffect } from "react";
import { useTimeoutFn } from "react-use";

export default <T>(baseState: T, duration: number): [T, (setter: T) => void] => {
  const [value, setValue] = useState<T>(baseState);
  const [, , restart] = useTimeoutFn(() => setValue(baseState), duration);

  useEffect(() => setValue(baseState), [baseState]);

  const setTransientValue = (transientValue: T): void => {
    setValue(transientValue);
    restart();
  };

  return [value, setTransientValue];
};
