import React, {useState} from 'react'
import {
  PickUserContainer,
  PickUserWrapper,
  PickUserTitle
} from './PickUserElements';
import { FormError } from '../CreateEventForm/FormElements';

const PickParcourField = ({parcourPickData, handleChange, error}) => {
  const [parcour, setParcour] = useState();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const setParcourValue = (data) => {
    setParcour(data);
    handleChange({target:{name:"trackId", value:data.id}});
    setShowModal(false);
  };

  return (
    <>
      <PickUserContainer>
        <PickUserTitle>
          {parcourPickData.title}
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

export default PickParcourField;
