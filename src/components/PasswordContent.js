import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { useCopyToClipboard } from "usehooks-ts";
import { motion } from "framer-motion";

const PasswordContent = ({ generatedPassword }) => {
  let password;
  if (generatedPassword === "") {
    password = "P4sSW0rD!#";
  } else {
    password = generatedPassword;
  }

  // PASSWORD COPY
  const [value, copy] = useCopyToClipboard();

  // COPIED ANIMATION
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    copy(password);
    setIsCopied(true);

    //back to grey after 2s
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="flex items-center w-full h-16 p-2 bg-[#24232A]">
      <div className="flex-shrink w-full h-full px-4">
        <p
          className={`flex items-center w-full h-full text-2xl  ease-in-out ${
            isCopied === true ? "text-[#abf4b6] ease-in-out" : "text-gray-600"
          }`}
        >
          {password}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={handleCopyClick}
        className="flex items-center justify-center w-20 h-full cursor-pointer text-white hover:text-[#abf4b6]"
      >
        <MdContentCopy style={{ fontSize: "20px" }} />
      </motion.div>
    </div>
  );
};

export default PasswordContent;
