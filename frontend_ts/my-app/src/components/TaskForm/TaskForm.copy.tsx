import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';

// function
// async function always returns promise
async function createTask(task:Omit<Task, 'id'>):Promise<Task>{
  // TODO: Add some API implementation
  const taskPromsie = {
    ...task,
    id: Math.random().toString()
  }
   
  return taskPromsie;
}

async function getTask(){
  
}
// type 


// interface
interface TaskFormCopyProps {
  onSubmit: (newTask: Task) => void;
}

type Task = {
  id:string,
  name:string,
  start:string,
  end:string,
  task:string
}
//---component == object == class == function component
function TaskFormCopy(props: TaskFormCopyProps) {
  //state
  const [task, setTask] = useState(
    {
      name:'',
      start:'',
      end:'',
      task:''
    }
  );

  //--method of class or object ---React.FormEvent<HTMLButtonElement>
  const handleSubmit = (event:React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    createTask(task).then((taskCreated:Task) => {
      props.onSubmit(taskCreated)
    });
    return false;
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
      <button type="submit" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  )
}

export default TaskFormCopy;