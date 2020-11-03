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
import CountTypeSelectField from '../CountTypeSelect';
import PickUserField from '../PickUser';

const EventName = 'name';
const CountTypeField = 'countTypeId'
const TrackField = 'trackId';
const UserField = 'userList';

const CreateEventForm = ({title, buttonLabel, formFields, submitForm}) => {
  const {handleChange, handleSubmit, values, errors} = useForm(formFields, validateForm, submitForm);

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
          <CountTypeSelectField
            countTypeSelectData={formFields[CountTypeField]}
            handleChange={handleChange}
            error={errors[CountTypeField]}
          />
          <PickParcourField
            handleChange={handleChange}
            parcourPickData={formFields[TrackField]}
            error={errors[TrackField]} />
          <PickUserField
            handleChange={handleChange}
            userPickData={formFields[UserField]}
            error={errors[UserField]} />
          <FormBtnWrapper>
            <Button
              type='submit'
              $primary={true}
              $dark={true}
              $maxWidth={true} >
              {buttonLabel}
            </Button>
          </FormBtnWrapper>
        </FormWrapper>
      </FormContainer>
    </SiteWrapper>
  )
}

export default CreateEventForm;