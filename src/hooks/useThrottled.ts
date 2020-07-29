import { useRef, useEffect, useCallback } from "react";

type Callback = (...args: any) => void;

export default (
  callback: Callback,
  delay: number,
  dependencies: any[] = []
) => {
  const throttleRef = useRef<Boolean>(false);
  const callbackRef = useRef<Callback>(callback);

  // Update the callback to be used, if it ever changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback<Callback>(
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
