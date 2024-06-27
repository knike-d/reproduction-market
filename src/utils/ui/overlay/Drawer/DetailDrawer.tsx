"use client";

import type { ForwardedRef, ReactNode } from "react";
import { forwardRef } from "react";
import { useKeyEvent } from "@/utils/hooks/accessibility/useKeyEvent.hook";

type Props = {
  drawerContentsId: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const DetailDrawer = forwardRef(function Drawer(
  { drawerContentsId, isOpen, onClose, children }: Props,
  contentsRef: ForwardedRef<HTMLDivElement>,
) {
  useKeyEvent("keydown", "Escape", onClose);

  return (
    <div
      ref={contentsRef}
      aria-hidden={!isOpen}
      aria-modal="true"
      className="z-overlay-content w-0 overflow-y-auto overscroll-y-contain border-b bg-white"
      id={drawerContentsId}
      role="dialog"
    >
      {children}
    </div>
  );
});
