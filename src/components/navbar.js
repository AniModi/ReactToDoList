import React from 'react';
import "./navbar.css"

const NavBar = (props)=>{
    const selectHandler = (event)=>{
        props.filter(event.target.value);
    }
    return (<>
    <nav>
        <div id="left"></div>
        <div id="title">
            {"TO-DO-LIST"}
        </div>
        <div id="select">
            <select onChange={selectHandler}>
                <option value={"NONE"}>{"----Sort by year----"}</option>
                <option value={"NONE"}>{"No filter"}</option>
                {props.years.map(x=><option value={x}>{x}</option>)}
            </select>
        </div>
    </nav>
    </>);
}

export default NavBar;