import {useState} from 'react';

const CounterCom = () => {
  const [count, setCount] = useState(0);

  const handleCounter = () =>{
  setCount((prev) => prev + 1);
};
  return (
    <div>
          <button onClick={handleCounter}>Counter</button>
          <p>count: {count} </p>
    </div>
  );
};

export default CounterCom;