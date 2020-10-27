import React, {useState} from 'react'
import PickParcourModal from './PickParcourModal';
import {
  PickParcourContainer,
  PickParcourWrapper,
  PickParcourTitle
} from './PickParcourElements';

const PickParcourField = ({parcourPickData, handleChange}) => {
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
      <PickParcourContainer>
        <PickParcourTitle>
          {parcourPickData.title}
        </PickParcourTitle>
        <PickParcourWrapper
          onClick={!showModal ? openModal : null}
          $isSelected={!!parcour}
          >
          {parcour ? (
            parcour.name
          ) : (
            'Click here to select a parcour'
          )}
        </PickParcourWrapper>
      </PickParcourContainer>
      <PickParcourModal
        showModal={showModal}
        setShowModal={setShowModal}
        pickCallback={setParcourValue}
        filters={parcourPickData.filter}
        />
    </>
  )
}

export default PickParcourField;
