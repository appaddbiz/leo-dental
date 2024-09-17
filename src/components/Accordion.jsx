import { createContext, useContext, useRef, useEffect, useState } from "react";
import { ChevronDown } from "react-feather";

const AccordianContext = createContext();

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;

  const ref = useRef(null);

  return (
    <li className="border-b  border-reds" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 lg:px-10 font-medium  lg:text-2xl mt-5"
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform text-[#DFAD73] ${
            open ? "rotate-180" : ""
          }`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all font-normal  lg:text-xl"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-1 p-4 px-10" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
