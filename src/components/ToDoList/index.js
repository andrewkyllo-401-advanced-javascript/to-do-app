import React from 'react'
import './ToDoList.scss'

function ToDoList ({error, isLoading, contents, completionHandler, deletionHandler}) {
  return (
    <div className="ToDoList">
      {error && <div>{error}</div>}
      {isLoading ? <div>Loading…</div> :
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
            {contents.map(entry => (
              <tr className={entry.completed ? "completed" : "incomplete"} key={entry.id}>
                <td>{entry.id}</td>
                <td>{entry.description}</td>
                <td>{entry.difficulty}</td>
                <td>{entry.assign}</td>
                <td><button onClick={() => completionHandler(entry)}>Complete</button></td>
                <td><button onClick={() => deletionHandler(entry)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  )
}

export default ToDoList
