import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // ↓Hookが実行される前に返されるかもしれない値
  if (counter > 0) {
    return <h1>Hello</h1>;
  }

  // 値を返す可能性のある条件文の後にフックを使用した場合、以下のエラーが発生する。
  // Rendered fewer hooks than expected.
  // This may be caused by an accidental early return statement
  const [message, setMessage] = useState("");

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>count +1</button>
    </div>
  );
}

export default App;
