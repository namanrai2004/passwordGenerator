import { useRef, useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [length, setLength] = useState(-1);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordReff = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordReff.current?.select();
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <Navbar />

      <div className="w-full max-w-xl mx-auto rounded-2xl px-4 py-6 my-32 bg-gray-200 text-gray-800 flex flex-col justify-center items-center shadow-2xl border-2 sm:px-6 sm:py-8 lg:px-8 ">
        <h1 className="text-gray-800 text-center my-3 text-2xl font-bold sm:text-3xl lg:text-4xl">
          Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex flex-col w-full mb-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 text-base sm:text-lg bg-white rounded-xl shadow-sm border focus:ring-2 focus:ring-blue-600"
            placeholder="Password"
            readOnly
            ref={passwordReff}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="font-semibold flex justify-center items-center text-white px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg sm:text-lg"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-col w-full space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          {/* Length Control */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-2">
            <label className="text-sm font-semibold text-gray-800 sm:text-base">
              Length:
            </label>
            <input
              type="range"
              min={-1}
              max={99}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer mt-2 sm:mt-0"
            />
            <span className="ml-2 text-sm font-semibold sm:text-base">
              {length}
            </span>
          </div>

          {/* Numbers Allowed */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="cursor-pointer"
            />
            <label
              htmlFor="numberInput"
              className="text-sm font-semibold text-gray-800 sm:text-base"
            >
              Numbers
            </label>
          </div>

          {/* Special Characters Allowed */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
              className="cursor-pointer"
            />
            <label
              htmlFor="characterInput"
              className="text-sm font-semibold text-gray-800 sm:text-base"
            >
              Characters
            </label>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default App;
