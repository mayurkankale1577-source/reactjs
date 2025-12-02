import { useLayoutEffect, useRef, useState } from "react"


function Example() {
const boxRef = useRef(null);
const [height, setHeight] = useState(0);

useLayoutEffect(() => {
    setHeight(boxRef.current.clientHeight);
    
}, [])


    return (
        <div>
        <div ref={boxRef} style= {{color: "red",padding: "20px",width: "200px"}}>Example</div>
        <p>Height: {height}</p>
        </div>
    )
}

export default Example