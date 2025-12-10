import { useState, useEffect, lazy, Suspense } from "react"

const Post = lazy(() => import('./Post'))

function Apppost() {

     
const [ showpost, setShowpost] = useState(false)


    return(
    
    <div>
    <button onClick={() => setShowpost(true)}>Show Post</button>

    {showpost && (
        
        <Suspense fallback={<div>Loading...</div>}>
        <Post/>
        </Suspense>
    )
        }

    </div>
)
}

export default Apppost

