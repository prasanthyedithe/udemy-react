import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const respo = await fetch("https://api.adviceslip.com/advice");
    const data = await respo.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Click me</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return <p>The total Advice are {props.count}</p>;
}
