import React, { useEffect, useState } from 'react';
import Modal from '../../Modals/Modal';
import {
  ModalWrapper,
  CloseModalButton,
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
  const [error, setError] = useState();
  const [loadDiff, setLoadDiff] = useState(1);

  const LoadMoreParcours = () => {
    GetTracks(parcours.length, ParcoursPerLoad, nameFilter, locationFilter).then((ret) => {
      if(ret.payload){
        setParcours(prev => prev.concat(ret.payload));
        setLoadDiff(ret.payload.length);
        setError(undefined);
      }
      else{
        setError(ret.error);
      }
    });
  };

  console.log("parcours", parcours);

  useEffect(() => {
    if(showModal){
      GetTracks(0, ParcoursPerLoad, nameFilter, locationFilter).then((ret) => {
        if(ret.payload){
          setParcours(ret.payload);
          setError(undefined);
          setLoadDiff(ret.payload.length);
        }
        else{
          setParcours([]);
          setError(ret.error);
        }
      });
    }
  }, [nameFilter, locationFilter, showModal]);

  filters[0].props.onChange=(e) => {
    const {value} = e.target;
    setNameFilter(value);
  };

  filters[1].props.onChange=(e) => {
    const {value} = e.target;
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
              $disableHover={false}
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
            onClick={loadDiff < ParcoursPerLoad ? null : LoadMoreParcours}
            $light={true}
            $disableHover={loadDiff < ParcoursPerLoad }
            >
            <ModalLoadMoreCol>
              {
                error ?
                  'An error occoured: ' + error :
                  loadDiff < ParcoursPerLoad  ?
                    'No more entries found' :
                    'Load more'
              }
            </ModalLoadMoreCol>
          </ModalParcourWrappper>
        </ModalListWrapper>
      </ModalWrapper>
    </Modal>
  )
}

export default PickParcourModal;
