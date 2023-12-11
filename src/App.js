import { useState } from "react";
import PasswordCenter from "./components/PasswordCenter";
import PasswordContent from "./components/PasswordContent";

function App() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const updateGeneratedPassword = (password) => {
    setGeneratedPassword(password);
  };

  return (
    <div className="h-screen bg-[#040404] flex items-center justify-center px-4 md:px-0">
      <div className="w-full p-4 space-y-4 md:w-1/3 h-2/3">
        <h1 className="text-3xl text-center text-gray-400">
          Password generator
        </h1>
        <PasswordContent generatedPassword={generatedPassword} />
        <div className="flex-grow">
          <PasswordCenter updateGeneratedPassword={updateGeneratedPassword} />
        </div>
      </div>
    </div>
  );
}

export default App;
