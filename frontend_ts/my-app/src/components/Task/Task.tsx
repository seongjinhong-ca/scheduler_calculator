// import * as React from "react"
import React, {useState} from "react";

/*
<div className="info-container"/>
                <div className="info">
                    <p>task:{props.taskName}</p>
                <div/>
                <div className="info"/>
                    author:{props.author}
                <div/>
                <div className="info"/>
                    start:{props.start} - end:{props.end}
                <div/>
            <div/>       

*/
interface TaskProps {
    taskName:string,
    author:string,
    start:string,
    end:string
}
function Task (props:TaskProps) {
    const [tasks, setTasks] = useState();
    const task="Task1";
    const author = "seongjin";
    const start = "11:00am";
    const end = "2:00pm";

    const taskName = props.taskName;
    const authorName = props.author;
    const startTime = props.start;
    const endTime = props.end;


    return (
        <div>
            <h1> This is task component</h1> 
            <div className="info-container">
                task : {props.taskName}<br/>
                author: {props.author}<br/>
                <p> 
                    duration: {props.start} - {props.end}
                </p>
            </div>
        </div>

    )
}

export default Task;