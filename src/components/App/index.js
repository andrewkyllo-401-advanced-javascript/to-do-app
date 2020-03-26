import React from 'react';
import './App.scss';
import useFetch from '../../hooks/useFetch' 
import NewEntry from '../NewEntry'
import ToDoList from '../ToDoList'
import Settings from '../../context/Settings'
import PaginationSetter from '../PaginationSetter';


function App() {
  const [toDoList, error, isLoading, addEntry, completionHandler, deletionHandler] = useFetch()
  return (
    <Settings>
      <div className="App">
        <h1>The Best To Do List</h1>
        <NewEntry addEntry={addEntry} />
        <ToDoList completionHandler={completionHandler} deletionHandler={deletionHandler} contents={toDoList} error={error} isLoading={isLoading} />
      </div>
      <PaginationSetter/>
    </Settings>
  );
}

export default App;
