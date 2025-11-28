
 
import { useState } from 'react'
function UseMemo() {

    const [count, setCount] = useState(0);
    const [ text, setText] = useState("");

    const expensiveCalculation = () => {
        console.log("expensive calculation");
        let total=0;
        for(let i=0;i<1000000000;i++)
        {
            total+=i;
          

        }
        return total;     
    }

    const result =expensiveCalculation();

    return (
        <div>
            <h1>without usememo</h1>
            <h2>result: {result}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <h3>Count: {count}</h3>
        </div>
    )
}

export default UseMemo