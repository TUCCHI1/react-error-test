import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // 2つ目のhookを、値を返すかもしれない条件の上に移動させた。
  // これでhookが呼び出される順番がレンダリングの度に同じであるのでエラーが発生しない。
  const [message, setMessage] = useState("");

  if (counter > 0) {
    return <h1>Hello</h1>;
  }

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>count +1</button>
    </div>
  );
}

export default App;
