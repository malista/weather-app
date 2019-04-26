import React from "react";

import './DetailedWeatherDesck.scss';

class DetailedWeatherTile extends React.Component {

    render() {
        const detailedWeather = this.props.detailedWeather
        return (
            // <div className="detailed-weather">
            <div className="detailed-weather__main">
                <ul className="detailed-weather__list">
                    <li className="detailed-weather__list-date mod">{detailedWeather.date}</li>
                    <li className="detailed-weather__list-temperature mod">Temperature: {detailedWeather.temperature}</li>
                    <li className="detailed-weather__list-head mod">{detailedWeather.weatherDescription}</li>
                    <li className="detailed-weather__list-icon mod">
                        <img className="detailed-weather__list-icon_pic" src={`https://openweathermap.org/img/w/${detailedWeather.icon}.png`} />
                    </li>
                    <li className="detailed-weather__other windSpeed mod-align">{detailedWeather.wind} at windSpeed m/s</li>
                    <li className="wdetailed-weather__other humidity mod-align">{detailedWeather.humidity} levels at humidity</li>
                </ul>
            </div>
            // </div>
        )
    }
}

export default DetailedWeatherTile