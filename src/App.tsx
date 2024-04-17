import {useState} from "react";

function App() {

const [count, setCount] = useState<number>(0);

    function mineCoin() {
        setCount(count+1)
        console.log(count)
    }

  return (
    <>
        <h1>CogeCoin</h1>
        <h2>{count}</h2>
        <button onClick={mineCoin}> Mine Coin</button>
    </>
  )
}

export default App
