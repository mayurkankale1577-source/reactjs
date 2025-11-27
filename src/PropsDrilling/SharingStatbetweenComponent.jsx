import { useState } from "react"

function SharingStatbetweenComponent() {
    return (
        <div>
            <ParentComponent />
        </div>
    )
}

export default SharingStatbetweenComponent


function ParentComponent() {

    const [count, setCount] = useState(0)
    return (
        <div>
             <ChildA  setCount={setCount}/>
             <ChildB  count={count} />
        </div>
    )
}

function ChildA( props) {
     const handleClick = () => {
         props.setCount((prevCount) => prevCount + 1)
     }
    
    return (
        <div>
            <h1>ChildA</h1>
            <button onClick={handleClick}>increase</button>
        </div>
    )
}

function ChildB( props) {
    return (
        <div>
            <h1>count: {props.count}</h1>
        </div>
    )
}