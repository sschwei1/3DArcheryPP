import React, {useEffect, useState} from 'react';
import GamePreStartView from '../GamePreStartView';
import ThreeShotGame from './ThreeShotGame';
import TwoShot from './TwoShotGame';
import {
  GameWrapper,
  GameInnerWrapper,
  ErrorView,
  NavBtn
} from './EventGameViewElements';
import {useCookies} from 'react-cookie';
import { ButtonDiv, ButtonRoute } from '../../ButtonEelement';

export const EventCookie = 'eventData';

const GameView = ({authToken, clearParentCookies = () => {}}) => {
  const [cookies, setCookie, removeCookie] = useCookies([EventCookie]);
  const [eventData, setEventData] = useState(cookies[EventCookie]);

  console.log("evtData", eventData);

  const evaluateGameView = (data) => {
    switch(data.countType){
      case 1: return <ThreeShotGame authToken={authToken} {...data} />;
      case 2: return <TwoShot authToken={authToken} {...data} />;
      default: return <ErrorView>Invalid CountType</ErrorView>;
    }
  }

  const startEventCallback = (data) => {
    setEventData(data);
    setCookie(EventCookie, data, {
      path: '/event'
    });
  }

  const clearCookies = () => {
    console.log('cookies cleared');
    removeCookie(EventCookie, {
      path: '/event'
    });
    setEventData(undefined);
    clearParentCookies();
  }

  console.log("view rendered:",
    eventData ?
      eventData?.specialMessage ? 'Error' : 'GameView' :
      'pre start');

  return (
    <>
      <NavBtn onClick={clearCookies}>
        Not your event?
      </NavBtn>
      <GameWrapper>
        <GameInnerWrapper>
          {
            eventData ? (
              eventData?.specialMessage ? (
                <>
                  <ErrorView>{eventData.specialMessage}</ErrorView>
                  <ButtonDiv
                    $primary={true}
                    $dark={true}
                    $maxWidth={true}
                    onClick={clearCookies}>
                      Go back
                  </ButtonDiv>
                </>
              ) : (
                evaluateGameView(eventData)
              )
            ) : (
              <GamePreStartView
                authToken={authToken}
                callback={startEventCallback} />
            )
          }
        </GameInnerWrapper>
      </GameWrapper>
    </>
  )
}

export default GameView
