import { useEffect, useLayoutEffect } from "react"

function UseLayout() {


    useEffect(() => {
        console.log("useEffect");
    }, [])

    useLayoutEffect(() => {
        console.log("useLayoutEffect");
    }, [])
    

    return (
        <div>
            <h1>UseLayout</h1>
        </div>
    )
}

export default UseLayout