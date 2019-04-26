import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import Form from '../Form/Form';
import './DetailedWeather.scss';
import DetailedWeatherDesck from '../DetailedWeatherDesck/DetailedWeatherDesck';

const API_KEY = 'e0b16466f5ca625dbe43d3c08d4d9a76';

class DetailedWeather extends React.Component {

    constructor(props) {
        super(props)
        this.state = { weatherDetails: [] }
        this.reqForDetailedWeather()
    }

    transforDataToReadable(weatherElement) {
        return {
            date: weatherElement.dt_txt,
            temperature: weatherElement.main.temp,
            weatherDescription: weatherElement.weather[0].description,
            icon: weatherElement.weather[0].icon,
            wind: weatherElement.wind.speed,
            humidity: weatherElement.main.humidity
        }
    }

    reqForDetailedWeather() {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.match.params.cityName}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(result => {
                const weatherDetails = result.list.slice(0, 5).map(this.transforDataToReadable)
                this.state.weatherDetails = weatherDetails
                this.setState(this.state)
            })
            .catch(e => console.error(e));
    }


    render() {
        console.error(this.props)
        const cityName = this.props.match.params.cityName
        const weatherDetails = this.state.weatherDetails
        return (
            <div className="maincontant">
                <Link to="/" className="datailer-weather__button">HOME</Link>
                <h1 className="datailer-weather__title">DETAILED WEATHER FORECAST</h1>
                <h3 className="datailer-weather__city-name">{cityName}</h3>
                <DetailedWeatherDesck weatherDetails={weatherDetails} />
            </div>
        );
    }
}

export default DetailedWeather;
