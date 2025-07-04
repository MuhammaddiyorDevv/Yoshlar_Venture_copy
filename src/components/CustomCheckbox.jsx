"use client";
import { Check } from "lucide-react";

const CustomCheckbox = ({ id, checked, onChange, label }) => {
  return (
    <div className="flex gap-4 items-center">
      <label htmlFor={id} className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`
            w-8 h-8 rounded-lg border-2 border-[#F28E46] 
            flex items-center justify-center
            transition-all duration-300 cursor-pointer
            ${checked ? "bg-[#F28E46] text-white" : "bg-transparent text-transparent hover:bg-[#F28E46]/10"}
          `}
        >
          <Check size={16} className={checked ? "opacity-100" : "opacity-0"} />
        </div>
      </label>
      <label htmlFor={id} className="cursor-pointer text-black dark:text-white">
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
