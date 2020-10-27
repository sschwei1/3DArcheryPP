import React, { useEffect } from 'react';
import {Button} from '../../ButtonEelement';
import {
  SiteWrapper,
  FormContainer,
  FormWrapper,
  FormTitle,
  FormInputWrapper,
  FormLabel,
  FormError,
  FormSectionDivider,
  FormSectionName,
  FormSectionWrapper,
  FormHeadWrapper,
  FormBodyWrapper,
  FormBtnWrapper
} from './FormElements';
import { useForm } from '../../../FormFunctions/useForm';
import {useFilter} from '../../../FormFunctions/useFilter';
import {validateForm} from '../../../FormFunctions/validateForm';
import FormInputElem from './FormInput';
import { useState } from 'react';
import ParcourPicker from '../PickParcour';
import PickParcourField from '../PickParcour';

// const createInput = (field, value, handleChange) => (
// <FormInput {...field}
//   autoComplete='off'
//   value={value}
//   onChange={handleChange} />);

const EventName = 'eventName';
const TrackField = 'trackId';

const CreateEventForm = ({title, buttonLabel, formFields, submitForm}) => {
  const {handleChange, handleSubmit, values, errors} = useForm(formFields, validateForm, submitForm);

  console.log("Re-Render");
  return (
    <SiteWrapper>
      <FormContainer>
        <FormWrapper onSubmit={handleSubmit}>
          <FormTitle>
            {title}
          </FormTitle>
          <FormInputElem
            field={formFields[EventName]}
            handleChange={handleChange}
            value={values[EventName]}
            error={errors[EventName]} />
          {/* <FormSectionDivider /> */}
          <PickParcourField
            handleChange={handleChange}
            parcourPickData={formFields[TrackField]} />
          {/* <FormSectionDivider /> */}
          <FormBtnWrapper>
            <Button
              type='submit'
              $primary={true}
              $dark={true} >
              {buttonLabel}
            </Button>
          </FormBtnWrapper>
        </FormWrapper>
      </FormContainer>
    </SiteWrapper>
  )
}

export default CreateEventForm;