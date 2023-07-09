import  { useState } from "react";
import { BiChevronDown } from "react-icons/bi";



const Accordion = ({ question, answer })=> {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* question section */}
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="font-medium text-base">{question}</h1>
        <BiChevronDown
          className={`text-base transition-all duration-500 ${
            show ? "rotate-180" : ""
          }`}
        ></BiChevronDown>
      </div>

      {/* answer section */}
        {show && (
          <div
            className="overflow-clip"
          >
            <p className="pt-3 text-sm md:text-base">{answer}</p>
          </div>
        )}
    </>
  );
};

export default Accordion;