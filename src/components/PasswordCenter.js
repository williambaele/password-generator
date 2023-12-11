import React, { useEffect, useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";

const PasswordCenter = ({ updateGeneratedPassword }) => {
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

  const handleCheckboxClick = (value) => {
    const updatedConfig = new Set(passwordConfig);

    if (updatedConfig.has(value)) {
      updatedConfig.delete(value);
    } else {
      updatedConfig.add(value);
    }

    setPasswordConfig(updatedConfig);
  };

  // PASSWORD STRENGTH
  // PASSWORD STRENGTH
  const [passwordStrength, setPasswordStrength] = useState("WEAK");
  const [strengthColor, setStrengthColor] = useState("#FF0000");

  // ...

  useEffect(() => {
    let strength = "WEAK";

    if (passwordConfig.has(1) && passwordConfig.has(2)) {
      strength = "STRONG";
    } else if (
      passwordConfig.has(1) ||
      passwordConfig.has(2) ||
      passwordConfig.has(3) ||
      passwordConfig.has(4)
    ) {
      strength = "MEDIUM";
    }

    setPasswordStrength(strength);

    // Update strength color based on the strength
    if (strength === "MEDIUM") {
      setStrengthColor("#FFA500");
    } else if (strength === "STRONG") {
      setStrengthColor("#008000");
    } else {
      setStrengthColor("#FF0000");
    }
  }, [passwordConfig]);

  // PASSWORD GENERATING
  const randomNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const randomSymbols = ["!", "_", "-", "?", "&", "#"];
  const randomUpperLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const randomLowerLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const generatePassword = () => {
    const selectedCharacters = [];

    if (passwordConfig.has(1)) selectedCharacters.push(...randomUpperLetters);
    if (passwordConfig.has(2)) selectedCharacters.push(...randomLowerLetters);
    if (passwordConfig.has(3)) selectedCharacters.push(...randomNumbers);
    if (passwordConfig.has(4)) selectedCharacters.push(...randomSymbols);

    if (selectedCharacters.length === 0) {
      // No options selected, return an empty password
      setGeneratedPassword("");
      return;
    }

    let password = "";
    const charactersLength = selectedCharacters.length;

    for (let i = 0; i < rangeValue; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      password += selectedCharacters[randomIndex];
    }

    updateGeneratedPassword(password);
  };

  // GENERATED PASSWORD
  const [generatedPassword, setGeneratedPassword] = useState("");

  return (
    <div className="p-4 space-y-4 bg-[#24232A] h-max py-4">
      <div className="flex justify-between w-full">
        <p className="text-2xl text-gray-400">Character length</p>
        <p className="text-2xl text-[#ABF4B6] font-bold">{rangeValue}</p>
      </div>
      <div className="range">
        <input
          type="range"
          min="0"
          max="20"
          onChange={(e) => setRangeValue(e.target.value)}
          value={rangeValue}
          id="range2"
          className="w-full bg-red-200"
        />
      </div>
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <div className="flex gap-4 text-lg text-gray-400" key={index}>
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
          <p style={{ fontSize: "1.3rem", color: strengthColor }}>
            {passwordStrength}
          </p>
        </div>
      </div>
      <div
        onClick={generatePassword}
        className="border border-[#ABF4B6] cursor-pointer bg-[#ABF4B6] text-gray-900 hover:text-[#ABF4B6] hover:bg-transparent hover:border hover:border-[#ABF4B6] flex items-center justify-center p-3 gap-4"
      >
        <p className="text-2xl">GENERATE</p>
        <MdArrowRightAlt style={{ fontSize: "20px" }} />
      </div>
      <div className="mt-4 text-xl text-gray-400">
        {generatedPassword && `Generated Password: ${generatedPassword}`}
      </div>
    </div>
  );
};

export default PasswordCenter;
