import { createContext, useContext, useState } from 'react'

const ThemContext=createContext();
function UseContextTheemcolor() {

    const [theme, setTheme] = useState("light");
    return (
        <div>
            <ThemContext.Provider value={{theme, setTheme}} >
                <Toolbar />
            </ThemContext.Provider>
        </div>
    )
}

function Toolbar() {
    
    return (
        <div>
            <ThemeButton />
        </div>
    )
}

function ThemeButton() {
    const {theme, setTheme} = useContext(ThemContext);
    return (
        <div>
            <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            style={{backgroundColor: theme === "light" ? "black" : "white",
            color: theme === "light" ? "white" : "black"
            }}
            >current theme is {theme}</button>
         </div>
    )
}
export default UseContextTheemcolor