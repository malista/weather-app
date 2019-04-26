import React from "react";

import './Form.scss';

const Form = props => (
	<form className="search-form" onSubmit={props.getWeather}>
		<input className="search-form__input" type="text" name="city" placeholder="Enter city name..."/>
		<button className="search-form__button">Get</button>
	</form>
);
  
  export default Form;
  