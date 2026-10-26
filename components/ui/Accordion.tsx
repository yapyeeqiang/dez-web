"use client";

import { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
};

export default function Accordion({
  items,
  allowMultiple = false,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      }

      return allowMultiple ? [...prev, index] : [index];
    });
  };

  return (
    <div className="w-full divide-y divide-neutral-200">
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        const panelId = `accordion-panel-${index}`;
        const triggerId = `accordion-trigger-${index}`;

        return (
          <div key={item.title} className="py-1">
            <button
              id={triggerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(index)}
              className="group flex w-full items-center justify-between gap-6 py-5 text-left hover:cursor-pointer"
            >
              <span className="text-lg font-medium text-neutral-900 group-hover:text-[#B08D4F] group-hover:cursor-pointer md:text-xl">
                {item.title}
              </span>

              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xl text-neutral-700 group-hover:border-[#B08D4F] group-hover:text-[#B08D4F] group-hover:cursor-pointer"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              className={isOpen ? "block" : "hidden"}
            >
              <p className="pb-5 pr-12 leading-7 text-neutral-600">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
