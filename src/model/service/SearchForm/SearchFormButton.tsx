import type { ComponentProps, ReactNode } from "react";

type Props = {
  "aria-controls": ComponentProps<"button">["aria-controls"];
  isOpen: boolean;
  onOpen: () => void;
  children: ReactNode;
};

export const SearchFormButton = ({ "aria-controls": ariaControls, isOpen, onOpen, children }: Props) => {
  return (
    <button
      aria-controls={ariaControls}
      aria-expanded={!isOpen}
      className="h-14 w-11/12 rounded-md border p-4 text-left text-black"
      type="button"
      onClick={onOpen}
    >
      {children}
    </button>
  );
};
