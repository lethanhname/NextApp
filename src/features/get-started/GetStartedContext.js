import React, { createContext, useState } from 'react';

const isText = RegExp(/^[A-Z ]+$/i);
const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
const isPhone = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/);
const isZip = RegExp(/^[0-9]{5}([- /]?[0-9]{4})?$/);
const isNumber = RegExp(/^\d+$/);

// Applied to all fields
const variant = 'outlined';
const margin = 'normal';

const initialValues = {
  firstName: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  lastName: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20
  },
  email: {
    value: '',
    error: '',
    validate: 'email'
  },
  gender: {
    value: '',
    error: '',
    validate: 'select'
  },
  date: {
    value: '',
    error: ''
  },
  city: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 3,
    maxLength: 20
  },
  agreement: {
    value: false,
    error: '',
    required: true,
    validate: 'checkbox',
    helperText: 'Please accept our terms and conditions'
  },
  phone: {
    value: '',
    error: '',
    validate: 'phone',
    maxLength: 15
  }
}

export const GetStartedContext = createContext({
  activeStep: 0,
  formValues: initialValues,
  handleChange() {},
  handleNext() {},
  handleBack() {},
  variant,
  margin
})

export default function GetStartedProvider({ children }) {
  const [activeStep, setActiveStep] = useState(0)
  const [formValues, setFormValues] = useState(initialValues)

  // Proceed to next step
  const handleNext = () => setActiveStep((prev) => prev + 1)
  // Go back to prev step
  const handleBack = () => setActiveStep((prev) => prev - 1)

  // Handle form change
  const handleChange = (
    event
  ) => {
    const { type, name, value } = event.target
    const { checked } = event.target;

    const fieldValue = type === 'checkbox' ? checked : value
    // Set values
    setFormValues((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: fieldValue
      }
    }))

    const fieldName = initialValues[name]
    if (!fieldName) return

    const { required, validate, minLength, maxLength, helperText } = fieldName

    let error = ''

    if (required && !fieldValue) error = 'This field is required'

    if (minLength && value && value.length < minLength)
      error = `Minimum ${minLength} characters is required.`

    if (maxLength && value && value.length > maxLength)
      error = 'Maximum length exceeded!'

    if (validate) {
      switch (validate) {
        case 'text':
          if (value && !isText.test(value))
            error = helperText || 'This field accepts text only.'
          break

        case 'number':
          if (value && !isNumber.test(value))
            error = helperText || 'This field accepts numbers only.'
          break

        case 'email':
          if (value && !isEmail.test(value))
            error = helperText || 'Please enter a valid email address.'
          break

        case 'phone':
          if (value && !isPhone.test(value))
            error =
              helperText ||
              'Please enter a valid phone number. i.e: xxx-xxx-xxxx'
          break

        case 'zip':
          if (value && !isZip.test(value))
            error = helperText || 'Please enter a valid zip code.'
          break

        case 'checkbox':
          if (!checked) error = helperText || 'Please provide a valid value.'
          break

        case 'select':
          if (!value) error = helperText || 'Please select a value.'
          break

        default:
          break
      }
    }

    setFormValues((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        error
      }
    }))
  }

  return (
    <GetStartedContext.Provider
      value={{
        activeStep,
        formValues,
        handleChange,
        handleNext,
        handleBack,
        variant,
        margin
      }}
    >
      <div className="mui-step-form">{children}</div>
    </GetStartedContext.Provider>
  )
}
