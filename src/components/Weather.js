import React, { Component } from 'react';
import WeatherForm from './weather-form.js';

class Weather extends Component {
  render () {
    return(
      <div>
        <h3>weather component</h3>
        <WeatherForm />
      </div>
    )
  }
}

export default Weather;