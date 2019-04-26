import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { isNull } from "util";
import './CurentCityWeather.scss';
// import {Router, Route, hashHistory} from 'react-router'

// import DetailedWeather from './DetailedWeather';

const API_KEY = 'e0b16466f5ca625dbe43d3c08d4d9a76';

class CurentCityWeather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.requestForGeoData(this))
        }
    }

    srd(weatherResult) {
        return {
            name: weatherResult.city.name,
            windSpeed: weatherResult.list[0].wind.speed,
            weatherDescription: weatherResult.list[0].weather[0].description,
            temeprature: weatherResult.list[0].main.temp,
            humidity: weatherResult.list[0].main.humidity,
            icon: weatherResult.list[0].weather[0].icon
        }
    }

    requestForGeoData(self) {
        return function (coord) {
            console.log(coord)
            const latitude = coord.coords.latitude
            const longitude = coord.coords.longitude
            fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=1&appid=${API_KEY}&units=metric`)
                .then(response => response.json())
                .then(result => {
                    self.state.cityWeather = self.srd(result)
                    self.setState(self.state)
                })
                .catch(e => console.error(e));
        }
    }

    isUndefinedOrNull(value) {
        return typeof (value) === 'undefined' || isNull(value)
    }

    render() {
        const weather = this.state.cityWeather
        if (this.isUndefinedOrNull(weather)) {
            return <div />
        }

        const name = weather.name
        const temeprature = weather.temeprature
        const weatherDescription = weather.weatherDescription
        const windSpeed = weather.windSpeed
        const humidity = weather.humidity
        const icon = 'https://openweathermap.org/img/w/' + weather.icon + '.png'
        const routeTo = "/detailed-weather/" + name


    return (
        <div className="user-city">
            {/* <Link className="user-city__link" to={routeTo}> */}
            <Link to={`/detailed-weather/${name}`} className="user-city__link">
                <div className="user-city__description">
                    <h4 className="user-city__geoloc-title">Weather for your location</h4>
                    <h1 className="user-city__cityTitle">{name}</h1>
                    <div className="user-city__main">
                        <ul className="main__list">
                            <li className="main__list-temperature mod">{temeprature}</li>
                            <li className="main__list-head mod">{weatherDescription}</li>
                            <li className="main__list-icon mod">
                                <img className="main__list-icon_pic" src={icon} />
                            </li>
                            <li className="user-city__other windSpeed mod-align">Winds at {windSpeed} m/s</li>
                            <li className="user-city__other humidity mod-align">Humidity levels at {humidity}%</li>
                        </ul>
                    </div>
                </div>
                </Link>
            {/* </Link> */}
        </div>
        );
    }
};

export default CurentCityWeather;
