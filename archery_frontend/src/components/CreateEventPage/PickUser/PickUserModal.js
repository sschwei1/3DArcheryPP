import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../../Modals/Modal';
import {
  ModalWrapper,
  CloseModalButton,
  ModalFilterWrapper,
  ModalListWrapper,
  ModalTitle
} from '../../Modals/ModalDefaultElements';
import {
  FormInput,
  FormInputWrapper,
  FormLabel
} from '../CreateEventForm/FormElements';
import {
  ModalUserListItem,
  SelectedUserWrapper,
  SelectedUserElem,
  ModalBtnWrapper
} from './PickUserModalElements';
import {
  ButtonDiv as Button
} from '../../ButtonEelement';

import { GetUsers } from '../../../apiRequests/trackRequests';

const UsersPerLoad = 5;

const PickUserModal = ({showModal, setShowModal, pickCallback, filters}) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loadedUsers, setLoadedUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [error, setError] = useState();
  const [loadDiff, setLoadDiff] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const LoadMoreUser = () => {
    setIsLoading(true);
    GetUsers(loadedUsers.length, UsersPerLoad, nameFilter, selectedUsers).then((ret) => {
      setIsLoading(false);
      if(ret.payload){
        setLoadedUsers(prev => prev.concat(ret.payload));
        setLoadDiff(ret.payload.length);
        setError(undefined);
      }
      else{
        setError(ret.error);
      }
    });
  };

  const AddSelectedUser = (user) => {
    setSelectedUsers(prev => prev.concat(user));
  };

  const RemoveSelectedUser = (user) => {
    setSelectedUsers(prev => prev.filter(usr => usr.id !== user.id));
  }
  
  useEffect(() => {
    if(showModal){
      setIsLoading(true);
      GetUsers(0, UsersPerLoad, nameFilter, selectedUsers).then((ret) => {
        ReactDOM.unstable_batchedUpdates(() => {
          setIsLoading(false);
          if(ret.payload){
            setLoadedUsers(ret.payload);
            setError(undefined);
            setLoadDiff(ret.payload.length);
          }
          else{
            setLoadedUsers([]);
            setError(ret.error);
          }
        });
      });
    }
  }, [showModal, nameFilter, selectedUsers]);

  filters[0].props.onChange=(e) => {
    const {value} = e.target;
    setNameFilter(value);
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
          Pick Users
        </ModalTitle>
        <FormLabel>
          Selected Users
        </FormLabel>
        <SelectedUserWrapper
          $padding={selectedUsers?.length === 0} >
          {selectedUsers?.length === 0 ? 'No user selected' : ''}
          {selectedUsers?.map((user, index) => (
            <SelectedUserElem
              key={index}
              // $disableHover={false}
              // $bold={false}
              onClick={() => RemoveSelectedUser(user)}
              >
              {user.username}
            </SelectedUserElem>
          )) ?? ""}
        </SelectedUserWrapper>
        <ModalFilterWrapper $columns={1}>
          {filters.map((filter, index) => (
            <FormInputWrapper key={index}>
              <FormLabel htmlFor={filter.props.name}>
                {filter.label}
                <FormInput {...filter.props}/>
              </FormLabel>
            </FormInputWrapper>
          ))}
        </ModalFilterWrapper>
        <ModalListWrapper>
          {loadedUsers?.map((user, index) => (
            <ModalUserListItem
              key={index}
              $disableHover={false}
              $bold={false}
              onClick={() => AddSelectedUser(user)}
              >
              {user.username}
            </ModalUserListItem>
          )) ?? ""}
          <ModalUserListItem
            onClick={isLoading || loadDiff < UsersPerLoad ? null : LoadMoreUser}
            $light={true}
            $disableHover={isLoading || loadDiff < UsersPerLoad}
            $center={true}
            >
            {
              isLoading ?
                'Loading ...' :
                error ?
                  'An error occoured: ' + error :
                  loadDiff < UsersPerLoad  ?
                    'No more entries found' :
                    'Load more'
            }
          </ModalUserListItem>
        </ModalListWrapper>
        <ModalBtnWrapper>
          <Button
            $primary={true}
            $dark={true}
            $maxWidth={true}
            onClick={() => {pickCallback(selectedUsers);}}
            >
            Save
          </Button>
        </ModalBtnWrapper>
      </ModalWrapper>
    </Modal>
  )
}

export default PickUserModal;
