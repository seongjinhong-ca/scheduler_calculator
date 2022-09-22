import { ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import { getAllJSDocTagsOfKind } from 'typescript';
import './App.css';
import DayColumn from './components/DayColumn/DayColumn';
import Scheduler from './components/Scheduler/Scheduler';
import TaskForm from './components/TaskForm/TaskForm';

type Task = {
  _id: string;
  name: string;
  start: string;
  end: string;
  task: string;
}

function App() {
  ////properties/state
  const data_list: any =
    [
      { start: `1:00`, end: `2:00`, name: `seongjin` },
    ];


  const [tasks, setTasks] = useState<Task[]>([]);

  const passToDayCol = (task: Task) => {
    return task;
  }

  const onsubmit = (task: Task) => {
    // update the task info
    setTasks([...tasks, task]);

  }


  return (

    <ChakraProvider>
      <div className="App">
        <div className="scheduler">
          <div className="day-title"> day 1</div>
          <Scheduler
            leftColumn={<TaskForm onSubmit={onsubmit} />}
            // OnSubmit={onsubmit}
            rightColumn={<DayColumn tasks={tasks} renderItem={(task: Task) => {
              return (
                <div className={task._id}>
                  author: {task.name}
                  start-end: {task.start} - {task.end}
                  task name : {task.task}
                </div>
              )
            }} />}
          >

          </Scheduler>

        </div>
      </div>
    </ChakraProvider>

  );
}

export default App;


