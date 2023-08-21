import { useCallback, ReactNode } from "react";
import { DefaultValue } from "recoil";
import { ReadItem, WriteItems, ListenToItems, RecoilSync } from "recoil-sync";
import { STORAGE_KEY } from ".";

const DEFAULT_VALUE = new DefaultValue();

export default ({ children }: { children: ReactNode }) => {
  const read: ReadItem = useCallback((itemKey) => {
    if (typeof document === "undefined") return DEFAULT_VALUE; // SSR

    const item = localStorage.getItem(itemKey);

    let parsed: unknown;

    try {
      parsed = item === null ? DEFAULT_VALUE : parseJSON(item);
    } catch {
      parsed = DEFAULT_VALUE;
      console.warn({ itemKey, item }, "parseJSON failed");
    }

    return parsed;
  }, []);

  const write: WriteItems = useCallback(({ diff }) => {
    if (typeof document === "undefined") return; // SSR

    for (const [key, value] of diff) {
      if (value instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        // reasons for setItem to fail: https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem#exceptions
        try {
          localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
          console.warn({ err, key, value }, "localStorage.setItem failed");
        }
      }
    }
  }, []);

  const listen: ListenToItems = useCallback(
    ({ updateItem, updateAllKnownItems }) => {
      const onStorage = (event: StorageEvent) => {
        // ignore clear() calls
        if (event.storageArea === localStorage && event.key !== null) {
          let parsed: unknown;
          try {
            parsed =
              event.newValue === null
                ? DEFAULT_VALUE
                : parseJSON(event.newValue);
          } catch {
            parsed = DEFAULT_VALUE;
            console.warn({ event }, "parseJSON failed");
          }

          updateItem(event.key, parsed);
        }
      };

      window.addEventListener("storage", onStorage);

      return () => window.removeEventListener("storage", onStorage);
    },
    []
  );

  return (
    <RecoilSync
      storeKey={STORAGE_KEY}
      read={read}
      write={write}
      listen={listen}
    >
      {children}
    </RecoilSync>
  );
};

function parseJSON(value: string): unknown {
  return value === "undefined" ? undefined : JSON.parse(value);
}
