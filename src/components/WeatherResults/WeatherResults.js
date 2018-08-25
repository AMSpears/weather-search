import React, { Component } from 'react'
import "./WeatherResults.css"
const Moment = require('moment');

class WeatherResults extends Component {
    render() {
        //rendering the results 
        return(
            <div>
                <div className= "form-container">
                    { this.props.city && (
                    <div className ="results-container">
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
                    )}
                </div>
                <div className= "form-container">
                        { this.props.error && (
                        <div className ="results-container">
                            { this.props.error&& (
                                <p>{this.props.error}</p>    
                            )}
                        </div>
                        )}
                    </div>
            </div>
        )

    }
}

export default WeatherResults