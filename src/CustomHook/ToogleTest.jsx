import useToogle from "./useToogle"

function ToogleTest() {
    const [isopen, toogleOpen] = useToogle()
    const [istest, toogleTest] = useToogle()
    return (
        <div> 
            <button onClick={toogleOpen}>Toogle1</button>
            {isopen && <div> is open opened</div>}


            <button onClick={toogleTest}>Toogle2</button>
            {istest && <div>is test opened</div>}
        </div>
    )
}
export default ToogleTest