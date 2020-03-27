import React, { useState, useContext} from 'react'
import {SettingsContext} from '../../context/Settings.js'
import './ToDoList.scss'
import { Alert, Spinner, Table, Button } from 'react-bootstrap'

function ToDoList ({error, isLoading, contents, completionHandler, deletionHandler}) {
  const settings = useContext(SettingsContext)
  const [page, setPage] = useState(0)
  const start = page * settings.resultsPerPage
  const end = start + settings.resultsPerPage
  const currentList = contents.slice(start, end)
  return (
    <div className="ToDoList">
      {error && <Alert variant="danger">{error}</Alert>}
      {isLoading ? <Spinner animation="grow" /> : (
        <>
        <Table striped bordered hover variant="dark">
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
                <td><Button onClick={() => completionHandler(entry)}>{entry.completed ? "Set Incomplete" : "Complete"}</Button></td>
                <td><Button variant="outline-danger" onClick={() => deletionHandler(entry)}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        {page > 0 && <Button variant="outline-primary" onClick={() => setPage(page - 1)}>Previous</Button>}
        {contents.length > end && <Button  variant="outline-primary" onClick={() => setPage(page + 1)}>Next</Button>}
        </>
      )
      }
    </div>
  )
}

export default ToDoList
