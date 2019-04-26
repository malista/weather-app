import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './WeatherDesck.scss';
// import DetailedWeather from './DetailedWeather';
import { isNull } from "util";

class WeatherDesck extends React.Component {

  isUndefinedOrNull(value) {
    return typeof (value) === 'undefined' || isNull(value)
  }

  render() {
    const weather = this.props.cityWeather
    if (this.isUndefinedOrNull(weather)) {
      return <div />
    }

    const name = weather.name
    const temeprature = weather.temeprature
    const weatherDescription = weather.weatherDescription
    const windSpeed = weather.windSpeed
    const humidity = weather.humidity
    const icon = 'https://openweathermap.org/img/w/' + weather.icon + '.png'

    return (
      <div className="weatherContainer">
      <Link to={`/detailed-weather/${name}`} className="weatherContainer__link">
        <div className="weatherDescription">
          <h1 className="weatherDescription__cityTitle">{name}</h1>
          <div className="weatherDescription__main">
            <ul className="main__list">
              <li className="main__list-temperature mod">{temeprature}</li>
              <li className="main__list-head mod">{weatherDescription}</li>
              <li className="main__list-icon mod">
                <img className="main__list-icon_pic" src={icon} />
              </li>
              <li className="weatherDescription__other windSpeed mod-align">Winds at {windSpeed} m/s</li>
              <li className="weatherDescription__other humidity mod-align">Humidity levels at {humidity}%</li>
            </ul>
          </div>
        </div>
        </Link>
      </div>
    );
  }
}

export default WeatherDesck;
