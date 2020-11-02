import { CheckResponse } from "./errorHandling";

export const GetTracks = (from, to, filterName = '', filterLocation = '') => {  
  return fetch(`http://3dium.digital/api/track/GetTrackFiltered?filterFrom=${from}&filterTo=${to}&filterName=${filterName}&filterLocation=${filterLocation}`)
    .then(res => res.json())
    .then(res => CheckResponse(res))
    .catch(err => ({payload: undefined, error: err}));
};

export const GetUsers = (from, to, filterName = '', except = []) => {
  return fetch(`http://3dium.digital/api/track/GetUserFiltered?from=${from}&to=${to}&name=${filterName}&exceptIds=${except.map((user) => user.id).join(',')}`)
    .then(res => res.json())
    .then(res => CheckResponse(res))
    .catch(err => ({payload: undefined, error: err}));
};