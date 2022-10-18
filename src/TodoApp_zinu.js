import React, { useState,useRef,useCallback } from "react";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp_zinu = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'TDD 배우기',
            done: false,
        },
        {
            id: 2,
            text: 'react-testing-library',
            done: true,
        }
    ]);
    const nextId = useRef(3);
    const onInsert = useCallback(text => {
        setTodos(
            todos.concat({
                id: nextId.current,
                text,
                done: false,
            })
        );
        nextId.Current += 1;
    },[todos]);
    const onToggle = useCallback(id => {
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)
        );
    }, [todos]);
    return <div>
        <TodoForm onInsert={onInsert}/>
        <TodoList todos={todos} onToggle={onToggle}/>
    </div>;
};

export default TodoApp_zinu;