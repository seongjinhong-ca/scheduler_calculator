import { PromiseProvider } from "mongoose";
import { ChangeEvent, ChangeEventHandler, FormEvent, MouseEventHandler, useState } from "react";

async function createTask(task: Omit<Task, '_id'>): Promise<Task> {
    const taskPromise = {
        ...task,
        _id: Math.random().toString(),
    }
    return taskPromise;
}

interface TaskFormProps {
    onSubmit?: (newTask: Task) => void;
}

type Task = {
    _id: string;
    name: string;
    start: string;
    end: string;
    task: string;
}

function TaskForm(props: TaskFormProps) {
    // TO DO: creating Task
    //state
    const [task, setTask] = useState({
        name: '',
        start: '',
        end: '',
        task: '',


    });

    const handleSubmit: MouseEventHandler = (event) => {
        event.preventDefault();
        createTask(task).then((newTask: Task) => {
            props.onSubmit?.(newTask);
        })

        return
    }
    const changeTaskName: ChangeEventHandler<HTMLInputElement> = (event) => {
        setTask({
            ...task,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    }
    const handleChangeStart: ChangeEventHandler<HTMLInputElement> = (event) => {

    }
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setTask({
            ...task,
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    //https://devtrium.com/posts/react-typescript-using-generics-in-react
    const handler: ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
        // const e = event.target;
        // console.log(event);
        setTask({
            ...task,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    }
    return (
        //https://www.w3schools.com/jsref/event_onsubmit.asp
        <form
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                createTask(task).then((newTask: Task) => {
                    // pass the task to parent
                    props.onSubmit?.(newTask);
                });
                return false;
            }}
            method="GET"
        >
            <label htmlFor='name'>
                Name
                <input id="nameInput" onChange={handler} value={task.name} name='name' />
            </label>
            <label htmlFor='start'>
                Start
                <input id="startInput" onChange={handler} value={task.start} name='start' />
            </label>
            <label htmlFor='end'>
                End
                <input id="endInput" onChange={handler} value={task.end} name='end' />
            </label>
            <label htmlFor='task'>
                Task
                <input id="taskInput" onChange={handler} value={task.task} name='task' />
            </label>
            <button type="submit">
                Submit
            </button>
        </form>


    )
}
export default TaskForm;