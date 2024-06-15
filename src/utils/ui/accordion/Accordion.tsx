"use client";
import type { ReactNode } from "react";
import { useAccordion } from "@/utils/ui/Accordion/useAccordion.hook";

type props = {
  title: string;
  children: ReactNode;
};
export const Accordion = ({ title, children }: props) => {
  const { isOpen, handleAccordionClick, accordionRef } = useAccordion();

  return (
    <div>
      <button
        aria-controls="contents"
        aria-expanded={!isOpen}
        className="h-14 w-full border pl-10 text-left"
        type="button"
        onClick={handleAccordionClick}
      >
        {title}
      </button>
      <div ref={accordionRef} aria-hidden={!isOpen} className="h-0 overflow-hidden" id="contents">
        <div>{children}</div>
      </div>
    </div>
  );
};
