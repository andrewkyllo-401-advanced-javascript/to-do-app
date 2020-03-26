import { useState, useEffect } from 'react'

function useFetch () {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [toDoList, setToDoList] = useState([])

  const fetchToDoList = async () => {
    setIsLoading(true)
    setError(false)
    try {
      const raw = await fetch('http://localhost:3001/toDoList')
      const data = await raw.json()
      setToDoList(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  function addEntry(entry) {
    setToDoList([...toDoList,entry])
  }

  useEffect(() => {
    fetchToDoList()
  }, [])

  const completionHandler = async entry => {
    entry.completed=true
    try {
      const raw = await fetch(`http://localhost:3001/toDoList/${entry.id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(entry)
      })
      const newToDoList = toDoList.map(object => {
        return object.id === entry.id ? { ...object, completed: true } : object
      })
      setToDoList(newToDoList)
    } catch (e) {console.error(e)}
  }

  const deletionHandler = async entry => {
    try {
      const raw = await fetch(`http://localhost:3001/toDoList/${entry.id}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const data = await raw.json()
      console.log(data)
      const newToDoList = toDoList.filter(object => object.id !== entry.id)
      setToDoList(newToDoList)
    } catch (e) {console.error(e)}
  }

  return [
    toDoList,
    error,
    isLoading, 
    addEntry,
    completionHandler,
    deletionHandler
  ]
}

export default useFetch
