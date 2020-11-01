import React from 'react';
import './App.css';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/visibleTodoList';
import Filters from './Fiilters';

const App = () => (
    <div style={{height:'100%'}}>
        <div className="titleofproject">
            <h1>To DO LIST</h1>
        </div>
        <div className="completediv">
            <div className="adddiv"><AddTodo /><Filters/></div>

            <div className="visibilitydiv"><TodoList /></div>           
        </div>
    </div>
);
export default App;