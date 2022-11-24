import React ,{useState} from 'react';
import TODO from './todolist'
import Add from "./AddTask"
import Nav from "./navbar"


const  months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
var dummy = [
    {
        task:"DUMMY TASK",
        date:new Date().getDate() + " " + months[new Date().getMonth()] + " " + new Date().getFullYear(),
        day:"Monday",
        id:"0.1",
        sorting: new Date(),
        year: new Date().getFullYear()
    },
]


const App = (props)=>{
    const [tasks,setTasks] = useState(dummy);
    const [years,setYears] = useState([new Date().getFullYear(),])
    const [filter,setFilter] = useState("NONE");
    const newTask = (data)=>{
        setTasks((prevTasks) =>{
            return [data,...prevTasks]
        })
        setYears((prevTasks)=>{
            for(let x of prevTasks){
                if(x===data.year)return [...prevTasks];
            }
            let x = [data.year,...prevTasks]
            x.sort()
            return [...x]
        })
    }

    const filterBy = (event)=>{
        setFilter(event);
    }
    tasks.sort((a, b) => (new Date(a.sorting) - new Date(b.sorting)))
    const removeItUp = (event)=>{
        setTasks((prevTasks) =>{
            for(var x of prevTasks){
                if(x.id===event.target.getAttribute("secretid")){
                    prevTasks.splice(prevTasks.indexOf(x),1);break;
                }
            }
            return [...prevTasks]
        })
    }
    return(
        <>
        <Nav years={years} filter={filterBy}/>
        <div id="body">
        <Add onAddNewTask={newTask}/>
        <h1>TASKS:</h1>
        <TODO items={filter==="NONE"?tasks:tasks.filter(x => x.year==filter)} onRemove={removeItUp}/>
        </div>
        </>
    )
}

export default App;