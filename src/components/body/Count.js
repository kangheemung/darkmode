import {useState} from 'react'

function Count() {
    const [count, setCount] = useState(0);
    function handleIncrement() {

        setCount(count + 1);
      }
    return (
    <div>
        <button onClick={handleIncrement}>count</button>
        <p>Count: {count}</p>
    </div>
  )
}

export default Count