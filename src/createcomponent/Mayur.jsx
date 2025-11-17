


import firstImg from "../assets/img1.jpg"
import './mayur.css'
function Mayur(){
    const firstvar = "Mayur"

    return(
        <>
        <h1 className="test"> This Mayur Component</h1>
        <img src={firstImg} alt="" width="200px"/>
        <h1> Welcome To {firstvar} Patil</h1>
        </>
    )
}
export default Mayur