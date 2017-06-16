import React, { Component } from 'react';
// import axios from 'axios';
import WeatherForm from './weather-form.js';
import WeatherMessage from './WeatherMessage.js';
import api from '../utils/api.js';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'Miami',
      temp: '88'
    }
    this.handleSearch.bind(this);
  }
  handleSearch = (location) => {
    api.getTemp(location).then(function (temp) {
      this.setState({
        location: location,
        temp: temp
      })
    }, function (errorMessage) {
      alert(errorMessage);
    }.bind(this));
  }
  render () {
    var {temp, location} = this.state;
    return(
      <div>
        <h3>weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    )
  }
}

export default Weather;