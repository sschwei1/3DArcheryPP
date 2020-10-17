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

// const createInput = (field, value, handleChange) => (
// <FormInput {...field}
//   autoComplete='off'
//   value={value}
//   onChange={handleChange} />);

const EventName = 'eventName';
const ParcourField = 'parcourField';

const CreateEventForm = ({title, buttonLabel, formFields, submitForm}) => {
  const {handleChange, handleSubmit, values, errors} = useForm(formFields, validateForm, submitForm);
  const {handleFilterChange: trackNameFilterChange, filter: trackFilterValue} = useFilter(formFields[ParcourField].filter);
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
          <FormSectionDivider />
          {/* <FormSectionWrapper>
            <FormHeadWrapper>
              <FormSectionName>Name</FormSectionName>
              {
                formFields[ParcourField].filter.map((filter, index) => 
                  <FormInputWrapper key={index} $col={`col${index+1}`}>
                    <FormLabel>
                      {filter.label}
                      <FormInput
                        {...filter.props}
                        onChange={trackNameFilterChange}
                        value={trackFilterValue[filter.props.name]} />
                    </FormLabel>
                  </FormInputWrapper>
                )
              }
            </FormHeadWrapper>
          </FormSectionWrapper> */}
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