import React, { useState } from 'react';
import AuthView from '../components/PlayEventPage/AuthView';
import GameView from '../components/PlayEventPage/GameView';
import {SiteWrapper} from '../components/PlayEventPage/PlayEventPageElements';

const PlayEvent = () => {
  const [authCode, setAuthCode] = useState();

  const authCallback = (token) => {
    setAuthCode(token);
  }

  return (
    <SiteWrapper>
      {
        authCode ? 
          <GameView authToken={authCode} /> : 
          <AuthView callback={authCallback} />
      }
    </SiteWrapper>
  )
}

export default PlayEvent
