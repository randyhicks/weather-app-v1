import React, { Component } from 'react';


class WeatherForm extends Component {
  render () {
    return (
      <div>
        <form className='column'>
          <input type="text" placeholder="Enter a location"/>
          <button className='button'>Get Weather</button>
        </form>
      </div>
    )
  }
}

export default WeatherForm