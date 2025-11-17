


function Func() {

const handleinput=(e)=>alert(e.target.value)
const handleDoubleClick=()=>console.log("double click")
const handlemouseOver=()=>console.log("mouse over")

    function getName(yourname) {
        return yourname,
        alert(yourname)
    }
const name="mayur kankale"
    return (
        <>
            <h1> hellow {getName(name)}</h1>
            <button onClick={getName}>click Me</button><br></br>
            <button onClick={()=>alert("hello")}>click Me</button>
            <input type="text" onChange={handleinput}></input>
            <p onDoubleClick={handleDoubleClick}>double click</p>
            <p onMouseOver={handlemouseOver}>mouse over</p>
        </>
    )
}
export default Func