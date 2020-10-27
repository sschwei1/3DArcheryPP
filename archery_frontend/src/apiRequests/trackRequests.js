import { CheckResponse } from "./errorHandling";

export const GetTracks = (from, to, filterName = '', filterLocation = '') => {  
  return fetch(`http://localhost:5000/track/GetTrackFiltered?filterFrom=${from}&filterTo=${to}&filterName=${filterName}&filterLocation=${filterLocation}`)
  .then(res => res.json())
  .then(res => CheckResponse(res));
};