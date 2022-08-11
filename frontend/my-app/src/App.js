// import logo from './logo.svg';
import './App.css'; 
import Timeline from './components/timeLine/timeline';
// import './App2.scss';
import WorkLoadForm from './components/workLoad-form/WorkLoadForm';

function App() {
  return (
    <div className="App">
      <div className="scheduler">
          <div className="day-title"> day 1</div>
          <WorkLoadForm/>
          <Timeline/>
          <div className="task-option">
            this is task-option components: 
            <button className="t1">t1</button>
            <button className="t1">t2</button>
            <button className="t1">t3</button>
            <button className="t1">t4</button>
          </div>
        </div>
      
    </div>
  );
}

export default App;
