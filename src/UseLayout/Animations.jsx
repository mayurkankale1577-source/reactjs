import { useLayoutEffect, useRef, useState } from "react"

function Animations() {
    const boxRef = useRef(null);

    useLayoutEffect(() => {
        const el=boxRef.current;
        const width= el.offsetWidth;
         el.style.transform=`translateX(${width}px)`
    }, [])
    
    return (
        <div>
        <div ref={boxRef}
        style= {{color: "blue",
        padding: "20px",
          backgroundColor: "red", 
        transition: "3s"}
        }>
        This is animated box</div>
        
        </div>
    )
}

export default Animations