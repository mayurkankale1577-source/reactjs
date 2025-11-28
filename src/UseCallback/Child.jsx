import React from 'react'

function Child( {click}) {
    console.log("child rendered");
    return (
        
        <div>
          
            <button onClick={click}>child button</button>
        </div>
    )
}

export default React.memo(Child)