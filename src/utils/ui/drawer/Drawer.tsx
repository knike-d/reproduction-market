import type { ReactNode } from "react";
import { CloseIcon } from "@/utils/ui/icon/CloseIcon";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Drawer = ({ isOpen, onClose, children }: Props) => {
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
        aria-hidden={!isOpen}
        aria-modal="true"
      >
        <button
          type="button"
          className="ml-auto block h-12 px-4"
          aria-label="サイドメニューを閉じる"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </>
  );
};
