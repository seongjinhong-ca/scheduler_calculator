import React from 'react';
import './WorkLoadForm.css';

function WorkLoadForm (){
    return (
        // <div className="scheduler">
        //   <div className="day-title"> day 1</div>
        // ref: https://ko.reactjs.org/docs/forms.html
          <div className="workLoad-form">
            {/* <form>
              <label for="task">ender task name</label>
              <input type="text" id='task'>
              <label for="name">enter name</label>
              <input type="text" id="name">
              <label for="time-start">start time:</label>
              <input type="text" id="time-start">
              <label for="time-end">end time:</label>
              <input type="text" id="time-end">
              <button>SUbmit</button>
            </form> */}
            <form>
              <label>
                enter task name:
                <input type="text" name='task'/>
              </label>
              <label for="name">enter name:
                <input type="text" name="name"/>
              </label>
              <label for="time-start">start time:
                <input type="text" name="time-start"/>
              </label>
              <label for="time-end">end time:
                <input type="text" name="time-end"/>
              </label>
  
              <button>Submit</button>
            </form>
          </div>
        // </div>

    )
 }
 
 export default WorkLoadForm;