import React from 'react'
import useForm from '../../hooks/useForm'

function NewEntry (props) {
  
  async function postNewEntry () {
    const raw = await fetch('http://localhost:3001/toDoList', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    const response = await raw.json()
    props.addEntry(response)
  }

  const [
    handleSubmit,
    handleChange,
    handleTextInput,
    values
  ] = useForm(postNewEntry)

  return (
    <div className="NewEntry">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Description"
          {...handleTextInput}
        />
        <input
          type="number"
          name="difficulty"
          placeholder="Difficulty"
          onChange={handleChange}
        />
        <input
          type="text"
          name="assign"
          placeholder="Assign"
          {...handleTextInput}
        />
      <input type="submit" value="Add to the list!" />
      </form>
    </div>
  )
}

export default NewEntry
