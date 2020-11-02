import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../../Modals/Modal';
import {
  ModalWrapper,
  CloseModalButton,
  ModalTitle,
  ModalFilterWrapper,
  ModalListWrapper
} from '../../Modals/ModalDefaultElements';
import {
  ModalParcourWrappper,
  ModalParcourCol,
  ModalLoadMoreCol,
} from './PickerModalElements';
import {
  FormInput,
  FormInputWrapper,
  FormLabel
} from '../CreateEventForm/FormElements';
import {GetTracks} from '../../../apiRequests/trackRequests';

const ParcoursPerLoad = 5;

const PickParcourModal = ({showModal, setShowModal, pickCallback, filters}) => {
  const [parcours, setParcours] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [error, setError] = useState();
  const [loadDiff, setLoadDiff] = useState();
  const [isLoading, setIsLoading] = useState(false);

  console.log("parcour render", parcours, nameFilter, locationFilter, error, loadDiff, isLoading);

  const LoadMoreParcours = async () => {
    setIsLoading(true);
    await GetTracks(parcours.length, ParcoursPerLoad, nameFilter, locationFilter).then((ret) => {
      setIsLoading(false);
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

  useEffect(() => {
    if(showModal){
      setIsLoading(true);
      GetTracks(0, ParcoursPerLoad, nameFilter, locationFilter).then((ret) => {
        ReactDOM.unstable_batchedUpdates(() => {
          setIsLoading(false);
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
        <ModalTitle>
          Pick a track
        </ModalTitle>
        <ModalFilterWrapper $columns={2}>
          {filters.map((filter, index) => (
            <FormInputWrapper key={index}>
              <FormLabel htmlFor={filter.props.name}>
                {filter.label}
                <FormInput {...filter.props}/>
              </FormLabel>
            </FormInputWrapper>
          ))}
        </ModalFilterWrapper>
        <ModalParcourWrappper $disableHover={true} $bold={true}>
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
              $bold={false}
              onClick={() => pickCallback(parcour)}
              >
                <ModalParcourCol>
                  {parcour.name}
                </ModalParcourCol>
                <ModalParcourCol>
                  {parcour.location.name}
                </ModalParcourCol>
            </ModalParcourWrappper>
          )) ?? ""}
          <ModalParcourWrappper
            onClick={loadDiff < ParcoursPerLoad || !isLoading ? null : LoadMoreParcours}
            $light={true}
            $disableHover={ isLoading || loadDiff < ParcoursPerLoad }
            >
            <ModalLoadMoreCol>
              {
                isLoading ?
                  'Loading ...' :
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
