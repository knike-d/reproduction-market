import { useCallback, useState } from "react";

export const useDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, handleDrawerOpen, handleDrawerClose };
};
