import React from 'react';
import { ContentWrapper, GameInnerWrapper, GameWrapper, ViewTitle } from '../GameView/EventGameViewElements';
import {NavBtn} from '../../CreateEventPage/CreateEventForm/FormElements';

const EventOverElement = ({users}) => {
  return (
    <>
      <NavBtn to='/createEvent'>
        Create another event
      </NavBtn>
      <GameWrapper>
        <GameInnerWrapper>
          <ViewTitle>
            Event Statistics
          </ViewTitle>
          <ContentWrapper>
            
          </ContentWrapper>
        </GameInnerWrapper>
      </GameWrapper>
    </>
  )
}

export default EventOverElement;