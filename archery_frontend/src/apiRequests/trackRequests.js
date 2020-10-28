import { CheckResponse } from "./errorHandling";

export const GetTracks = (from, to, filterName = '', filterLocation = '') => {  
  return fetch(`http://pp.sswe.me/api/track/GetTrackFiltered?filterFrom=${from}&filterTo=${to}&filterName=${filterName}&filterLocation=${filterLocation}`)
  .then(res => res.json())
  .then(res => CheckResponse(res));
};