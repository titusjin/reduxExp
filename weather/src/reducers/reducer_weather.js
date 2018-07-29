<<<<<<< HEAD
import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
        // first we can use like : state.push(action.payload.data)
        // to make the state updated with new fetching weather data.
        // But in Redux : we don't manipulate state directly
        // so better we do is : state.concate(action.payload.data)

        // Also in ES6 we can do like below just the same as :
        // state.concate(action.payload.data)
        return [ action.payload.data, ...state ];
    }
    return state;
=======
import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
>>>>>>> upstream/master
}
