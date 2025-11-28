import { createContext, useContext } from 'react'

const UserContext = createContext();


function UseContextHook() {

    const name = {name:"mayur kankale", age:20}
    return (
        <div>
              <UserContext.Provider value={name}>
                 <Parent />
              </UserContext.Provider>

            
        </div>
    )
}

function Parent() {
    return (
        <div>
             <Child />
        </div>
    )
}

function Child() {
    const username = useContext(UserContext);
    return (
        <div>
            <h1>my name is {username.name} and age is {username.age}</h1>
            <GrandChild />
        </div>
    )
}

function GrandChild() {
    const { name, age } = useContext(UserContext);
    return (
        <div>
            <h1>my name is {name} and age is {age}</h1>
        </div>
    )
}


export default UseContextHook