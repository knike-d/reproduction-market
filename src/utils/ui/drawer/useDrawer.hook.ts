import { useCallback, useRef, useState } from "react";
import { FOCUSABLE_ELEMENTS } from "@/utils/constants/accessibility/focusableElements";
import { useFocusHolder } from "@/utils/hooks/accessibility/useFocusHolder.hook";

export const useDrawer = () => {
  const { storeFocusedElement, restoreFocusedElement } = useFocusHolder();
  const [isOpen, setIsOpen] = useState(false);
  const contentsRef = useRef<HTMLElement>(null);

  const handleDrawerOpen = useCallback(() => {
    storeFocusedElement();
    setIsOpen(true);
    if (contentsRef.current) {
      const firstItem = contentsRef.current.querySelector<HTMLElement>(FOCUSABLE_ELEMENTS.join());
      firstItem?.focus();
    }
  }, [storeFocusedElement]);

  const handleDrawerClose = useCallback(() => {
    setIsOpen(false);
    restoreFocusedElement();
  }, [restoreFocusedElement]);

  return { isOpen, contentsRef, handleDrawerOpen, handleDrawerClose };
};
