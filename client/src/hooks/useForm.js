import { useState } from 'react'

function useForm (callback) {
  const [values, setValues] = useState({})

  const handleSubmit = e => {
    if (e) e.preventDefault()
    if(values.description && values.difficulty && values.assign) {
      callback(values)
    }
  }

  const handleChange = e => {
    e.persist()
    setValues(values => {
      const { name, value } = e.target
      return {
        ...values,
        [name]: value
      }
    })
  }

  const handleTextInput = {
    arbitrarykey: 'arbitraryValue',
    onChange: function (e) {
      e.persist()
      setValues(values => {
        const { name, value } = e.target
        return {
          ...values,
          [name]: value, 
          completed: false
        }
      })
    }
  }

  return [
    handleSubmit,
    handleChange,
    handleTextInput,
    values,
  ]
}

export default useForm
