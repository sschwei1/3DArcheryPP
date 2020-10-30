import React from 'react';
import {Button} from '../../ButtonEelement';
import {
  SiteWrapper,
  FormContainer,
  FormWrapper,
  FormTitle,
  FormBtnWrapper
} from './FormElements';
import { useForm } from '../../../FormFunctions/useForm';
import {validateForm} from '../../../FormFunctions/validateForm';
import FormInputElem from './FormInput';
import PickParcourField from '../PickParcour';
import PickUserField from '../PickUser';

const EventName = 'eventName';
const TrackField = 'trackId';

const CreateEventForm = ({title, buttonLabel, formFields, submitForm}) => {
  const {handleChange, handleSubmit, values, errors} = useForm(formFields, validateForm, submitForm);

  console.log("trackError", errors[TrackField]);
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
          <PickParcourField
            handleChange={handleChange}
            parcourPickData={formFields[TrackField]}
            error={errors[TrackField]} />
          <PickUserField />
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