import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);
  const [text, setText] = useState("");

  // const handleCountDown = () => {
  //   setInterval(() => {
  //     setCount(count => count - 1);
  //   }, 1000);

  useEffect(() => {
    // const timer =  setInterval(() => counter > 0 && setCounter(counter - 1), 1000);
    // return () => clearInterval(timer);

    // with setTimeOut no need to handle for interval clear at unmount
    setTimeout(() => {
      counter > 0 && setCounter(counter - 1);
    }, 1000);
    const timeoutId = setTimeout(() => {
      console.log(text);
      //some function here
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [text, counter]);

  const handleDebounce = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>{counter}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <input
          type="text"
          name="debounce"
          id="debounce"
          onChange={handleDebounce}
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
