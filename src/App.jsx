// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Arrayobj from "./arrayandobj/Arrayobj"
import Conditional from "./conditionalrendaring/Conditional"
import Mayur from "./createcomponent/Mayur"
import Styling from "./cssstyling/Styling"
import Func from "./functoonevent/Func"
import Propss from "./props/Propss"


function App() {

  const hobbys=["cricket","football","hockey"]
  return (
    <>
       <h1>App Component</h1>
       {/* <Mayur />
       <Styling />
       <Func />
       <Arrayobj />
       <Conditional /> */}
       <Propss name="sager"  age={20} hobbys={hobbys} />
       
    </>
  )
}

export default App
