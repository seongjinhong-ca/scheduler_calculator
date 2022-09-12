import * as React from "react"
// import React from "react";
import Task from "../Task/Task";
// import styles from './DayColumn.css'
import styled from "styled-components";



interface TaskProps {
    taskName:string,
    author:string,
    start:string,
    end:string
}
interface DayColumnProps {
    day:any

}
function getTaskInfo():TaskProps{
    let task = {taskName:"t1", author:"seongjin", start:"8:00", end:"9:00"}
    return task
}

function initTaskInfo():TaskProps{
    let task = {taskName:"t0", author:"N/A", start:"00:00", end:"00:00"}
    return task
}
function DayColumn(props:DayColumnProps) {

    // item


    return (
        <DayColumnStyle>
            {/* {props.id} */}
            <h1>This is DayColumn</h1>
            <br></br>
            {/* props.day = monday */}
            <div className={props.day}>
                <div className="timeLine">
                    <div className="hour8-9">
                        {/* <Task taskProps={getTaskInfo()}>

                        </Task> */}
                        <Task taskName="t1" author="seongjin" start="8:00" end="9:00"/>
                    </div>
                    <div className="hour9-10">
                        <Task
                        taskName={initTaskInfo().taskName} 
                        author={initTaskInfo().author} 
                        start={initTaskInfo().start} 
                        end={initTaskInfo().end}
                        />
                    </div>
                    <div className="hour10-11"></div>
                    <div className="hour11-12"></div>
                </div>
            </div>
        </DayColumnStyle>
    )
}

// css : styled component
const DayColumnStyle = styled.div`
    border:solid black
`

export default DayColumn;