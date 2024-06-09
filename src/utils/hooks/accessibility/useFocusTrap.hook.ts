import type { MutableRefObject } from "react";
import { useCallback } from "react";
import { useKeyEvent } from "@/utils/hooks/accessibility/useKeyEvent.hook";

const FOCUSABLE_ELEMENTS = [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden']):not([aria-hidden])",
  "select:not([disabled]):not([aria-hidden])",
  "textarea:not([disabled]):not([aria-hidden])",
  "button:not([disabled]):not([aria-hidden])",
  "iframe",
  "object",
  "embed",
  "summary",
  "[contenteditable]",
  "[tabindex]:not([tabindex^='-'])",
];
export const useFocusTrap = (contentsRef: MutableRefObject<HTMLElement | null>, isOpen: boolean): void => {
  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (!contentsRef.current || !isOpen) return;

      const focusableElements = Array.from(
        contentsRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS.join()),
      );

      if (!focusableElements.length) return;

      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements.slice(-1)[0];

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }
    },
    [contentsRef, isOpen],
  );
  useKeyEvent("keydown", "Tab", handler);
};
