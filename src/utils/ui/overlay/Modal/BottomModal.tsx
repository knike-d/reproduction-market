"use client";
import type { ForwardedRef, ReactNode } from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { useFocusTrap } from "@/utils/hooks/accessibility/useFocusTrap.hook";
import { useKeyEvent } from "@/utils/hooks/accessibility/useKeyEvent.hook";
import { useToggleBodyFixed } from "@/utils/hooks/uiControl/useToggleBodyFixed";
import { CloseIcon } from "@/utils/ui/Icon/CloseIcon";
import { FixedOverlay } from "@/utils/ui/overlay/FixedOverlay";

type Props = {
  contentsId: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const BottomModal = forwardRef(function Modal(
  { contentsId, isOpen, onClose, children }: Props,
  contentsRef: ForwardedRef<HTMLElement>,
) {
  const modalContentsRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(contentsRef, () => modalContentsRef.current!);

  useToggleBodyFixed(isOpen);
  useKeyEvent("keydown", "Escape", onClose);
  useFocusTrap(modalContentsRef, isOpen);

  return (
    <>
      <FixedOverlay isOpen={isOpen} onClose={onClose} />
      <div
        ref={modalContentsRef}
        aria-hidden={!isOpen}
        className={`fixed bottom-0 z-overlay-content flex h-5/6 w-full max-w-2xl flex-col overflow-y-auto overscroll-y-contain bg-white font-normal text-black transition-transform duration-300 ${isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"}`}
        id={contentsId}
        role="dialog"
        aria-modal
      >
        <button
          aria-label="サイドメニューを閉じる"
          className="ml-auto block h-12 flex-none px-4"
          tabIndex={isOpen ? 0 : -1}
          type="button"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </>
  );
});
