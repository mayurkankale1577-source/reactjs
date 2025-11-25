import {useState} from "react"
import { Outlet } from "react-router-dom"

function Todoapp() {

const [newTodo, setNewTodo] = useState("");
const [todos, setNewtodos] = useState([]);


const handleSubmit = (e) => {
    e.preventDefault();
    if(newTodo)
    {
    setNewtodos([...todos, {text: newTodo, completed: false}]);
    setNewTodo("");
    }
    
}

const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setNewtodos(newTodos);
    
}

    return (
        <div>

            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                 placeholder="Add a todo"
                value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />

                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                      <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>  {todo.text}</span>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>

            <Outlet/>
        </div>
    )
}

export default Todoapp;