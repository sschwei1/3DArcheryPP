import React from 'react';
import {
  SiteWrapper,
  InfoContainer,
  Title,
  Info,
  EventCodeField,
  BtnWrapper
} from './CreateEventSuccessElements';
import {
  ButtonRoute as Button
} from '../../ButtonEelement';

const CreateEventSuccess = ({payload, error}) => {
  console.log("payload", payload);
  console.log("error", error);
  return (
    <SiteWrapper>
      <InfoContainer>
        <Title>
          {
            payload?.eventCreated ?
              'Your Event Code' :
              'An error occured:'
          }
        </Title>
        {
          payload?.eventCreated ? (
            <>
              <EventCodeField>
                {payload.message}
              </EventCodeField>
              <BtnWrapper>
                <Button
                  type='submit'
                  $primary={true}
                  $dark={true}
                  to='/event'
                  >
                  Go to event page
                </Button>
              </BtnWrapper>
            </>
          ) : (
            <Info>
              {
                error ?
                  error :
                  payload.message
              }
            </Info>
          )
        }
      </InfoContainer>
    </SiteWrapper>
  )
}

export default CreateEventSuccess;
