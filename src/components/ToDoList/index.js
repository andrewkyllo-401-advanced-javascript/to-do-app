import React, { useState, useContext} from 'react'
import {SettingsContext} from '../../context/Settings.js'
import './ToDoList.scss'

function ToDoList ({error, isLoading, contents, completionHandler, deletionHandler}) {
  const settings = useContext(SettingsContext)
  const [page, setPage] = useState(0)
  const start = page * settings.resultsPerPage
  const end = start + settings.resultsPerPage
  const currentList = contents.slice(start, end)
  return (
    <div className="ToDoList">
      {error && <div>{error}</div>}
      {isLoading ? <div>Loading…</div> : (
        <>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Difficulty</th>
              <th>Assignment</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* make a tr with tds for every entry */}
            {currentList.map(entry => (
              <tr className={entry.completed ? "completed" : "incomplete"} key={entry.id}>
                <td>{entry.id}</td>
                <td>{entry.description}</td>
                <td>{entry.difficulty}</td>
                <td>{entry.assign}</td>
                <td><button onClick={() => completionHandler(entry)}>{entry.completed ? "Set Incomplete" : "Complete"}</button></td>
                <td><button onClick={() => deletionHandler(entry)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {page > 0 && <button onClick={() => setPage(page - 1)}>Previous</button>}
        {contents.length > end && <button onClick={() => setPage(page + 1)}>Next</button>}
        </>
      )
      }
    </div>
  )
}

export default ToDoList
