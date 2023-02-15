
import './App.css';
import {useState }from 'react'
import TodoList from './components/TodoList/TodoList'

function App() {

  const [list, setList]=useState([]);
  const [value,setValue]=useState("");
  function handleADD(event)
  {
    setList([...list,value]);
    console.log(list);
    setValue("")
  }
  return (
    <div className="App">
      <div className='heading'>
      <h1 className="head">ToDo LIST</h1>
      <h1 className='head'>Practice</h1>
      </div>
      <div className='input'>
      <input className='bar' placeholder='Add Task' type='text' value={value} onChange={(event)=>{setValue(event.target.value)}}></input>
    
       <button className='bar' onClick={handleADD}>Add</button>
      </div>
      <div className='list'>
        <TodoList list={list} setList={setList}/>
      </div>
    </div>
  );
}

export default App;