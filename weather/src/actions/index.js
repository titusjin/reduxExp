<<<<<<< HEAD
import axios from 'axios';

/**
 * openweathermap api can be checked by geo location
 */
const API_KEY = '6a78596d062df78380eff5944c4e5567';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

    // axos.get returns one promise object and the reason that we can directly
    // return the promise as payload to reducers :
    // we adopt redux-promise middleware
    // this middleware takes actions handling promise , will stop the action
    // and wait the async api calling finished and make one new action with
    // api result with the same acitn - type
    // So we can do then just after axios.get without redux-promise module.
    const promiseRequest = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: promiseRequest
    };
=======
import axios from "axios";

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
>>>>>>> upstream/master
}
