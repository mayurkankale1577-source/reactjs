import React, { useState } from 'react';


function State() {

//*****norml variable*****

// let count = 0;
//     function increase() {
//         count++;
//         console.log(count); // value changes but UI will NOT update
//       }
    
//       return (
//         <div>
//           <h1>{count}</h1>   {/* UI won't change */}
//           <button onClick={increase}>Increase</button>
//         </div>
//       );


      //****** use state variable********
    //   const [count, setCount] = useState(0);

    //   return (
    //     <div>
    //       <h1>{count}</h1>   {/* UI updates */}
    //       <button onClick={() => setCount(count + 1)}>Increase</button>
    //     </div>
    //   )
 



       //****** toggle example********
       const [isvisible, setIsvisible] = useState(true);
       return (
        <div>
           <button onClick={()=>setIsvisible(!isvisible)}>{isvisible ? "Hide" : "Show"}text</button>
        
           {isvisible &&<p> this is para</p>}
        
        </div>
      )

}
export default State