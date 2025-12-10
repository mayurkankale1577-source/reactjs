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
import Formhandling from "./formhandling/Formhandling"
import State from "./statemanagement/State"
import Todoapp from "./todoapp/Todoapp"
import Useefect from "./useeffecthook/Useefect"
import Routerr from "./router/Routerr"
import { BrowserRouter, Routes, Route, Link,useParams,useNavigate,Outlet } from "react-router-dom"
import PropDriling from "./PropsDrilling/PropDriling"
import StateLifting from "./PropsDrilling/StateLifting"
import SharedStates from "./PropsDrilling/SharedStates"
import SharingStatbetweenComponent from "./PropsDrilling/SharingStatbetweenComponent"
import UseContextHook from "./useContextHook/UseContextHook"
import UseContextTheemcolor from "./useContextHook/UseContextTheemcolor"
import UseReducerr from "./useReducer/UseReducerr"
import Form from "./useReducer/Form"
import UseMemo from "./UseMemo/UseMemo"
import WithUseMemo from "./UseMemo/WithUseMemo"
 
import UseCallback from "./UseCallback/UseCallback"
import Parent from "./UseCallback/Parent"
import UseLayout from "./UseLayout/UseLayout"
import Example from "./UseLayout/Example"
import Animations from "./UseLayout/Animations"
import Chat from "./UseLayout/Chat"
import ToogleTest from "./CustomHook/ToogleTest"
import User from "./CustomHook/User"
import LoginForm from "./CustomHook/LoginForm"
import Greeting from "./higherOrderComponent/Greeting"
import GreetingWithStyle from "./higherOrderComponent/GreedingWithStyle"
import PoslistWithData from "./higherOrderComponent/PostListWithData"
import AppDashboard from "./higherOrderComponent/AppDashboard"
 
 
 
function App() {

//***router part functions
//   function User() {
//     console.log(useParams())
//       const {id}=useParams()
//       return (
//           <h1>user id is {id}</h1>
//       )
      
//   }

//   function NotFount() {
//     return (
//         <h1>page not found</h1>
//     )
// }

// const navigate=useNavigate();
//     function gototodoapp(){
//         navigate("/todoapp")
//     }


  const hobbys=["cricket","football","hockey"]
  return (
    <>
       <h1>App Component @</h1>
       {/* <Mayur />
       <Styling />
       <Func />
       <Arrayobj />
       <Conditional />
       <Propss name="sager"  age={20} hobbys={hobbys} />
        <State/>
        <Formhandling />
        <Todoapp />
        <Useefect />
        <PropDriling />
        <StateLifting />
        <SharedStates />
        <SharingStatbetweenComponent />
        <UseContextHook />
        <UseContextTheemcolor />
         
          <UseReducerr />
          <Form />
          <UseMemo />
          <WithUseMemo />
          <Parent />
          <Routerr />
          <UseCallback />
         <Parent />
         <UseLayout />
         <Example />
          <Animations />
          <Chat />
          <ToogleTest />
          <User />
          <LoginForm />
          <Greeting name="sager" />
          <GreetingWithStyle  name="sager"/> */}
          <PoslistWithData />
          <AppDashboard />
           
    </>

 // router part start here
//     <BrowserRouter>
//     <nav>
//  <Link to="/"  > Maur </Link>
//  <Link to="/styling">  Styling </Link>
//  <Link to="/user/10">  User </Link>
//  </nav>
//         <Routes>
//             <Route path="/" element={<Mayur />} />
//             <Route path="/styling" element={<Styling />} />
//             <Route path="/user/:id" element={<User />}/>
//             <Route path="/todoapp" element={<Todoapp/>} >
//             <Route path="conditional" element={<Conditional />} />
//             </Route>
//             <Route path="*" element={<NotFount />} />
//         </Routes>
//     </BrowserRouter>
    
  )
}

export default App
