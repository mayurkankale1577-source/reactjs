import { useReducer } from "react"

function Form() {

function reducer(state, action) {
    switch(action.type) {
        case "username":
            return {...state, username: action.payload}
        case "email":
            return {...state, email: action.payload}
        default:
            return state
    }
}



 const [ formData, dispatch] = useReducer(reducer, {
    username:"",
    email:""
})

    return (
         <form>
            <input type="text" placeholder="username" value={formData.username} onChange={(e) => dispatch({type:"username", payload: e.target.value})} />
            <input type="email" placeholder="email" value={formData.email} onChange={(e) => dispatch({type:"email", payload: e.target.value})} />

            <p> username: {formData.username}</p> <p> email: {formData.email}</p>
         </form>
    )
}
export default Form