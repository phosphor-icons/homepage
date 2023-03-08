import { useMemo, useReducer, Reducer } from "react";
import useEvent from "./useEvent";

const updater: Reducer<number, void> = (s) => (s + 1) % 1_000_000;

export default function useMediaQuery(query: string) {
  const mq = useMemo(() => window.matchMedia(query), [query]);
  const [, update] = useReducer(updater, 0);

  useEvent("resize", update, { passive: true });
  return mq.matches;
}
