
function PropDriling() {

    return (
        <ParentComponent/>
    )
}


function ParentComponent() {
    const userName = "mayur";
    return (
        <div>
            <ChildComponent userName={userName} />
        </div>
    )
}



function ChildComponent(props) {
    return (
        <div>
            <GrandChildComponent userName={props.userName} />
        </div>
    )
}

function GrandChildComponent(props) {
    return (
        <div>
        
            <p>may name is {props.userName}</p>
        </div>
    )
}


export default PropDriling