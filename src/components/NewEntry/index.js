import React from 'react'
import useForm from '../../hooks/useForm'
import { Button, Form, Col } from 'react-bootstrap'

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
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Control
              type="text"
              name="description"
              placeholder="Description"
              {...handleTextInput}
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              name="difficulty"
              placeholder="Difficulty"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              name="assign"
              placeholder="Assign"
              {...handleTextInput}
            />
          </Col>
          <Col>
            <Button type="submit" >Add to the list!</Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  )
}

export default NewEntry
