import React, { useState, useEffect } from 'react';
import { GetEventUsers, StartEvent } from '../../../apiRequests/apiRequests';
import { ButtonDiv } from '../../ButtonEelement';
import { FormBtnWrapper, FormError } from '../../CreateEventPage/CreateEventForm/FormElements';
import { ContentWrapper, ErrorView, LoadingElem, ViewTitle } from '../GameView/EventGameViewElements';
import { ListElement, ListTitle, ListWrapper } from './GamePreviewElements';


const GamePreStart = ({authToken, callback}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState();
  const [startEventLoad, setStartEventLoad] = useState(false);

  useEffect(() => {
    let mounted = true;

    GetEventUsers(authToken).then((ret) => {
      if(mounted){
        console.log("result", ret);
        setIsLoading(false);
        setUserList(ret);
      }
    });

    return () => {mounted = false;};
  }, [])

  const handleSubmit = () => {
    setStartEventLoad(true);
    StartEvent(authToken).then((ret) => {
      setStartEventLoad(false);
      console.log(ret);
      if(ret?.payload){
        callback(ret.payload);
      }
      else{
        callback({specialMessage: ret.error});
      }
    })
  }

  return (
    <>
      <ViewTitle>
        User Status
      </ViewTitle>
      {
        isLoading ? 
          (<LoadingElem>Loading</LoadingElem>) :
          (
            userList?.payload ?
            (
              <ContentWrapper>
                <ListTitle>
                  Accepted
                </ListTitle>
                <ListWrapper>
                  {
                    userList.payload.filter((usr) => usr.hasAccepted)
                    .map((usr, index) => <ListElement key={index}>{usr.name}</ListElement>)
                  }
                </ListWrapper>
                <ListTitle>
                  Declined
                </ListTitle>
                <ListWrapper>
                  {
                    userList.payload.filter((usr) => !usr.hasAccepted)
                    .map((usr, index) => <ListElement key={index}>{usr.name}</ListElement>)
                  }
                </ListWrapper>
                <FormBtnWrapper>
                  <ButtonDiv
                    $primary={true}
                    $dark={true}
                    $maxWidth={true}
                    onClick={startEventLoad ? null : handleSubmit} >
                    {startEventLoad ? 'Loading' :
                      userList.payload.filter((usr) => usr.hasAccepted).length > 0 ?
                        'Start Event' : 'Delete Event'}
                  </ButtonDiv>
                </FormBtnWrapper>
              </ContentWrapper>
            ) : (
              <ErrorView>{userList?.error}</ErrorView>
            )
          )
      }
    </>
  )
}

export default GamePreStart;