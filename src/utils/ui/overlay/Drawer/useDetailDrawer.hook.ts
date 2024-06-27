import { useCallback, useRef, useState } from "react";

const openKeyframe = { width: ["0", "200%"] };
const closeKeyframe = { width: ["200%", "0"] };
const option: KeyframeAnimationOptions = {
  duration: 200,
  easing: "ease-out",
  fill: "forwards",
};

export const useDetailDrawer = () => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDrawerOpen = useCallback(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;

    drawer.animate(openKeyframe, option);
    setIsOpen((prev) => !prev);
  }, []);

  const handleDrawerClose = useCallback(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;

    drawer.animate(closeKeyframe, option);
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    handleDrawerOpen,
    handleDrawerClose,
    drawerRef,
  };
};
