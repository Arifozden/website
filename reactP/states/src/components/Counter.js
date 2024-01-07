import {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };
    const decrease = () => {
        setCount(count - 1);
    };
  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
    </div>
  )
}
