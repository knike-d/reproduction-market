import { useCallback, useRef, useState } from "react";
import { useFocusHolder } from "@/utils/hooks/accessibility/useFocusHolder.hook";

export const useDrawer = () => {
  const { storeFocusedElement, restoreFocusedElement } = useFocusHolder();
  const [isOpen, setIsOpen] = useState(false);
  const firstFocusItemRef = useRef<HTMLButtonElement | null>(null);

  const handleDrawerOpen = useCallback(() => {
    storeFocusedElement();
    setIsOpen(true);
    if (firstFocusItemRef.current) {
      firstFocusItemRef.current.focus();
    }
  }, [storeFocusedElement]);

  const handleDrawerClose = useCallback(() => {
    setIsOpen(false);
    restoreFocusedElement();
  }, [restoreFocusedElement]);

  return { isOpen, firstFocusItemRef, handleDrawerOpen, handleDrawerClose };
};
