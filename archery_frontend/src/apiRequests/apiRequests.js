import { CheckResponse } from "./errorHandling";

// export const apiDomain = 'http://3dium.digital/api';
export const apiDomain = 'http://localhost:5000';

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

  // var raw = JSON.stringify({"name":"lul","trackId":2,"countTypeId":1,"eventusers":[1]});
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

export const StartEvent = (authToken) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify(authToken);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch(`${apiDomain}/track/StartEvent`, requestOptions)
    .then(res => res.json())
    .then(res => CheckResponse(res))
    .catch(err => ({payload: undefined, error: err.message}));
};