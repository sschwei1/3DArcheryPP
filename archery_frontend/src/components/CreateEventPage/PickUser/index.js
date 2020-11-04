import React, {useState} from 'react'
import {
  PickUserContainer,
  PickUserWrapper,
  PickUserTitle
} from './PickUserElements';
import PickUserModal from './PickUserModal';
import { FormError } from '../CreateEventForm/FormElements';

const PickUserField = ({userPickData, handleChange, error}) => {
  const [userList, setUserList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const setUserListValue = (data) => {
    setUserList(data);
    handleChange({target:{name:"eventUsers", value:data.map(usr => usr.id)}});
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
          $isSelected={userList.length > 0}
          >
          {userList.length > 0 ? (
            userList.length + ' user selected'
          ) : (
            'Click here to add user'
          )}
        </PickUserWrapper>
        {error && <FormError>{error}</FormError>}
      </PickUserContainer>
      <PickUserModal
        showModal={showModal}
        setShowModal={setShowModal}
        pickCallback={setUserListValue}
        filters={userPickData.filter}
        />
    </>
  )
}

export default PickUserField;
