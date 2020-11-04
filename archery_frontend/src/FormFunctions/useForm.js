import {useEffect, useState} from 'react';
import { CreateEvent } from '../apiRequests/apiRequests';

export const useForm = (formFields, validate, callback) => {
  const [values, setValues] = useState(
    Object.fromEntries(
      Object.entries(formFields).map(
        ([key]) => [key, '']
      )
    )
  );

  useEffect(() => {
    console.log("formData",values);
  }, [values]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitEnable, setSubmitEnable] = useState(true);

  const handleChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]:value ?? ''
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if(submitEnable){
      setErrors(validate(values, formFields));
      setIsSubmitting(true);
    }
  };

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting){
      setSubmitEnable(false);
      callback(values);
    }
  }, [errors, callback, isSubmitting]);

  return {handleChange, handleSubmit, values, errors};
}