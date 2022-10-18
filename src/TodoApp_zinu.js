import React from "react";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp_zinu = () => {
    return <div>
        <TodoForm />
        <TodoList todos={[]}/>
    </div>;
};

export default TodoApp_zinu;