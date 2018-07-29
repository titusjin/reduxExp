<<<<<<< HEAD
import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
=======
import { combineReducers } from "redux";
import WeatherReducer from "./reducer_weather";
>>>>>>> upstream/master

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
