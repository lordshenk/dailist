import React, { useState} from 'react';
import Upcoming from './Upcoming.js';
import Finished from './Finished.js';
import EmptyTask from './EmptyTask.js';

function TodoApp() {
  if(!localStorage.getItem('tasks')) {
    localStorage.setItem('tasks', JSON.stringify([]))
  }
  const [ tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));
  const [ isModalOpen, setModalOpen] = useState(false);
  const [ input, setInput] = useState('');
  function handleClick(ind) {
    return function(e) {
      if(e.target.className !== 'delete-btn') {
        let tasksListUpdated = 
          [
            ...tasks.slice(0, ind),
            { name: tasks[ind].name, isComplete: !tasks[ind].isComplete},
            ...tasks.slice(ind + 1)
          ];
        setTasks(tasksListUpdated);
        localStorage.setItem('tasks', JSON.stringify(tasksListUpdated));
      }
    }
  }
  function handleDel(ind) {
    return function(e) {
      if(e.target.className === 'delete-btn') {
        let tasksListUpdated = [ ...tasks.slice(0, ind), ...tasks.slice(ind + 1)];
        setTasks(tasksListUpdated);
        localStorage.setItem('tasks', JSON.stringify(tasksListUpdated));
      }
    }
  }
  function handleOpenModal(e) {
    setModalOpen(true);
  }
  function handleCloseModal(e) {
    if(e.target.className === 'modal') {
      setModalOpen(false);
    }
  }
  function handleClickInput(e) {
    e.target.value = '';
  }
  function handleChange(e) {
    let input = e.target.value.trim();
    if(input.length !== 0) input = input[0].toUpperCase() + input.slice(1);
    setInput(input);
  }
  function handleAddTask() {
    if(input.length !== 0) {
      let tasksUpdated = [ ...tasks, { name: input, isComplete: false}]
      setTasks(tasksUpdated);
      localStorage.setItem('tasks', JSON.stringify(tasksUpdated));
      setModalOpen(false);
    }
  }
  return(
    <div className='todo-app'>
      <h1>DAILIST</h1>
      {tasks.length !== 0 && <p className='title'>UPCOMING</p>}
      {tasks.map( (e, ind) => {
        return !e.isComplete && <Upcoming key={ind} task={e} ind={ind + 1} onClick={handleClick(ind)} onDel={handleDel(ind)} />
        })
      }
      {tasks.length !== 0 && <p className='title'>FINISHED</p>}
      {tasks.map( (e, ind) => {
        return e.isComplete && <Finished  key={ind} task={e} ind={ind + 1} onClick={handleClick(ind)} onDel={handleDel(ind)} />
        })
      }
      {tasks.length === 0 && <EmptyTask />}
      <button className='open-modal' onClick={handleOpenModal}>+</button>
      <div className={ isModalOpen ? 'modal' : 'modal close-modal'} onClick={handleCloseModal} >
        <div className='main'>
          <input type='text' placeholder='Type your new task' onClick={handleClickInput} onChange={handleChange}/>
          <button onClick={handleAddTask}>Add new task</button>
        </div>
      </div>
    </div>
  )
}
export default TodoApp;