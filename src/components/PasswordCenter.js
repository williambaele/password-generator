import React, { useEffect, useState } from "react";

const PasswordCenter = () => {
  // OPTIONS
  const options = [
    { name: "Include Uppercase Letters", value: 1 },
    { name: "Include Lowercase Letters", value: 2 },
    { name: "Include Numbers", value: 3 },
    { name: "Include Symbols", value: 4 },
  ];

  // RANGE VALUE
  const [rangeValue, setRangeValue] = useState(0);

  // PASSWORD CONFIG
  const [passwordConfig, setPasswordConfig] = useState(new Set());

  // Function to handle checkbox click
  const handleCheckboxClick = (value) => {
    const updatedConfig = new Set(passwordConfig);

    // Toggle the value in the Set
    if (updatedConfig.has(value)) {
      updatedConfig.delete(value);
    } else {
      updatedConfig.add(value);
    }

    setPasswordConfig(updatedConfig);
  };

  // PASSWORD STRENGTH
  const [passwordStrength, setPasswordStrength] = useState("WEAK");

  useEffect(() => {
    let strength = "WEAK";
    //SVG COLOR

    if (passwordConfig.has(1)) {
      strength = "WEAK";
    } else if (passwordConfig.has(2)) {
      strength = "MEDIUM";
    } else if (passwordConfig.has(3) || passwordConfig.has(4)) {
      strength = "STRONG";
    }

    setPasswordStrength(strength);
  }, [passwordConfig]);

  return (
    <div className="p-2 space-y-4 bg-[#24232A] h-max py-4">
      <div className="flex justify-between w-full">
        <p className="text-xl text-[#ABF4B6]">Character length</p>
        <p className="text-xl text-[#ABF4B6] font-bold">{rangeValue}</p>
      </div>
      <div className="range">
        <input
          type="range"
          min="0"
          max="50"
          onChange={(e) => setRangeValue(e.target.value)}
          value={rangeValue}
          id="range2"
          className="range-input"
        />
      </div>
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <div className="flex gap-4 text-gray-400" key={index}>
            <label
              className="container flex gap-2"
              onClick={() => handleCheckboxClick(option.value)}
            >
              <input
                type="checkbox"
                checked={passwordConfig.has(option.value)}
              />
              {option.name}
              <span className="checkmark"></span>
            </label>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between p-4 bg-[#18171F]">
        <p className="text-xl text-gray-400">STRENGTH</p>
        <div className="flex items-center justify-between gap-2">
          <p className="text-xl text-gray-400">{passwordStrength}</p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((item) => (
              <svg key={item} width="6" height="25">
                <rect
                  width="6"
                  height="25"
                  fill="#FFFFFF" // Use the fill property directly
                  stroke="#FFFFFF"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <div className="border border-[#ABF4B6] flex items-center justify-center p-2">
        <p className="text-[#ABF4B6]">GENERATE</p>
      </div>
    </div>
  );
};

export default PasswordCenter;
