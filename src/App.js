import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // STATES
  // text area state
  const [text, setText] = useState("");

  // countdown state
  const [timeRemaining, setTimeRemaining] = useState(2);

  // start game state
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  // word count state
  const [wordCount, setWordCount] = useState(0);

  const startGame = function () {
    setIsTimeRunning(true);
  };

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((timeRemaining) => timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false);
      setWordCount(calculateWordCount(text));
    }
  }, [timeRemaining, isTimeRunning]);

  const handleChange = function (e) {
    setText(e.target.value);
  };

  const calculateWordCount = function (text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  };

  return (
    <div>
      <h1>How fast can you type</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => setIsTimeRunning(true)}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
