import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CreateEvent } from '../apiRequests/apiRequests';
import CreateEventForm from '../components/CreateEventPage/CreateEventForm';
import CreateEventSuccess from '../components/CreateEventPage/CreateEventSuccess';
import {CreateEventData} from '../Data/CreateEventData';

const CreateEventPage = () => {
  const [isSubmitted, setIsSubmitted] = useState();

  const submitForm = (data) => {
    CreateEvent(data).then((ret) => {
      setIsSubmitted(ret);
      console.log("ret", ret);
    });
  }

  return (
    <>
      {!isSubmitted ?
        <CreateEventForm submitForm={submitForm} {...CreateEventData} /> :
        <CreateEventSuccess {...isSubmitted} />
      }
    </>
  );
}

export default CreateEventPage;