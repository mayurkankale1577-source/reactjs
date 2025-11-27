import { useState } from "react"

function StateLifting() {
    return (
        <div>
            <ParentComponent />
        </div>
    )
}

export default StateLifting

function ParentComponent() {
    const [ text, setText ] = useState("");
     
    
    return (
        <div>
           <ChildComponent onChange={setText} />
           <h1> come to child:{text}</h1>
        </div>
    )
}

function ChildComponent({onChange}) {
    return (
        <div>
             <input type="text" onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}