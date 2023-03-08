import { useRecoilValue } from "recoil";
import {
  iconWeightAtom,
  iconSizeAtom,
  iconColorAtom,
  STORAGE_KEY,
} from "@/state";
import useDebounce from "./useDebounce";

export default function usePersistSettings() {
  const weight = useRecoilValue(iconWeightAtom);
  const size = useRecoilValue(iconSizeAtom);
  const color = useRecoilValue(iconColorAtom);

  useDebounce(
    () => {
      const serializedState = JSON.stringify({ weight, size, color });
      window.localStorage.setItem(STORAGE_KEY, serializedState);
    },
    2000,
    [weight, size, color]
  );
}
