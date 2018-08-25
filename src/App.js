import React, { Component } from 'react';
// import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import WeatherResults from "./components/WeatherResults/WeatherResults"
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
    time: undefined,
    humidity: undefined,
    wind: undefined, 
    error: undefined
  }
  getWeather = async e => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=52490&units=imperial&appid=${API_KEY}&q=${city},${country}`
    )
    const data = await api_call.json()
    if (city && country) {
      console.log(data)
      this.setState({
        city: data.city.name,
        country: data.country,
        icon: data.list[0].weather[0].icon,
        description: data.list[0].weather[0].description,
        temperature: data.list[0].main.temp,
        temp_max: data.list[0].main.temp_max,
        temp_min: data.list[0].main.temp_min,
        time: data.list[0].dt_txt,
        humidity: data.list[0].main.humidity,
        wind: data.list[0].wind.speed,
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
        time: undefined,
        wind: undefined,
        humidity: undefined,
        error: 'You enter the wrong information. Please try again!'
      })
    }
  }

  render() {
    return (
      <div className="App">
      <Form getWeather={this.getWeather}/>
         <WeatherResults
          city = {this.state.city}
          country = {this.state.country}
          icon = {this.state.icon}
          description = {this.state.description}
          temperature = {this.state.temperature}
          temp_max = {this.state.temp_max}
          temp_min = {this.state.temp_min}
          time = {this.state.time}
          humidity = {this.state.humidity}
          wind = {this.state.wind}
      />
      </div>

    );
  }
}

export default App;
