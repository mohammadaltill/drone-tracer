import { useState } from "react";

export default function CustomRadioGroup({ options = [], onChange, otherStyles }) {
  const [selected, setSelected] = useState(options[0]?.value);

  const handleClick = (value) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className={`flex flex-row gap-8 border-b border-gray-700 ${otherStyles}`}>
      {options.map((option) => {
        const isActive = selected === option.value;

        return (
          <button
            key={option.value}
            onClick={() => handleClick(option.value)}
            className={`
              relative pb-2 cursor-pointer text-lg font-medium transition-colors duration-200
              ${isActive ? "text-white" : "text-gray-400 hover:text-gray-200"}
            `}
          >
            {option.label}

            {/* underline */}
            {isActive && (
              <span className="absolute left-0 -bottom-[2px] w-full h-[3px] bg-red-600 rounded"></span>
            )}
          </button>
        );
      })}
    </div>
  );
}
