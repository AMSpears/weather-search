import React, {Component} from 'react'
import './Form.css'

class Form extends Component {
    render() {
        return(
            <div className = "form-container">
                <form onSubmit={this.props.getWeather}>
                    <h1>Weather Check</h1>
                    <input type="text" name="city" placeholder="City..."  required/>
                    <input type="text" name="country" placeholder="Country..." required />
                    <button> <i class="fas fa-search"></i></button>
                </form>
            </div>
        )
    }
}


export default Form