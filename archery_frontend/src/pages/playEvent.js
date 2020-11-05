import React, { useEffect, useState } from 'react';
import AuthView from '../components/PlayEventPage/AuthView';
import GameView from '../components/PlayEventPage/GameView';
import EventEndView from '../components/PlayEventPage/EventEndOverview';
import {SiteWrapper} from '../components/PlayEventPage/PlayEventPageElements';
import {useCookies} from 'react-cookie';
import { EndEvent } from '../apiRequests/apiRequests';

export const AuthCookie = 'authToken';
export const EventCookie = 'eventData';


const PlayEvent = () => {
  const [cookies, setCookie, removeCookie] = useCookies([AuthCookie]);
  const [authCode, setAuthCode] = useState();
  const [endEventData, setEndEventData] = useState();
  const [error, setError] = useState()

  const authCallback = (token) => {
    setAuthCode(token);
    if(token){
      setCookie(AuthCookie, token, {
        path: '/event'
      });
    }
  }

  console.log(endEventData);

  const endEventDataCallback = () => {
    clearCookies();
    EndEvent(authCode).then(ret => {
      if(ret.payload){
        setEndEventData(ret.payload)
      }
      else{
        setError(ret.error);
      }
      console.log(ret);
    });
  }

  const clearCookies = () => {
    removeCookie(AuthCookie, {
      path: '/event'
    });
    removeCookie(EventCookie, {
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
        endEventData ? (
          <EventEndView>

          </EventEndView>
        ) : (
        authCode ? (
            <GameView authToken={authCode} callback={endEventDataCallback} clearParentCookies={clearCookies} />
          ) : (
            <AuthView callback={authCallback} />
          ))
      }
    </SiteWrapper>
  )
}

export default PlayEvent
