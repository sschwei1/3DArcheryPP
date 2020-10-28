import React, { useEffect, useState } from 'react';
import { ButtonDiv as Button } from '../../ButtonEelement';
import Modal from '../../Modals/Modal';
import {
  ModalWrapper,
  CloseModalButton,
  ModalBtnWrapper,
  ModalParcourWrappper,
  ModalFilterWrapper,
  ModalParcourCol,
  ModalListWrapper,
  ModalLoadMoreCol
} from './PickerModalElements';
import {
  FormInput,
  FormInputWrapper,
  FormLabel
} from '../CreateEventForm/FormElements';
import { GetTracks } from '../../../apiRequests/trackRequests';

const ParcoursPerLoad = 1;

const PickParcourModal = ({showModal, setShowModal, pickCallback, filters}) => {
  const [parcours, setParcours] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  useEffect(() => {
    GetTracks(0, ParcoursPerLoad, nameFilter, locationFilter).then((ret) => {
      console.log(ret);
      setParcours(ret);
    });
  }, [nameFilter, locationFilter]);

  const LoadMoreParcours = () => {
    GetTracks(parcours.length, ParcoursPerLoad, nameFilter, locationFilter).then((ret) => {
      console.log(ret);
      setParcours(prev => prev.concat(ret))
    });
  };

  console.log(filters);

  filters[0].props.onChange=(e) => {
    const {name, value} = e.target;
    setNameFilter(value);
  };

  filters[1].props.onChange=(e) => {
    const {name, value} = e.target;
    setLocationFilter(value);
  };


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
        <ModalFilterWrapper>
          {filters.map((filter, index) => (
            <FormInputWrapper key={index}>
              <FormLabel htmlFor={filter.props.name}>
                {filter.label}
                <FormInput {...filter.props}/>
              </FormLabel>
            </FormInputWrapper>
          ))}
        </ModalFilterWrapper>
        <ModalParcourWrappper $disableHover={true}>
          <ModalParcourCol>
            Parcour name
          </ModalParcourCol>
          <ModalParcourCol>
            Location name
          </ModalParcourCol>
        </ModalParcourWrappper>
        <ModalListWrapper>
          {parcours?.map((parcour, index) => (
            <ModalParcourWrappper
              key={index}
              onClick={() => {
                pickCallback(parcour);
              }}>
                <ModalParcourCol>
                  {parcour.name}
                </ModalParcourCol>
                <ModalParcourCol>
                  {parcour.location.name}
                </ModalParcourCol>
            </ModalParcourWrappper>
          )) ?? ""}
          <ModalParcourWrappper
            onClick={LoadMoreParcours}
            $light={true}>
            <ModalLoadMoreCol>
              LoadMore
            </ModalLoadMoreCol>
          </ModalParcourWrappper>
        </ModalListWrapper>
      </ModalWrapper>
    </Modal>
  )
}

export default PickParcourModal;
