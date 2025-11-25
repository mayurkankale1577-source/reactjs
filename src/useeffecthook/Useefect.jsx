import { useEffect, useState} from 'react'
function Useefect() {

    const [count, setCount] = useState(0);
    // ******************run after every render*******************
    // useEffect(() => {
    //    console.log("component rendered");
    //   });

    //    // run after first render
    // useEffect(() => {
    //     console.log("component rendered");
    //    } , []);
 

    //  ******************// run after when change of count valye only*****
    // useEffect(() => {
    //     console.log("component rendered");
    //    } , [count]);
 

    // return (

    //     <div>
    //         <h2>You clicked {count} times</h2>
    //         <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    //     </div>
        
    // )



// //************************use clin up function*********************

// const [seconds, setSeconds] = useState(0);
// useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds(seconds => seconds + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);


//    return (
//        <>
//        <h1>{seconds}</h1>
//        </>
//    )



// *************************fetch data*********
const [users, setUsers] = useState([]);
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json));
  }, []);


  return (
      <>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} {user.email}</li>
        ))}
      </ul>
      </>
  )

}

export default Useefect