import { useEffect } from "react";

export type UseEventTarget = HTMLElement | SVGElement | Document | Window;

export type UseEventMap<E extends UseEventTarget> = E extends HTMLElement
  ? HTMLElementEventMap
  : E extends SVGElement
    ? SVGElementEventMap
    : E extends Document
      ? DocumentEventMap
      : WindowEventMap;

export type UseEventType<E extends UseEventTarget> = keyof UseEventMap<E>;

/**
 * Attach event listeners to arbitrary targets, and perform necessary cleanup
 * when unmounting. Provides type inference for the listener based on the
 * provided event name (currently supports {@link Window}, {@link Document},
 * and subclasses of {@link HTMLElement} and {@link SVGElement}).
 *
 * @param type an {@link https://developer.mozilla.org/en-US/docs/Web/Events#event_listing event type}
 * @param listener a callback to be fired on the event
 * @param options {@link AddEventListenerOptions}
 * @param el the target element to attack the listener. Defaults to
 * {@link Document} when omitted.
 */
export default function useEvent<
  K extends UseEventType<T>,
  M extends UseEventMap<T>,
  T extends UseEventTarget = Document,
>(
  type: K,
  listener: (this: T, ev: M[K]) => any,
  options?: boolean | AddEventListenerOptions,
  el?: T
) {
  useEffect(() => {
    const target = el ?? document;
    // @ts-ignore
    target.addEventListener(type, listener, options);

    // @ts-ignore
    return () => target.removeEventListener(type, listener);
  }, [el, type]);
}
