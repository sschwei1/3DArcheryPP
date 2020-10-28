import React, {useState} from 'react'
import {
  PickUserContainer,
  PickUserWrapper,
  PickUserTitle
} from './PickUserElements';
import { FormError } from '../CreateEventForm/FormElements';

const PickUserField = ({userPickData, handleChange, error}) => {
  const [userList, setUserList] = useState();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const setUserListValue = (data) => {
    setUserList(data);
    handleChange({target:{name:"eventUsers", value:data.id}});
    setShowModal(false);
  };

  return (
    <>
      <PickUserContainer>
        <PickUserTitle>
          {userPickData.title}
        </PickUserTitle>
        <PickUserWrapper
          onClick={!showModal ? openModal : null}
          $isSelected={!!parcour}
          >
          {parcour ? (
            parcour.name
          ) : (
            'Click here to select a parcour'
          )}
        </PickUserWrapper>
        {error && <FormError>{error}</FormError>}
      </PickUserContainer>
      {/* <PickUserModal
        showModal={showModal}
        setShowModal={setShowModal}
        pickCallback={setParcourValue}
        filters={parcourPickData.filter}
        /> */}
    </>
  )
}

export default PickUserField;
