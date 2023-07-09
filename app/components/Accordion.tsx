"use client";

import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

interface Props {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="border-b pb-4">
      {/* question section */}
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center gap-2 cursor-pointer"
      >
        <h1 className="font-medium text-base">{question}</h1>

        <span
          className={`shrink-0 text-base transition-all duration-500 ${
            show ? "rotate-180" : ""
          }`}
        >
          {show ? <BiMinus /> : <BiPlus />}
        </span>
      </div>

      {/* answer section */}
      {show && (
        <div className="overflow-clip ">
          <p className="pt-3 text-sm md:text-base">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
