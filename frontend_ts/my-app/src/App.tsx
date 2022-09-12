import React from 'react';
import logo from './logo.svg';
import './App.css';

// import logo from './logo.svg';
// import { useState } from 'react';
import DayColumn from './components/DayColumn/DayColumn';
import Scheduler from './components/Scheduler/Scheduler';
// import Task from './components/Task/Task';
import TaskForm from './components/TaskForm/TaskForm';
// import TaskI from './components/Task/TaskInterface';
// import Timeline from './components/timeLine/timeline';
// import './App2.scss';
// import WorkLoadForm from './components/workLoad-form/WorkLoadForm';

interface DayColumnProps {
  day:any

}
interface SchedulerProps{
  leftColumn: any,
  rightColumn: any
}

function App() {
  ////properties/state
  const data_list: any =
  [
    { start: `1:00`, end: `2:00`, name: `seongjin` },
  ];
  
  // const [dataList, setDataList] = useState();
  ///////////////////////////////////// fucntions//////////////////
  function reset(){
    // document.getElementsByClassName(TaskForm).reset();
  }

  function createTask() {
  }

  function editTask(item: any, newInput: string) {
    //
    if((typeof newInput) === 'string')
    if(item.taskName){
      item.taskName = newInput;
    }
    if(item.start){

    }
  }
  function getOneItem(items: [any], name: string) :any {
    let emptyItem: any = {
      start: `1:00`, 
      end: `2:00`, 
      name: `seongjin`
    };
    // find item
    items.forEach((item)=> {
      if(item.name == name){
        return item
      }
    })
    // didn't find item in items
    return emptyItem;
  }

  function renderItem(item: any) {
  }

  function handleDelete(item:any): any{
    return item;
  }

  function handleUpdate(item: any): any{
    return item
  }

  function handleSubmit(item: any): any{
    return item
  }

  ///return components of html
  /*
  items={data_list}
                renderItem={renderItem(getOneItem(data_list, "seonjin"))}
                taskInterface
   */
  return (
    <div className="App">
      <div className="scheduler">
          <div className="day-title"> day 1</div>
        {/* --------------------------------------------------- */}
          <Scheduler
            leftColumn={
              <TaskForm/>
            }
            // rightColumn={
            //   <DayColumn day="monday">

            //   </DayColumn>
            // }
          >
            
          </Scheduler>
          {/* <Scheduler/> */}
          
      </div>
    </div>
  );
}

export default App;


