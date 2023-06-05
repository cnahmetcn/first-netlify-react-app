import React, {createContext, useState, useContext} from "react";
import {v4 as uuidv4} from 'uuid';

const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [filter, setFilter] = useState("all"); // ["all", "active", "completed"
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Learn React",
            completed: true
        },
    ]);

    const addTodo = (text) => {
        setTodos(prev => [...prev, {id: uuidv4(), text, completed: false}]);
    }

    /**
     * Sabit gelecek olan değerleri burada verdik. id ve completed. Text değeri 
     * kullanıcıdan geleceği için değişkene verdik.
     */

    const toogleTodo = (id) => {
        const cloned_todos = [...todos];

        const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
        const item = todos[itemIndex];
        item.completed = !item.completed;

        setTodos(cloned_todos);
    }

    const destroyTodo = (id) => {
        const cloned_todos = [...todos];
        const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
        cloned_todos.splice(itemIndex, 1);
        setTodos(cloned_todos);
    }

    const values = {
        todos,
        setTodos,
        addTodo,
        toogleTodo,
        destroyTodo,
        filter, 
        setFilter,
    };

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => {
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw new Error("useTodo must be used within a TodoProvider");
    }
    return context;
}