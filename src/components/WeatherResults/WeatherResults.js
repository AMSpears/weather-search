import React, { Component } from 'react'

const Moment = require('moment');

class WeatherResults extends Component {
    render() {
        //rendering the results 
        return(
            <div>
                { this.props.city && (
                    <h3> {this.props.city}</h3>
                )}
                
                { this.props.time && (
                    <p> Today <br/> {Moment(this.props.time).format("LL")}</p>
                )}

                { this.props.icon && (
                    <img src = {`http://openweathermap.org/img/w/${this.props.icon}.png`}/>
                )}

                { this.props.description && (
                    <p> {this.props.description}</p>
                )}

                { this.props.temperature && (
                    <p> {Math.round(this.props.temperature)}&#176;</p>
                )}
                { this.props.temp_max && this.props.temp_min && (
                    <p> Max: {Math.round(this.props.temp_max)}&#176; <br/> Min: {Math.round(this.props.temp_min)}&#176;</p>    
                )}

                { this.props.humidity && this.props.wind && (
                    <p>Humidity: {this.props.humidity}% <br/> Wind: E {Math.round(this.props.wind)} mph</p>    
                )}

            </div>
        )

    }
}

export default WeatherResults