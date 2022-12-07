import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

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
      <textarea onChange={handleChange} />
      <h4>Time remaining: </h4>
      <button onClick={() => calculateWordCount(text)}>Start</button>
      <h1>Word count:</h1>
    </div>
  );
}

export default App;
