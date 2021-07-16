import React from "react";
import "./Weather.css";
import { Preloader } from './../preloader/Preloader';


export const WeatherApp = (props) => {
  return (
    <div className="weather__wrapper">
        {props.isFeatch ? null:(props.data? <img className='weather__icon'
            src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt=""
          /> :null)}
      <input
        className="form__field"
        placeholder="Введите ваш город"
        name="name"
        autocomplete="off"
        id="name"
        type="input"
        onChange={(e) => props.changeNameCity(e.target.value)}
        value={props.nameCity}
      />
      <button disabled={props.isFeatch} onClick={() => props.getWeatherData(props.nameCity)}>Search</button>
      {props.isFeatch ? <Preloader /> : (props.data ? (
        <div className="weather-info__wrapper">
          <span>
            Погода в городе {props.data.nameCity}: {Math.round(props.data.main.temp)}°C
          </span>
          <span>Ощущается как: {Math.round(props.data.main.feels_like)}°C</span>
          <span>Ветер: {Math.round(props.data.wind.speed)} м/с</span>
          <span>Давление: {Math.round(props.data.main.pressure)} мм рт. ст.</span>
          <span>Относительная влажность: {Math.round(props.data.main.humidity)}%</span>
        </div>
      ) : null)}
    </div>
  );
};
