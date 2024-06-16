import { useCallback, useRef, useState } from "react";
import { FOCUSABLE_ELEMENTS } from "@/utils/constants/accessibility/focusableElements";
import { useFocusHolder } from "@/utils/hooks/accessibility/useFocusHolder.hook";

export const useOverlayContent = () => {
  const { storeFocusedElement, restoreFocusedElement } = useFocusHolder();
  const [isOpen, setIsOpen] = useState(false);
  const overlayContentsRef = useRef<HTMLDivElement>(null);

  const handleOverlayOpen = useCallback(() => {
    storeFocusedElement();
    setIsOpen(true);
    if (overlayContentsRef.current) {
      const firstItem = overlayContentsRef.current.querySelector<HTMLElement>(FOCUSABLE_ELEMENTS.join());
      firstItem?.focus();
    }
  }, [storeFocusedElement]);

  const handleOverlayClose = useCallback(() => {
    setIsOpen(false);
    restoreFocusedElement();
  }, [restoreFocusedElement]);

  return { isOpen, overlayContentsRef, handleOverlayOpen, handleOverlayClose };
};
