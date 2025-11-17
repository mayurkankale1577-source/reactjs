
import styles from "./Styling.module.css"


function Styling() {

    const headingstyle = {
        color: "red",
        backgroundColor: "pink",
         textAlign: "center",
         fontSize: "50px"

    }
        return (
            <>
                <h1 style={headingstyle}>variable css</h1>
                <h2 style={{color: "green", backgroundColor: "yellow"}}>Inline css</h2>
                <h2 className={styles.test}>external css</h2>
            </>
        )
    }
    
    export default Styling