function Arrayobj() {

    const furits=[1,2,3,4,5,6,7,8,9,10]

    const myobj={
        firstname:"mayur",
        lastname:"kankale",
        age:20
    }


    const arrayofobj=[
        {
            firstname:"mayur",
            lastname:"kankale",
            age:30
        },
        {
            firstname:"rahul",
            lastname:"kankale",
            age:40
        },
        {
            firstname:"mahesh",
            lastname:"kankale",
            age:50
        }
    ]
    return (
        <>
            <h1>Array</h1>
            <ul>
            {furits.map((item,index)=>(
                
                    <li>{index} - {item}</li>
                
            ))}
            </ul>
            
            <h1>object</h1>
            <p>{myobj.firstname}</p>
            <p>{myobj.lastname}</p>
            <p>{myobj.age}</p>

            <h1>array of object</h1>
            <ul>
            {arrayofobj.map((item,index)=>(
                
                    <li>{index} - {item.firstname} {item.lastname} {item.age}</li>
                
            ))}
            </ul>
        </>

    

    )
    
}
export default Arrayobj