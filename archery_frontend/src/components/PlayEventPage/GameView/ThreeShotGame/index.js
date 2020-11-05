import React, { useState } from 'react';
import { SubmitPoints } from '../../../../apiRequests/apiRequests';
import { ButtonDiv } from '../../../ButtonEelement';
import { FormBtnWrapper } from '../../../CreateEventPage/CreateEventForm/FormElements';
import {
  ContentWrapper,
  ViewTitle,
  ViewRow,
  ViewCol,
  ShotButtonWrapper,
  ShotButton
} from '../EventGameViewElements';
import {ShotValues} from './ThreeShotData';


const ThreeShotGame = ({name, targets, trackInfo, users, authToken}) => {
  const [currentTarget, setCurrentTarget] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [currentShot, setCurrentShot] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(0);
  console.log(currentPlayer, users.length);
  const handleSubmit = () => {
    let data = {
      token: authToken,
      userId: users[currentPlayer].id,
      targetId: targets[currentTarget].id,
      points: currentPoints
    }

    SubmitPoints(data).then((ret) => {
      console.log('response', ret);
      if(ret === 'success'){
        if(currentPlayer + 1 >= users.length){
          setCurrentPlayer(0);
          setCurrentTarget(prev => prev + 1);
        }
        else{
          currentPlayer(prev => prev + 1);
        }
      }
    });
  }

  console.log("target", targets[0]);

  return (
    <>
      <ViewTitle>{name} playing on {trackInfo.name}</ViewTitle>
      <ViewRow>
        <ViewCol $bold={true}>
          Target:
        </ViewCol>
        <ViewCol>
          {targets[currentTarget].name}
        </ViewCol>
      </ViewRow>
      <ViewRow>
        <ViewCol $bold={true}>
          Player:
        </ViewCol>
        <ViewCol>
          {users[currentPlayer].name}
        </ViewCol>
      </ViewRow>
      <ViewRow>
        <ViewCol $bold={true}>
          Points:
        </ViewCol>
        <ViewCol>
          {currentPoints}
        </ViewCol>
      </ViewRow>
      {
        ShotValues.map((values, index1) =>
          currentShot >= index1 ? (
            <ShotButtonWrapper key={index1}>
              {
                values.map((value, index2) => (
                  <ShotButton
                    key={index2}
                    onClick={() => {
                      setCurrentPoints(value);
                      setCurrentShot(index1);
                    }}
                    $isSelected={currentPoints === value}>
                    {value}
                  </ShotButton>
                ))
              }
              <ShotButton
                onClick={() => {
                  setCurrentPoints(0);
                  setCurrentShot(index1 + 1);
                }}
                $isSelected={currentShot > index1}>
                Miss
              </ShotButton>
            </ShotButtonWrapper>
          ) : '')
      }
      <ContentWrapper>
        <FormBtnWrapper>
          <ButtonDiv
            $primary={true}
            $dark={true}
            $maxWidth={true}
            onClick={handleSubmit} >
              Submit
          </ButtonDiv>
        </FormBtnWrapper>
      </ContentWrapper>
    </>
  )
}

export default ThreeShotGame;