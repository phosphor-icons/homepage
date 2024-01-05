import { useRef, useEffect, useCallback, DependencyList } from "react";

type Callback<T extends Array<unknown>> = (...args: T) => void;

const useThrottled = <T extends Array<unknown>>(
  callback: Callback<T>,
  delay: number,
  dependencies: DependencyList = []
): ((...args: T) => void) => {
  const throttleRef = useRef<Boolean>(false);
  const callbackRef = useRef<Callback<T>>(callback);

  // Update the callback to be used, if it ever changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback<Callback<T>>(
    (...args) => {
      if (throttleRef.current) return;

      throttleRef.current = true;
      callbackRef.current(...args);
      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [delay, ...dependencies]
  );
};

export default useThrottled;
