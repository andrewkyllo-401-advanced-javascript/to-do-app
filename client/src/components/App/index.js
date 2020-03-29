import React from 'react';
import './App.scss';
import Header from '../Header'
import Footer from '../Footer'
import useFetch from '../../hooks/useFetch' 
import NewEntry from '../NewEntry'
import ToDoList from '../ToDoList'
import Settings from '../../context/Settings'
import PaginationSetter from '../PaginationSetter';
import LogInForm from '../LogInForm';
import AuthentiLog from '../../context/LogIn';
import Auth from '../coditionals/Auth'


function App() {
  const [toDoList, error, isLoading, addEntry, completionHandler, deletionHandler] = useFetch()
  return (
    <AuthentiLog>
      <Settings>
        <div className="App">
          <Header/>
          <LogInForm/>
          <hr />
          <Auth permission="create">
            <NewEntry addEntry={addEntry} />
          </Auth>
          <Auth permission="read">
            <ToDoList completionHandler={completionHandler} deletionHandler={deletionHandler} contents={toDoList} error={error} isLoading={isLoading} />
          </Auth>
        </div>
        <Auth permission="read">
          <PaginationSetter/>
        </Auth>
        <Footer />
      </Settings>
    </AuthentiLog>
  );
}

export default App;
