import React from "react";
import Form from '../Form/Form';
import WeatherDesck from '../WeatherDesck/WeatherDesck'
// import './DetailedWeather.scss';

const API_KEY = 'e0b16466f5ca625dbe43d3c08d4d9a76';

class AsideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = { wd: [] }
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
            <div className="aside_menu">
                <Form getWeather={this.getWeather} />
                {this.renderIfDataDefined(this.state.cityData)}
            </div>
        )
    }
}

export default AsideMenu;
