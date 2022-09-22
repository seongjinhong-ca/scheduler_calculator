import { ChangeEventHandler, MouseEventHandler, useState } from "react";

async function createTask(task: Omit<Task, '_id'>): Promise<Task> {
    const taskPromise: Task = {
        ...task,
        _id: Math.random().toString(),
    }
    return taskPromise;
}

type Task = {
    taskName: string,
    _id: string,
}

interface TaskFormProps {
    onSubmit?: (newTask: Task) => void;
}

function TaskForm(props: TaskFormProps) {
    // TO DO: creating Task
    //state
    const [taskName, setTaskName] = useState({
        taskName: '',
    });

    const handleSubmit: MouseEventHandler = (event) => {
        event.preventDefault();
        createTask(taskName).then((newTask: Task) => {
            props.onSubmit?.(newTask);
        })

        return
    }

    const changeTaskName: ChangeEventHandler<HTMLInputElement> = (event) => {
        setTaskName({
            ...taskName,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }
    return (
        <div className="content">
            <input type="text" name="task-name" value={taskName.taskName} onChange={changeTaskName} />
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>


    )
}
export default TaskForm;