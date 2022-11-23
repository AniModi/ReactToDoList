import React ,{useState} from 'react';
import TODO from './todolist'
import Add from "./AddTask"

var dummy = [
    {
        task:"DUMMY TASK",
        date:"1 January 2001",
        day:"Monday",
        id:"0.1"
    },
]


const App = (props)=>{
    const [tasks,setTasks] = useState(dummy);
    const newTask = (data)=>{
        setTasks((prevTasks) =>{
            return [data,...prevTasks]
        })
    }
    const removeItUp = (event)=>{
        setTasks((prevTasks) =>{
            for(var x of prevTasks){
                if(x.id===event.target.getAttribute("secretid")){
                    prevTasks.splice(prevTasks.indexOf(x),1);break;
                }
            }
            console.log(...prevTasks);
            return [...prevTasks]
        })
    }
    return(
        <>
        <Add onAddNewTask={newTask}/>
        <h1>TASKS:</h1>
        <TODO items={tasks} onRemove={removeItUp}/>
        </>
    )
}

export default App;