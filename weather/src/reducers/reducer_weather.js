import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // first we can use like : state.push(action.payload.data)
    // to make the state updated with new fetching weather data.
    // But in Redux : we don't mutate state so better we do is :
    // state.concate(action.payload.data)
    // ES6 we can do like below:
    return [ action.payload.data, ...state ];
  }
  return state;
}
