import React, { useEffect, useState } from 'react';
import AuthView from '../components/PlayEventPage/AuthView';
import GameView from '../components/PlayEventPage/GameView';
import {SiteWrapper} from '../components/PlayEventPage/PlayEventPageElements';
import {useCookies} from 'react-cookie';

export const AuthCookie = 'authToken';

const PlayEvent = () => {
  const [cookies, setCookie, removeCookie] = useCookies([AuthCookie]);
  const [authCode, setAuthCode] = useState();

  const authCallback = (token) => {
    setAuthCode(token);
    if(token){
      setCookie(AuthCookie, token, {
        path: '/event'
      });
    }
  }

  const clearCookies = () => {
    removeCookie(AuthCookie, {
      path: '/event'
    });
    setAuthCode(undefined);
  }

  useEffect(() => {
    setAuthCode(cookies[AuthCookie]);
  }, []);

  return (
    <SiteWrapper>
      {
        authCode ? 
          <GameView authToken={authCode} clearParentCookies={clearCookies} /> : 
          <AuthView callback={authCallback} />
      }
    </SiteWrapper>
  )
}

export default PlayEvent
