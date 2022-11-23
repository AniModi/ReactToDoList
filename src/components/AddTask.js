import React , {useState} from 'react';
import "./AddTask.css";

const AddTask = (props)=>{
    const days = ["Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const  months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const [task,setTask] = useState('');
    const [date,setDate] = useState('');

    const AddNewTask = ()=>{
        console.log("HI");
    }

    const dateEvent = (event)=>{
        setDate(event.target.value);
    }
    const taskEvent = (event)=>{
        setTask(event.target.value);
    }
    const prevRefresh = (event)=>{
        event.preventDefault();
        const newTask = {
            task: task,
            date: new Date(date).getDate() + " " + months[new Date(date).getMonth()] + " " + new Date(date).getFullYear(),
            day:days[new Date(date).getDay()-1],
            id:Math.random().toString()
        }
        props.onAddNewTask(newTask);
        setDate('');
        setTask('');
    }


    return(
        <form id="addBody" onSubmit={prevRefresh}>
            <label htmlFor="Task">{"Please enter the task here: "}
            </label>
            <input type = "text" id="Task" value = {task} onChange={taskEvent}></input>
            <label htmlFor="date">{"Please enter the date here: "}
            </label>
            <input type = "date" id="date" onChange={dateEvent} value={date}></input>
            <input type = "submit" value={"Add Task"} onClick={AddNewTask}></input>
        </form>
    );
}
export default AddTask;