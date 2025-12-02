


import { useLayoutEffect, useRef, useState } from "react"

function Chat() {
    const chatRef = useRef(null);

    useLayoutEffect(() => {
        chatRef.current.scrollTop=chatRef.current.scrollHeight;
        
    }, [])
    
    return (
        <div>
        <div ref={chatRef}
        style= {{ height:"150px",
            border:"1px solid black",
            overflowY:"scroll"
        }
        }>
 <p>hello</p>
 <p>how are you</p> 
 <p>fine</p>
 <p>how are you</p>
 <p>fine</p> 
 <p>hello</p>
 <p>how are you</p> 
 <p>fine</p>
 <p>how are you</p>
 <p>fine</p> 
 <p>hello</p>
 <p>how are you</p> 
 <p>fine</p>
 <p>how are you</p>
 <p>fine</p>       
        
        
        </div>
        
        </div>
    )
}

export default Chat