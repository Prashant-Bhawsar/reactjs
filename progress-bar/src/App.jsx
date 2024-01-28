import { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setCompleted] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 10 : 100
      );
    }, 100);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <>
      <div className="app">
        <span> Progress Bar</span>
        <ProgressBar value={progress} onComplete={setCompleted} />
        {isCompleted ? "Completed!" : "Loading..."}
      </div>
    </>
  );
}

export default App;
