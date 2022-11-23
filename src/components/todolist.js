import React from 'react';
import TODO from "./toDoElement"
import "./todolist.css"

const Todolist = (props)=>{
    const remove = (event) =>{
        props.onRemove(event);
    }
    

    return(<div id = "tasks">
 {props.items.map(tasks => (<TODO task = {tasks.task} date = {tasks.date} day = {tasks.day} id={tasks.id} onRemove={remove}/>))}

    </div>);
}


export default Todolist;