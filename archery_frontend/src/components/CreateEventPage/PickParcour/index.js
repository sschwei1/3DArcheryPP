import React, {useState} from 'react'
import PickParcourModal from './PickParcourModal';
import {
  PickParcourContainer,
  PickParcourWrapper,
  PickParcourTitle
} from './PickParcourElements';

const PickParcourField = () => {
  const [parcour, setParcour] = useState();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const setParcourValue = (id) => {
    setParcour(id);
    setShowModal(false);
  };

  return (
    <>
      <PickParcourContainer>
        <PickParcourTitle>
          Track
        </PickParcourTitle>
        <PickParcourWrapper
          onClick={!showModal ? openModal : null}
          $isSelected={!!parcour}
          >
          {parcour ? (
            'You selected a parcour'
          ) : (
            'Click here to select a parcour'
          )}
        </PickParcourWrapper>
      </PickParcourContainer>
      <PickParcourModal
        showModal={showModal}
        setShowModal={setShowModal}
        pickCallback={setParcourValue}
        />
    </>
  )
}

export default PickParcourField;
