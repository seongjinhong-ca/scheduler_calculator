import React, { useState } from "react";
import DayColumn from "../DayColumn/DayColumn";

function Scheduler(props: any) {

    return (
        <div className="container">
            this is scheduler
            <br></br>

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