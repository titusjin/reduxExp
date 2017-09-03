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
    const promiseRequest = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: promiseRequest
    };
}
