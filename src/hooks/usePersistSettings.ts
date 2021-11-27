import { useRecoilValue } from "recoil";
import useDebounce from "./useDebounce";
import { iconWeightAtom, iconSizeAtom, iconColorAtom } from "../state/atoms";

export default function usePersistSettings() {
  const weight = useRecoilValue(iconWeightAtom);
  const size = useRecoilValue(iconSizeAtom);
  const color = useRecoilValue(iconColorAtom);

  useDebounce(
    () => {
      const serializedState = JSON.stringify({ weight, size, color });
      window.localStorage.setItem("__phosphor_settings__", serializedState);
    },
    2000,
    [weight, size, color]
  );
}
