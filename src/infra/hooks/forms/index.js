import { useEffect, useState } from 'react'

function formatErrors(yupErrorsInner = []) {
  return yupErrorsInner.reduce(
    (errorObjectAcumulate, currentError) => {
      const fieldName = currentError.path
      const errorMessage = currentError.message
      return {
        ...errorObjectAcumulate,
        [fieldName]: errorMessage
      }
    }, {}
  )
}

export default function useForm({
  initialValues, onSubmit, validateSchema
}) {
  const [ values, setValues ] = useState(initialValues)

  const [ isFormDisabled, setIsFormDisabled ] = useState(true)
  const [ errors, setErrors ] = useState({})
  const [ touched, setTouchedFields ] = useState({})

  async function validateValues(currentValues) {
    try {
      await validateSchema(currentValues)
      setErrors({})
      setIsFormDisabled(false)
    } catch (error) {
      const formatedErrors = formatErrors(error.inner)
      setErrors(formatedErrors)
      setIsFormDisabled(true)
    }
  }

  useEffect(() => {
    validateValues(values)
  }, [ values ])

  return {
    values,
    handleSubmit(event) {
      event.preventDefault()
      onSubmit(values)
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name')
      const { value } = event.target
      setValues(currentValues => ({
        ...currentValues,
        [fieldName]: value
      }))
    },
    isFormDisabled,
    setIsFormDisabled,
    errors,
    touched,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name')
      setTouchedFields({
        ...touched,
        [fieldName]: true
      })
    }
  }
}
