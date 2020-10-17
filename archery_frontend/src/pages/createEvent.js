import React, { useState } from 'react';
import CreateEventForm from '../components/CreateEventPage/CreateEventForm';
import CreateEventSuccess from '../components/CreateEventPage/CreateEventSuccess';
import {CreateEventData} from '../Data/CreateEventData';

const CreateEventPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);


  const submitForm = () => {
    setIsSubmitted(true);
  }

  return (
    <>
      {!isSubmitted ?
        <CreateEventForm submitForm={submitForm} {...CreateEventData} /> :
        <CreateEventSuccess />
      }
    </>
  );
}

export default CreateEventPage;