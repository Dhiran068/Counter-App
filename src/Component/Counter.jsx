import { useState } from "react"
import './Counter.css'

const Counter = () => {
    let [count, setCount] = useState(0);
    const number = (count > 0 ? {color: "green"} : count < 0 ? {color: "red"} : {color: "black"}); 
    
    function decrease(){
        setCount(count - 1);
    }

    function increase(){
        setCount(count + 1);
    }

    function reset(){
        setCount(0)
    }

  return (
    <>
        <section>
            <h1>Counter</h1>
            <p style={number}>{count}</p>
            <div>
                <button onClick={decrease}>Decrease</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increase}>Increase</button>
            </div>
        </section>
    </>
  )
}

export default Counter
