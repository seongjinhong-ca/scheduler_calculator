import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';

// function
async function createTask(task: Omit<Task, '_id'>): Promise<Task> {
  // TODO: Add some API implementation
  return {
    ...task,
    _id: (Math.random() * 50000).toString(),
  }
}

// type 
type Task = {
  _id: string;
  name: string;
  start: string;
  end: string;
  task: string;
}

// interface
interface TaskFormProps {
  onSubmit?: (newTask: Task) => void;
}

//---component == object == class == function component
function TaskForm(props: TaskFormProps) {
  //state
  const [ task, setTask ] = useState({
    name: '',
    start: '',
    end: '',
    task: '',
  });

  //--method of class or object
  const handler: ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
    const e = event.target;
    console.log(event);
    setTask({
      ...task,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    //clear data inside the input
  }
//--return
/*
<form
// event = onSubmit
onSubmit = {function that does onSumbit event}
>
<label htmlFor='name'>
<input onChange={handler} value name/>
<button></button>
</form>


*/
  return (
    <form
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createTask(task).then((newTask: Task) => {
          props.onSubmit?.(newTask);
        });
        return false;
      }}
      method="GET"
    >
      <label htmlFor='name'>
        Name
        <input id="nameInput" onChange={handler} value={task.name} name='name'/>
      </label>
      <label htmlFor='start'>
        Start
        <input id="startInput" onChange={handler} value={task.start} name='start'/>
      </label>
      <label htmlFor='end'>
        End
        <input id="endInput" onChange={handler} value={task.end} name='end'/>
      </label>
      <label htmlFor='task'>
        Task
        <input id="taskInput" onChange={handler} value={task.task} name='task'/>
      </label>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

export default TaskForm;