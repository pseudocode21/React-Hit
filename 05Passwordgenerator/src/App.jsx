import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  // ref Hook -
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
    setCopied(true); // show alert

    setTimeout(() => {
      setCopied(false); // hide after 2 sec
    }, 2000);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_+-=~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-2xl px-6 py-4 my-10 bg-gray-800 text-white">
        <h2 className="text-lg font-semibold text-center mb-4 text-orange-400">
          Generated Password
        </h2>
        <div className="flex items-center bg-white text-black rounded-lg overflow-hidden shadow-inner">
          <input
            type="text"
            value={password}
            readOnly
            className="outline-none w-full py-1 px-3 bg-transparent text-lg tracking-wide"
            placeholder="Password"
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 hover:cursor-pointer transition text-sm font-medium text-white"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 mt-3 ml-5">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
      {copied && (
        <p className="text-green-500 font-medium mt-2 text-center">
          ✅ Copied to clipboard!
        </p>
      )}
    </>
  );
}

export default App;
