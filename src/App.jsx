import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  let date = new Date("jan 12 2018");
  date.setDate(date.getDate() + count);
  return (
    <>
      <Main />
    </>
  );
}

export default App;
