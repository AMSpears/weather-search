import React, { Component } from 'react';
import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import './App.css';

const API_KEY = 'd0c74e4757653dd7d26fe20813b354d8'

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    icon: undefined,
    description: undefined,
    temperature: undefined,
    temp_max: undefined,
    temp_min: undefined, 
    sunrise: undefined,
    sunset: undefined,
    humidity: undefined,
    wind: undefined, 
    error: undefined
  }
  getWeather = async e => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    )
    const data = await api_call.json()
    if (city && country) {
      console.log(data)
      this.setState({
        city: data.name,
        country: data.sys.country,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        temperature: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        error: ''
      })
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        icon: undefined,
        description: undefined,
        temperature: undefined,
        temp_max: undefined,
        temp_min: undefined,
        sunrise: undefined,
        sunset: undefined, 
        wind: undefined,
        humidity: undefined,
        error: 'Please enter the value'
      })
    }
  }

  render() {
    return (
      <div className="App">
      <Header/>
      <Form getWeather={this.getWeather}/>
      </div>
    );
  }
}

export default App;
