import './styles/normalize.css'
import React, { Component, PropTypes } from 'react'
import { Route, BrowserRouter, Index, Switch } from 'react-router-dom'

// import MainTitle from './components/MainTitle/MainTitle';
// import Form from './components/Form/Form';
// import WeatherPanel from './components/WeatherDesck/WeatherPanel';
// import WeatherDesck from './components/WeatherDesck/WeatherDesck';
import DetailedWeather from './components/DetailedWeather/DetailedWeather';
import AsideMenu from './components/AsideMenu/AsideMenu';
import MainLayout from './components/MainLayout/MainLayout';
import AppLayout from './components/AppLayout/AppLayout';
// const API_KEY = 'e0b16466f5ca625dbe43d3c08d4d9a76';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route>
            <AppLayout>
              <Route component={AsideMenu} />
              <Route exact path="/" component={MainLayout}></Route>
              <Route path='/detailed-weather/:cityName' component={DetailedWeather} />
            </AppLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
