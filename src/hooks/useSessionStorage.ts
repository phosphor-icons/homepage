import { useCallback, useState, Dispatch, SetStateAction } from "react";
import { STORAGE_KEY } from "@/state";

type Initializer<S> = () => S;
type Setter<S> = (prev: S) => S;
type Action<S> = S | Setter<S> | Initializer<S>;

function expand<S>(action: Action<S>, prev?: S) {
  if (typeof action === "function") {
    return (action as Setter<S>)(prev!);
  } else {
    return action;
  }
}

export default function useSessionStorage<S>(
  key: string,
  fallbackState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>, (partial: Partial<S>) => void] {
  const [value, setValue] = useState<S>(() => {
    let val = sessionStorage.getItem(STORAGE_KEY + key);
    if (val) {
      try {
        return JSON.parse(val) as S;
      } catch (_) {
        return val as S;
      }
    }
    return expand(fallbackState);
  });

  const set: Dispatch<SetStateAction<S>> = useCallback((val) => {
    setValue((prev) => {
      const next = expand(val, prev);
      sessionStorage.setItem(STORAGE_KEY + key, JSON.stringify(next));
      return next;
    });
  }, []);

  const insert = useCallback(
    (partial: Partial<S>) => set((value) => ({ ...value, ...partial })),
    []
  );

  return [value, set, insert];
}
