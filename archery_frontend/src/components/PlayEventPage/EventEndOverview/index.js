import React from 'react';
import { ContentWrapper, GameInnerWrapper, GameWrapper, ViewCol, ViewRow, ViewTitle } from '../GameView/EventGameViewElements';
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
            {
              users.sort(() => (a,b)=> (a.points - b.points )).map((usr, index) => (
                <ViewRow>
                  <ViewCol $bold={index <= 3}>
                    #{index+1}.
                  </ViewCol>
                  <ViewCol $bold={index <= 3}>
                    {usr.username}: {usr.points} Points
                  </ViewCol>
                </ViewRow>
              ))
            }
          </ContentWrapper>
        </GameInnerWrapper>
      </GameWrapper>
    </>
  )
}

export default EventOverElement;