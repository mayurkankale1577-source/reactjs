
 import React, { useMemo, useState } from 'react'
function Parent() {
    const [count, setCount] = useState(0);
     const user=useMemo(() => ({ name: "John", age: 30 }), []);
     console.log("Parent Rendered");
    return (
        <div>
            <h1>Parent Component {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Child   user={user} />
        </div>
    )
}

const Child =React.memo(({ user }) => {
    console.log("Child Rendered");
    return (
        <div>
            <h2>Child Component</h2>
            <p>Name: {user.name}</p>
          
        </div>
    )
})

export default Parent