import { useRef, useEffect } from "react";

export default function useUnmount(fn: () => any): void {
  const fnRef = useRef(fn);

  // update the ref each render so if it change the newest callback will be invoked
  fnRef.current = fn;

  useEffect(() => () => fnRef.current(), []);
}
