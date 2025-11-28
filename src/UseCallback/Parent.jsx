
import { useCallback, useState } from "react"
import Child from "./Child";

function Parent() {

    const [count, setCount] = useState(0);


//with use callback
    const handleClick = useCallback(() =>{
         console.log("button clicked");
    },[])

    return (
        <div>
            <h1>UseCallback</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount((prev) => prev + 1)}> parent button</button>
            <Child click ={handleClick}/>
        </div>
    )
}

export default Parent