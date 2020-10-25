import React, { useEffect } from 'react';
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

const PickParcourModal = ({showModal, setShowModal, pickCallback, filter}) => {
  // const {handleFilterChange: trackNameFilterChange, filter: trackFilterValue} = useFilter(filter);

  useEffect(() => {
    fetch("http://pp.sswe.me/api/track/GetTrackFiltered?filterFrom=0&filterTo=10")
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
    return () => {}
  }, [])

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
        
        {/* <FormInputWrapper $col='col1'>
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
        </FormInputWrapper> */}
      </ModalWrapper>
    </Modal>
  )
}

export default PickParcourModal;
