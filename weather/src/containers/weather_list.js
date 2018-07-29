<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
=======
import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";
>>>>>>> upstream/master

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

<<<<<<< HEAD

// for the arguments "weathre" , originally we use the syntax like : state
// but for ES6, cause we only use state.weathr in the body of the function.
// As a result : we can shorten this like { weather } same as the result : 
// let weather = state.weather
function mapStateToProps({ weather }) {
    // return {weather : state.weather}
    // In ES6, we can shorten it to { weather }
  return { weather };  
  //ES6 syntax sugar : {weathre : weather } can be always shorten to { weathre }
=======
function mapStateToProps({ weather }) {
  return { weather };
>>>>>>> upstream/master
}

export default connect(mapStateToProps)(WeatherList);
