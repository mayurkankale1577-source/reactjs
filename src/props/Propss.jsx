

// function Propss(props) {

//     return (
//         <>
//             <h1> hellow {props.name}</h1>
//         </>
//     )
// } 


// distuctinh props  print array value
function Propss({name="mayur", age, hobbys}) {

    return (
        <>
            <h1> my name is {name}</h1>
            <h1> my age is {age}</h1>

            <ul>
                {hobbys.map((hobby,i)=><li key={i}>{hobby}</li>)}
            </ul>
        </>
    )
}


export default Propss