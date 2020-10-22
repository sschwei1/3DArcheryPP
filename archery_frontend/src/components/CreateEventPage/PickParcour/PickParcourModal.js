import React from 'react';
import { Button } from '../../ButtonEelement';
import Modal from '../../Modals/Modal';
import {
  ModalWrapper,
  CloseModalButton,
  ModalBtnWrapper
} from './PickerModalElements';
import {
  FormInput,
  FormInputWrapper,
  FormLabel
} from '../CreateEventForm/FormElements';

const PickParcourModal = ({showModal, setShowModal, pickCallback}) => {
  const {handleFilterChange: trackNameFilterChange, filter: trackFilterValue} = useFilter(formFields[ParcourField].filter);

  return (
    <Modal
      showModal={showModal}
      setShowModal={setShowModal}
      >
      <ModalWrapper>
        <CloseModalButton
          aria-label='Close modal'
          onClick={() => setShowModal(false)}
          />
        <ModalBtnWrapper>
          <Button
            $primary={true}
            $dark={true}
            onClick={pickCallback}
            >
              Save
          </Button>
        </ModalBtnWrapper>
        <FormInputWrapper $col='col1'>
          <FormLabel>
            Track Name
            <FormInput
              {...filter.props}
              onChange={trackNameFilterChange}
              value={trackFilterValue[filter.props.name]} />
          </FormLabel>
        </FormInputWrapper>
        <FormInputWrapper key={index} $col='col2'>
          <FormLabel>
            Location Name
            <FormInput
              {...filter.props}
              onChange={trackNameFilterChange}
              value={trackFilterValue[filter.props.name]} />
          </FormLabel>
        </FormInputWrapper>
      </ModalWrapper>
    </Modal>
  )
}

export default PickParcourModal;
