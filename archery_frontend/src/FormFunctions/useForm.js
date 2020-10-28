import {useEffect, useState} from 'react';

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

  const handleChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]:value ?? ''
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values, formFields));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting){
      callback();
    }
  }, [errors, callback, isSubmitting]);

  return {handleChange, handleSubmit, values, errors};
}