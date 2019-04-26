import React from "react";
// import Form from '../Form/Form';
import './DetailedWeatherDesck.scss';
import DetailedWeatherTile from './DetailedWeatherTile'

class DetailedWeatherDesck extends React.Component {
    render() {
        console.error(this.props)
        const weatherDetails = this.props.weatherDetails
        return (
            <div className="detailed-weather">
                {weatherDetails.map(detailedWeather => <DetailedWeatherTile detailedWeather={detailedWeather} />)}
            </div>
        );
    }
}

export default DetailedWeatherDesck;