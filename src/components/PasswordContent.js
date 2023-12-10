import React from "react";
import { MdContentCopy } from "react-icons/md";

const PasswordContent = () => {
  return (
    <div className="flex items-center w-full h-16 p-2 bg-[#24232A]">
      <div className="flex-shrink w-full h-full px-4">
        <p className="flex items-center w-full h-full text-2xl text-gray-200">
          P4sSW0rD!#
        </p>
      </div>
      <div className="flex items-center justify-center w-20 h-full cursor-pointer">
        <MdContentCopy style={{ color: "#FFFFFF", fontSize: "20px" }} />
      </div>
    </div>
  );
};

export default PasswordContent;
