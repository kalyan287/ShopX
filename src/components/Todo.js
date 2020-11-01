import React from 'react';
import { handleRemoveTodo } from '../actions';
import './App.css'

// Todo Component to create each todo

const Todo = ({RemoveTodo,onChange,text,completed}) => {
    console.log(RemoveTodo,onChange,completed,text);
    return (
    <div style={{display:"flex", padding:"10px"}}>

        <div ><input type="checkbox" onChange={onChange} /></div>
        <div style={{fontWeight:"bold",marginLeft:"15px",marginRight:"50px",textDecoration: completed ? 'line-through':'none'}}>{text}</div>  
        <button className="DeleteButton" onClick={()=>{console.log(handleRemoveTodo)}}>X</button>

    </div>);
    };

export default Todo;
