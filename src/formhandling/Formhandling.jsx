import { useState,useRef } from 'react'
function Formhandling() {

                    // ******* 1 simple form hadling*********

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");

    // const handleSubmit= (e)=>{
    //     e.preventDefault();
    //     console.log(name,email);
    // }


    // return (
    //    <form onSubmit={handleSubmit}>
    //   <lable>name:</lable>
    //   <input type="text" 
    //   value={name}
    //   onChange={(e)=>setName(e.target.value)}>
    //   </input>

    //   <lable>email:</lable>
    //   <input type="email"
    //    value={email} 
    //    onChange={(e)=>setEmail(e.target.value)}>
    //    </input>

    //   <button type="submit">submit</button>
    //    </form>
    // );


                  // ****2 multiple input form hadling****** 

    // const [formdata, setFormData] = useState({name:"",email:"",age:""});

    // const handleSubmit= (e)=>{
    //     e.preventDefault();
    //     console.log(formdata);
    // }

    // const handleChange=(e)=>{
    //     const{name,value}=e.target;
    //     setFormData(prevData=>({...prevData,[name]:value}))
    // }

    // return (
    //     <form onSubmit={handleSubmit}>
    //    <label>name:</label>
    //    <input type="text" 
    //    name='name'
    //    value={formdata.name}
    //    onChange={handleChange}>
    //    </input><br/>
 
    //    <label>email:</label>
    //    <input type="email"
    //     name='email'
    //     value={formdata.email} 
    //     onChange={handleChange}>
    //     </input><br/>

    //     <label>age</label>
    //     <input type="number" 
    //     name='age'
    //     value={formdata.age}
    //     onChange={handleChange}>
    //     </input><br/>
 
    //    <button type="submit">submit</button>
    //     </form>
    //  );

           //***** 3 multiple input type check and select form hadling***********

    //  const [formdata, setFormData] = useState({gender:"",agree:"false",contry:"india"});
    //  const handleSubmit= (e)=>{
    //     e.preventDefault();
    //     console.log(formdata);
    // }
    // const handleChange=(e)=>{
    //     const{name, type,value,checked}=e.target;
    //     setFormData(prevData=>({...prevData,
    //         [name]:type==="checkbox"?checked:value}))
    // }

    //  return (
    //     <form onSubmit={handleSubmit}>
    //    <label>Male</label>
    //    <input type="radio"
    //    name="gender" 
    //    value="male" 
    //    checked={formdata.gender==="male"}
    //    onChange={handleChange}>
    //    </input>
    //    <br></br>
    //    <label>Female</label>
    //    <input type="radio" 
    //    name="gender" 
    //    checked={formdata.gender==="female"}
    //    value="female" 
    //    onChange={handleChange}>
    //    </input>
    //    <br/>

    //    <label>agree:</label>
    //    <input type="checkbox" 
    //    name="agree" 
    //    checked={formdata.agree}
    //    onChange={handleChange}>
    //    </input>

    //    <br/>
    //    <label>contry:</label>
    //    <select name="contry"
    //    value={formdata.contry} 
    //    onChange={handleChange}>
    //     <option value="india">india</option>
    //     <option value="us">us</option>
    //     <option value="canada">canada</option>
    //    </select>
    //    <br/>
    //    <button type="submit">submit</button>
    //     </form>
    //  );
              //*********** 4 uncontrolled form handling can be done using refs*********
//    const nameRef=useRef(null);
//    const emailRef=useRef(null);

//    const handleSubmit= (e)=>{
//     e.preventDefault();
//     console.log("Name :",nameRef.current.value);
//     console.log( "Email:",emailRef.current.value);
     
// }
   
//    return (
//     <form onSubmit={handleSubmit}>  
//     <input type="text" ref={nameRef}></input>
//     <input type="email" ref={emailRef}></input>
//     <button type="submit">submit</button>
//     </form>
//    );

             // ********* 5 basic validation form handling  ********

const  [name ,setName]= useState("")
const  [email ,setEmail]= useState("")
const  [error ,setError]= useState("")

const handleSubmit= (e)=>{
    e.preventDefault();
    if(!name || !email){
        setError("feild is required");
        return;
    }
    else{
        setError("");
        console.log("Name :",name);
        console.log( "Email:",email);
        alert("form submitted");
    }
    
}

return (
    <form onSubmit={handleSubmit}> 
        <input type="text" onChange={(e)=>setName(e.target.value)}></input>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}></input>
       {error && <p style={{color:"red"}}>{error}</p>}
        <button type="submit">submit</button>
    </form>
)

}

export default Formhandling