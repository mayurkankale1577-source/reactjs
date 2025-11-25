

function Conditional() {

const isLogin=false

// 1 using className
return (
    <>
    {/* <div className={isLogin ? "visible" : "unvisible"}> Hello Mayur</div>
    <div className={isLogin ? "unvisible" : "visible"}> Hello Guest</div> */}
  
    </>
)


// 2 using ternary operator
// return(

//     <>
//     <div>{isLogin ? <h1> Hello Mayur</h1> : <h1> Hello Guest</h1>}</div>
//     </>
// )



// 3 using if else

// let message
//      if(isLogin){
//         message= <h1> Hello Mayur</h1>
//      }
//      else{
//         message= <h1> Hello Guest</h1>
//      }

//      return(
//         <>
//        <div>{message}</div>
//         </>
//      )

}

export default Conditional