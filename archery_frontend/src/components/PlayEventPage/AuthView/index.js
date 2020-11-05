import React, { useState } from 'react'
import { GetAuthToken } from '../../../apiRequests/apiRequests';
import { ButtonDiv } from '../../ButtonEelement';
import { FormBtnWrapper, FormError, FormInput, FormInputWrapper, FormLabel, NavBtn } from '../../CreateEventPage/CreateEventForm/FormElements';
import {
  AuthWrapper
} from './EventAuthElements';

const AuthView = ({callback = () => {}}) => {
  const [authToken, setAuthToken] = useState('');
  const [authError, setAuthError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    setAuthToken(e.target.value.toUpperCase());
  }

  const handleSubmit = () => {
    if(authToken.length != 6){
      setAuthError('Auth token must be exactly 6 characters long');
    }
    else{
      setAuthError(undefined);
      setIsLoading(true);
      GetAuthToken(authToken).then(ret => {
        setIsLoading(false);
        if(ret.payload){
          callback(ret.payload);
        }
        else{
          setAuthError(ret.error);
        }
      });
    }
  }

  return (
    <AuthWrapper>
      <NavBtn to='/createevent'>
        Need to create an event?
      </NavBtn>
      <FormInputWrapper>
        <FormLabel htmlFor='authToken'>
          Auth shortcode
          <FormInput
            type='text'
            name='authToken'
            placeholder='Event Name'
            maxLength='6'
            autoComplete='off'
            onChange={handleChange}
            value={authToken} />
        </FormLabel>
        {authError && <FormError>{authError}</FormError>}
      </FormInputWrapper>
      <FormBtnWrapper>
        <ButtonDiv
          $primary={true}
          $dark={true}
          $maxWidth={true}
          onClick={isLoading ? null : handleSubmit} >
          {isLoading ? 'Loading' : 'Event Overview'}
        </ButtonDiv>
      </FormBtnWrapper>
    </AuthWrapper>
  )
}

export default AuthView;
