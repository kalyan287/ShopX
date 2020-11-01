import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';

//To make actions on the todolist entered => onChange will call toggleTodo and removeTodo will call handleRemoveTodo
//from the below map it will search for the id of selected from todos

const TodoList = ({ todos, toggleTodo, handleRemoveTodo }) => (
    <div>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onChange={()=>toggleTodo(todo.id)} RemoveTodo={()=>handleRemoveTodo(todo.id)}/>   
        ))}
    </div>
);
export default connect()(TodoList);