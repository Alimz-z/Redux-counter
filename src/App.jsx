import { useState } from "react";
import "./App.css";
import Counter1 from "./counter1";
import Counter2 from "./counter2";
function App() {
  const [counter , setCounter] = useState(0);
  return (
    <>
      <Counter1 />
      <Counter2 />
    </>
  );
}

export default App;
