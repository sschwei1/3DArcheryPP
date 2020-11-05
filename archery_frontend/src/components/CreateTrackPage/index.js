import React, { useState } from 'react';
import { ContentWrapper, GameInnerWrapper, GameWrapper, ViewTitle } from '../PlayEventPage/GameView/EventGameViewElements';
import {
  ModalUserListItem,
  SelectedUserWrapper,
  SelectedUserElem,
  ModalBtnWrapper
} from '../CreateEventPage/PickUser/PickUserModalElements';
import {ModalListWrapper} from '../Modals/ModalDefaultElements';
import {ButtonDiv as Button} from '../ButtonEelement';

const CreateTrackComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedTargets, setLoadedTargets] = useState();
  const [selectedTargets, setSelectedTargets] = useState([]);

  const AddSelectedTarget = (target) => {
    if(selectedTargets.filter(trg => trg.id === target.id).length === 0){
      setSelectedTargets(prev => prev.concat(target));
    }
  };

  const RemoveSelectedTarget = (target) => {
    setSelectedTargets(prev => prev.filter(trg => trg.id !== target.id));
  }

  return (
    <>
      <GameWrapper>
        <GameInnerWrapper>
          <ViewTitle>
            CreateTrack
          </ViewTitle>
          <ContentWrapper>
            <SelectedUserWrapper
              $padding={selectedTargets?.length === 0} >
              {selectedTargets?.length === 0 ? 'No targets selected' : ''}
              {selectedTargets?.map((trg, index) => (
                <SelectedUserElem
                  key={index}
                  onClick={() => RemoveSelectedTarget(trg)}
                  >
                  {trg.name}
                </SelectedUserElem>
              )) ?? ""}
            </SelectedUserWrapper>
            <ModalListWrapper>
              {loadedTargets?.map((trg, index) => (
                <ModalUserListItem
                  key={index}
                  $disableHover={false}
                  $bold={false}
                  onClick={() => AddSelectedTarget(trg)}
                  >
                  {trg.name}
                </ModalUserListItem>
              )) ?? ""}
            </ModalListWrapper>
            <ModalBtnWrapper>
              <Button
                $primary={true}
                $dark={true}
                $maxWidth={true}
                // onClick={() => {pickCallback(selectedUsers);}}
                >
                Save
              </Button>
            </ModalBtnWrapper>
          </ContentWrapper>
        </GameInnerWrapper>
      </GameWrapper>
    </>
  )
}

export default CreateTrackComponent;
