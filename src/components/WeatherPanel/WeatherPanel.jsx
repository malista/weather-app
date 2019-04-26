import React from "react";
import WeatherDesck from '../WeatherDesck/WeatherDesck';
import './WeatherDefCity.scss';
import '../WeatherDesck/CurentCityWeather'


import CurentCityWeather from '../WeatherDesck/CurentCityWeather';
const API_KEY = 'e0b16466f5ca625dbe43d3c08d4d9a76';

class WeatherPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = { wd: [] }
        for (const cityName in props.cities) {
            this.reqCityData(props.cities[cityName]);
        }
    }

    selectRequiredData(weatherResult) {
        return {
            name: weatherResult.name,
            windSpeed: weatherResult.wind.speed,
            weatherDescription: weatherResult.weather[0].description,
            temeprature: weatherResult.main.temp,
            humidity: weatherResult.main.humidity,
            icon: weatherResult.weather[0].icon
        }
    }

    reqCityData(cityName) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(result => {
                this.state.wd.push(this.selectRequiredData(result))
                this.setState(this.state)
            })
            .catch(e => console.error(e));
    }

    render() {
        return <ul className="weather-panel__list">
            {
                this.state.wd.map(city =>
                    <li className="weather-panel__listed-items">
                        <WeatherDesck cityWeather={city} />
                    </li>)
            }
            <li className="curent-city">
                <CurentCityWeather />
            </li>
        </ul>
    }
}

export default WeatherPanel;