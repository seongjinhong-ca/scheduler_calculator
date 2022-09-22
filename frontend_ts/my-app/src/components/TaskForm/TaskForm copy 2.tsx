import { ChangeEventHandler, MouseEventHandler, useState } from "react";

async function createTask(taskName: string): Promise<Task> {
    const taskPromise = {
        taskName: taskName,
        _id: Math.random().toString(),
    }
    return taskPromise
}

type Task = {
    taskName: string,
    _id: string,
}

interface TaskFormProps {
    onSubmit?: (task: Task) => void;
}

function TaskForm(props: TaskFormProps) {
    // TO DO: creating Task
    //state
    const [taskName, setTaskName] = useState("");
    const [start, setStart] = useState("");

    const handleSubmit: MouseEventHandler = (event) => {
        event.preventDefault();
        createTask(taskName).then((newTask: Task) => {
            // pass the newTask to parent?
            props.onSubmit?.(newTask);
        });

        return false;
    }

    const changeTaskName: ChangeEventHandler<HTMLInputElement> = (event) => {
        setTaskName(event.currentTarget.value);
    }

    const changeStartTime: ChangeEventHandler<HTMLInputElement> = (event) => {
        setStart(event.currentTarget.value);
    }
    return (
        <div className="content">
            <label htmlFor='name'>
                Name:
                <input type="text" name="task-name" value={taskName} onChange={changeTaskName} />
            </label>
            <label htmlFor='start'>
                start:
                <input type='text' name="start" value={start} onChange={changeStartTime} />
            </label>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>


    )
}
export default TaskForm;