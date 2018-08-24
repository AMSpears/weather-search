import React, { Component } from 'react'


class WeatherResults extends Component {
    render() {
        //rendering the results 
        return(
            <div>
                { this.props.city && (
                    <p> {this.props.city}</p>
                )}
    
                { this.props.icon && (
                    <img src = {`http://openweathermap.org/img/w/${this.props.icon}.png`}/>
                )}

                { this.props.description && (
                    <p> {this.props.description}</p>
                )}

                { this.props.temperature && (
                    <p> {this.props.temperature}</p>
                )}

                { this.props.temp_max && this.props.temp_min && (
                    <p>{this.props.temp_max} <br/> {this.props.temp_min}</p>    
                )}
                { this.props.sunrise && this.props.sunset && (
                    <p>{this.props.sunrise} <br/> {this.props.sunset}</p>    
                )}

                { this.props.humidity && this.props.wind && (
                    <p>{this.props.humidity} <br/> {this.props.wind}</p>    
                )}

            </div>
        )

    }
}

export default WeatherResults