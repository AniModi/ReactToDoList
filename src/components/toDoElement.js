import React from "react";
import "./toDoElement.css";

const toDoElement= (props)=>{
    const deleteTask = (event)=>{
        props.onRemove(event);
    }
    return(
        <div id="taskBox">
            <div id="dayDate">
                <div id="dateInput">{props.date}</div>
                <div id="day">{props.day}</div>
            </div>
            <div id="taskBody">
                <div id="task">{props.task}</div>
                <button id="remove" onClick={deleteTask} secretid={props.id}>{"Remove task"}</button>
            </div>
        </div>
    );
}

export default toDoElement;