import { useCallback, useState } from "react"

function UseCallback() {

    const [count, setCount] = useState(0);

//without call back

    // const increment =() =>{
    //     setCount((prev) => prev + 1)
    //     console.log("increment");
    // }


//with use callback
    const increment = useCallback(() =>{
        setCount((prev) => prev + 1)
        console.log("increment");
    },[])

    return (
        <div>
            <h1>UseCallback</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default UseCallback