import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const STARTING_TIME = 5;

  // STATES
  // text area state
  const [text, setText] = useState("");

  // countdown state
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);

  // start game state
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  // word count state
  const [wordCount, setWordCount] = useState(0);

  const startGame = function () {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText(" ");
  };

  const endGame = function () {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  };

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((timeRemaining) => timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
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
      <textarea
        onChange={handleChange}
        disabled={!isTimeRunning}
        value={text}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
