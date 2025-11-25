import React, { useState } from 'react';


function State() {

//***** 1 norml variable*****

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


      //****** 2  use state variable********
    //   const [count, setCount] = useState(0);

    //   return (
    //     <div>
    //       <h1>{count}</h1>   {/* UI updates */}
    //       <button onClick={() => setCount(count + 1)}>Increase</button>
    //     </div>
    //   )
 



       //****** 3 toggle example********
      //  const [isvisible, setIsvisible] = useState(true);
      //  return (
      //   <div>
      //      <button onClick={()=>setIsvisible(!isvisible)}>{isvisible ? "Hide" : "Show"}text</button>
        
      //      {isvisible &&<p> this is para</p>}

                  
        
      //   </div>

      // )

 //****** 4 object value pass example********
//  const [obj, setObj] = useState({firstname:"mayur", lastname:"kankale", age:20});


// return (

//     <div>
//         <h1>{obj.firstname}</h1>
//         <h1>{obj.lastname}</h1>
//         <h1>{obj.age}</h1>
//         <button onClick={()=>setObj({...obj,firstname:"rahul"})}>change name</button>
//     </div>
// )
//******  set form value input tag example********
const [formdata, setFormdata] = useState({name:"", email:""});

return (
    <div>
        <h1>{formdata.name}</h1>
        <h1>{formdata.email}</h1>
        <input type="text" onChange={(e)=>setFormdata({...formdata,name:e.target.value})}></input>
        <input type="text" onChange={(e)=>setFormdata({...formdata,email:e.target.value})}></input>
    </div>
)

}
export default State