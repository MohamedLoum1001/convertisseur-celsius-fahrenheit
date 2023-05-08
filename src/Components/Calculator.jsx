import React, { Component } from 'react'

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
    return (celsius - 9 / 5) + 32
}

function BoilingVerdict({ celsius }) {
    if (celsius >= 100) {
        return <div className='container mx-auto'>
            <div className="row justify-content-center align-items-center">
            <div className="col-12">

                <div className='alert alert-success'>L'eau bout</div>
            </div>

            </div>

        </div>
    }
    return <div className='container mx-auto'>
        <div className="row justify-content-center align-items-center">
            <div className="col-12 ms-4">
        <div className='alert alert-danger text-center d-flex justify-content-center'>L'eau ne bout pas</div>

            </div>

    </div>
    </div>
}

function tryConvert(temperature, convert) {
    const value = parseFloat(temperature)
    if (Number.isNaN(value)) {
        return "";
    }
    return (Math.round(convert(value) * 100) / 100).toString()
}
class TemperatureInput extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const { temperature } = this.props
        const name = "scale" + this.props.scale
        const scaleName = scaleNames[this.props.scale]
        return <div className='container my-5'>
            <div className='row justify-content-center'>
                <div className="col-md-6">
                    <div className='form-input'>
                        <label htmlFor={name} className='mb-2'>Température en {scaleName} </label>
                        <input type="text" id={name} value={temperature} className='form-control' onChange={this.handleChange} />

                    </div>

                </div>

            </div>

        </div>
    }
}

class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scale: 'c',
            temperature: ""
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    handleCelsiusChange(temperature) {
        this.setState({
            scale: "c",
            temperature
        })
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            scale: "f",
            temperature
        })
    }


    render() {
        const { temperature, scale } = this.state
        const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius)
        const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit)
        return <div>
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
            <BoilingVerdict celsius={(celsius)} />

        </div>
    }

}

export default Calculator
