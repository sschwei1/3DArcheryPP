import { CheckResponse } from "./errorHandling";

export const apiDomain = 'http://3dium.digital/api';
// export const apiDomain = 'http://localhost:5000';

export const GetTracks = (from, to, filterName = '', filterLocation = '') => {  
  return fetch(`${apiDomain}/track/GetTrackFiltered?filterFrom=${from}&filterTo=${to}&filterName=${filterName}&filterLocation=${filterLocation}`)
    .then(res => res.json())
    .then(res => CheckResponse(res))
    .catch(err => ({payload: undefined, error: err}));
};

export const GetUsers = (from, to, filterName = '', except = []) => {
  return fetch(`${apiDomain}/track/GetUserFiltered?from=${from}&to=${to}&name=${filterName}&exceptIds=${except.map((user) => user.id).join(',')}`)
    .then(res => res.json())
    .then(res => CheckResponse(res))
    .catch(err => ({payload: undefined, error: err}));
};

export const CreateEvent = (eventData) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify(eventData);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch(`${apiDomain}/track/CreateEvent`, requestOptions)
    .then(res => res.json())
    .then(res => CheckResponse(res))
    .catch(err => ({payload: undefined, error: err.message}));
};

export const GetAuthToken = (shortToken) => {
  return fetch(`${apiDomain}/track/GetToken?shortToken=${shortToken}`)
    .then(res => res.json())
    .then(res => CheckResponse(res))
    .catch(err => ({payload: undefined, error: err}));
};

export const GetEventUsers = (authToken) => {
  return fetch(`${apiDomain}/track/geteventuser?token=${authToken}`)
    .then(res => res.json())
    .then(res => CheckResponse(res))
    .catch(err => ({payload: undefined, error: err.message}));
}

export const StartEvent = (authToken) => {
  return fetch(`${apiDomain}/track/StartEvent?token=${authToken}`)
    .then(res => res.json())
    .then(res => CheckResponse(res))
    .catch(err => ({payload: undefined, error: err.message}));
}

export const SubmitPoints = (updateData) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify(updateData);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch(`${apiDomain}/track/UpdateTarget`, requestOptions)
    .then(res => res.json())
    .then(res => CheckResponse(res))
    .catch(err => ({payload: undefined, error: err.message}));
}

export const EndEvent = (authToken) => {
return fetch(`${apiDomain}/track/EndEvent?token=${authToken}`)
  .then(res => res.json())
  .then(res => CheckResponse(res))
  .catch(err => ({payload: undefined, error: err.message}));
}