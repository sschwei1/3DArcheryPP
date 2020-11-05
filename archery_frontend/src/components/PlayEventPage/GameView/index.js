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

export const EventCookie = 'eventData';

const GameView = ({authToken, clearParentCookies = () => {}}) => {
  const [cookies, setCookie, removeCookie] = useCookies([EventCookie]);
  const [eventData, setEventData] = useState();

  const evaluateGameView = (data) => {
    switch(data.countType){
      case 1: return <ThreeShotGame {...data} />;
      case 2: return <TwoShot {...data} />;
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

  useEffect(() => {
    if(cookies[EventCookie]){
      setEventData(cookies[EventCookie]);
    }
  }, []);

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
                <ErrorView>{eventData.specialMessage}</ErrorView>
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
