import { useEffect, useState } from 'react'

export default function useForm({
  initialValues, onSubmit, validateSchema
}) {
  const [ values, setValues ] = useState(initialValues)

  const [ isFormDisabled, setIsFormDisabled ] = useState(true)
  const [ errors, setErrors ] = useState({})
  const [ touched, setTouchedFields ] = useState({})

  useEffect(() => {
    validateSchema(values)
      .then(() => {
        setIsFormDisabled(false)
        setErrors({})
      })
      .catch(error => {
        const formatedErrors = error.inner.reduce(
          (errorObjectAcumulate, currentError) => {
            const fieldName = currentError.path
            const errorMessage = currentError.message
            return {
              ...errorObjectAcumulate,
              [fieldName]: errorMessage
            }
          }, {}
        )
        setErrors(formatedErrors)
        setIsFormDisabled(true)
      })
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
