import React, { Component } from 'react';


class WeatherForm extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit.bind(this);
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    const location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }
  render () {
    return (
      <div>
        <form className='column' onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Enter a location" ref='location'/>
          <button className='button'>Get Weather</button>
        </form>
      </div>
    )
  }
}

export default WeatherForm