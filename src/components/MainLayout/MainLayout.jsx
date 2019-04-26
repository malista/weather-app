import React from "react";
// import Form from '../Form/Form';
import WeatherDesck from '../WeatherDesck/WeatherDesck'
import WeatherPanel from '../WeatherPanel/WeatherPanel'
import MainTitle from '../MainTitle/MainTitle'
// import './DetailedWeather.scss';

const API_KEY = 'e0b16466f5ca625dbe43d3c08d4d9a76';

// defaultCities() { return ['Kyiv', 'Berlin', 'Lviv', 'New York', 'Athens', 'Tokyo', 'Paris', 'London', 'Vienna', 'Rome'] }

class MainLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { wd: [] }
    }
    defaultCities() { return ['Kyiv', 'Berlin', 'Lviv', 'New York', 'Athens', 'Tokyo', 'Paris', 'London', 'Vienna', 'Rome'] }

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

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        this.state.wd.push(city)
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(result => {
                this.state.cityData = this.selectRequiredData(result)
                this.setState(this.state)
            })
            .catch(e => console.error(e));
    }

    renderIfDataDefined(weatherData) {
        if (typeof weatherData !== 'undefined') {
            return <WeatherDesck cityWeather={weatherData} />
        }
    }

    render() {
        return (
            <div className="maincontant">
            <MainTitle />
            <WeatherPanel cities={this.defaultCities()} />
          </div>
        )
    }
}

export default MainLayout;
