import { ReactNode, useState } from "react";
import styled from "styled-components";

type Task = {
    _id: string;
    name: string;
    start: string;
    end: string;
    task: string;
}
interface DayColumnProps {

    renderItem: (task: Task) => ReactNode;
    tasks: Task[];
}



function DayColumn(props: DayColumnProps) {

    const displayAllTasks = (tasks: Task[]) => {
        return tasks.map((task) => {
            return (
                <div>
                    {props.renderItem(task)}
                </div>
            )
        })
    }
    return (
        <DayColumnStyle>
            {/* {props.id} */}
            <h1>This is DayColumn</h1>
            <br></br>
            {/* props.day = monday */}
            <div className="day-1">
                <div className="timeLine">
                    {displayAllTasks(props.tasks)}
                    <div className="hour9-10">
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