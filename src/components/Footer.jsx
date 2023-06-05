import React from 'react'
import {useTodo} from '../contexts/TodoContext'

function Footer() {
    const {todos, filter, setFilter, setTodos} = useTodo();

    const clearCompleted = () => {
        const cloned_todos = [...todos];
        const new_todos = cloned_todos.filter((todo) => todo.completed === false);
        setTodos(new_todos);
    }
  return (
    <footer className="footer">
        <span className="todo-count">
            <strong>{todos.length} </strong>
            item{todos.length > 1 ? 's' : ''} left
        </span>

        <ul className="filters">
            <li>
                <a href="#/" onClick={()=>setFilter('all')} className={filter === 'all' ? 'selected' : ''}>All</a>
            </li>
            <li>
                <a href="#/" onClick={()=>setFilter('active')} className={filter === 'active' ? 'selected' : ''}>Active</a>
            </li>
            <li>
                <a href="#/" onClick={()=>setFilter('completed')} className={filter === 'completed' ? 'selected' : ''}>Completed</a>
            </li>
        </ul>

        <button className="clear-completed" onClick={()=>clearCompleted()}>
            Clear completed
        </button>
    </footer>   
  )
}

export default Footer