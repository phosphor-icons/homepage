import { useRecoilValue } from "recoil";

import { iconColorAtom, iconSizeAtom, iconWeightAtom } from "../state/atoms";
import useDebounce from "./useDebounce";

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
