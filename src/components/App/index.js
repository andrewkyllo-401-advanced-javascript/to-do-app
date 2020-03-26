import React from 'react';
import './App.css';
import useFetch from '../../hooks/useFetch' 
import NewEntry from '../NewEntry'
import ToDoList from '../ToDoList'

function App() {
  const [toDoList, error, isLoading, addEntry, completionHandler, deletionHandler] = useFetch()
  return (
    <div className="App">
      <h1>The Best To Do List</h1>
      <NewEntry addEntry={addEntry} />
      <ToDoList completionHandler={completionHandler} deletionHandler={deletionHandler} contents={toDoList} error={error} isLoading={isLoading} />
    </div>
  );
}

export default App;
