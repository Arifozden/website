import {useState, useEffect} from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);
  
  useEffect(() => {
    console.log("guncellendi");

    const interval = setInterval(() => {
      setNumber((number) => number + 1);
    }, 1000);

    return () => {clearInterval(interval);
    };

  }, []);
  useEffect(() => {
    console.log("guncellendi");
  }, [number]);
  
  return (

    <div>
        <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <hr />
    </div>
  )
}
