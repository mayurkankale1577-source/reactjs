import { useState } from "react"
function SharedStates() {
    return (
        <div>
            <ParentComponent />
        </div>
    )
}

export default SharedStates


function ParentComponent() {
    const [ text, setText ] = useState("");
     
    
    return (
        <div>
           <ChildComponent onChange={setText} />
            <Display value={text} />
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

function Display({value}) {
    return (
        <div>
            <h1> come to child:{value}</h1>
        </div>
    )
}