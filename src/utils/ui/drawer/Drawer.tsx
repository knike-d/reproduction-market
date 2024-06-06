"use client";

import type { ForwardedRef, ReactNode } from "react";
import { createContext, forwardRef, useRef } from "react";
import { useFocusTrap } from "@/utils/hooks/useFocusTrap.hook";
import { useKeyEvent } from "@/utils/hooks/useKeyEvent.hook";
import { useToggleBodyFixed } from "@/utils/hooks/useToggleBodyFixed";
import { CloseIcon } from "@/utils/ui/icon/CloseIcon";

export const DrawerContext = createContext({
  isOpen: false,
});

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Drawer = forwardRef(function Drawer(
  { isOpen, onClose, children }: Props,
  firstFocusItemRef: ForwardedRef<HTMLButtonElement | null>,
) {
  const drawerContentsRef = useRef<HTMLDivElement | null>(null);

  useToggleBodyFixed(isOpen);
  useKeyEvent("keydown", "Escape", onClose);
  useFocusTrap(drawerContentsRef, isOpen);

  return (
    <>
      <div
        aria-hidden
        className={`fixed inset-0 z-overlay size-full overflow-hidden bg-overlay transition-opacity duration-300 ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
      />
      <div
        className={`fixed inset-y-0 right-0 z-drawer-menu h-full w-60 overflow-y-auto overscroll-y-contain bg-white font-normal text-black transition-transform duration-300 ${isOpen ? "pointer-events-auto translate-x-0" : "pointer-events-none translate-x-full"}`}
        role="dialog"
        ref={drawerContentsRef}
        aria-hidden={!isOpen}
        aria-modal="true"
      >
        <button
          type="button"
          className="ml-auto block h-12 px-4"
          aria-label="サイドメニューを閉じる"
          ref={firstFocusItemRef}
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
        >
          <CloseIcon />
        </button>
        <DrawerContext.Provider value={{ isOpen }}>{children}</DrawerContext.Provider>
      </div>
    </>
  );
});
