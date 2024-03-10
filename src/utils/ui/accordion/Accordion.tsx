"use client";
import type { ReactNode } from "react";
import { useAccordion } from "@/utils/ui/accordion/useAccordion.hook";

type props = {
  title: string;
  children: ReactNode;
};
export const Accordion = ({ title, children }: props) => {
  const { isOpen, handleAccordionClick, accordionRef } = useAccordion();

  return (
    <div>
      <button
        type="button"
        className="h-14 w-full border pl-10 text-left"
        aria-controls="contents"
        aria-expanded={!isOpen}
        onClick={handleAccordionClick}
      >
        {title}
      </button>
      <div id="contents" className="h-0 overflow-hidden" aria-hidden={!isOpen} ref={accordionRef}>
        <div>{children}</div>
      </div>
    </div>
  );
};
