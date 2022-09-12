// import * as React from "react"
import React, {useState} from "react";
import DayColumn from "../DayColumn/DayColumn";
import Task from "../Task/Task";
import TaskForm from "../TaskForm/TaskForm";
// import DayColumn from "../DayColumn/DayColumn";
// import TaskForm from "../TaskForm/TaskForm";

// interface schedulerProps{
//     leftColumn:any,
//     rightColumn:any
// }

function Scheduler(props: any) {

    // managing state
    const [count, setCount] = useState();
    
    return (
        <div className="container">
            this is scheduler
            <br></br>
            {/* <TaskForm id="11111TaskForm"/>
            <br></br>
            <DayColumn id="111111dayColumn">
              
            </DayColumn> */}
            <div className="form">
                {props.leftColumn}
            </div>
            <div className="DayColumn">
                {props.rightColumn}
            </div>
            
        </div>
    )
    
}

export default Scheduler;