import React from 'react'
import {useTodo} from '../../contexts/TodoContext'

let filtered = null;
function List() {
    const {todos, destroyTodo, toogleTodo, filter} = useTodo();

    const onChange = (id) => toogleTodo(id);
    const onDestroy = (id) => destroyTodo(id);

    filtered = todos;
    if(filter !== "all") {  
        filtered = todos.filter((todo) => 
            filter === "active" 
                ? todo.completed === false
                : todo.completed === true
        );
    }


    return (
        <ul className="todo-list">
            {
                filtered.map((todo) => (
                    <li key={todo.id} className={todo.completed ? "completed" : ''} >
                    <div className="view">
                        <input className="toggle" type="checkbox" checked={todo.completed } onChange={()=>onChange(todo.id)}/>
                        <label>{todo.text}</label>
                        <button className="destroy" onClick={()=>onDestroy(todo.id)}></button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default List