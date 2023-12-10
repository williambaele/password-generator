import PasswordCenter from "./components/PasswordCenter";
import PasswordContent from "./components/PasswordContent";

function App() {
  return (
    <div className="h-screen bg-[#040404] flex items-center justify-center px-4 md:px-0">
      <div className="w-full p-4 space-y-4 md:w-1/3 h-2/3">
        <h1 className="text-3xl text-center text-gray-400">
          Password generator
        </h1>
        <PasswordContent />
        <div className="flex-grow">
          <PasswordCenter />
        </div>
      </div>
    </div>
  );
}

export default App;
