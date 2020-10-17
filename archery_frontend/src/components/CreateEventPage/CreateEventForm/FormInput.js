import React from 'react'
import {
  FormLabel,
  FormInput,
  FormError,
  FormInputWrapper
} from './FormElements'

const FormInputElem = ({field, handleChange, value, error}) => {
  return (
    <FormInputWrapper>
      <FormLabel htmlFor={field.props.name}>
        {field.label}
        <FormInput
          {...field.props}
          onChange={handleChange}
          value={value} />
        {error && <FormError>{error}</FormError>}
      </FormLabel>
    </FormInputWrapper>
  )
};

export default FormInputElem;
