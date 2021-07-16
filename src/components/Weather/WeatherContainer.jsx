import { connect } from "react-redux";
import { WeatherApp } from "./Weather";
import { changeNameCity, getWeatherData } from './../../redux/reducers/weatherReducer';

const mapStateToProps = (state) => {
  return {
    nameCity: state.weather.nameCity,
    data: state.weather.data,
    isFeatch: state.weather.isFeatch
  };
};
const mapDispatchToProps = {
  changeNameCity,
  getWeatherData
};

export const Weather = connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
