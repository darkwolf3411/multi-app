import { API } from "./../../API/API";
const SET_DATA = "SET_DATA";
const CHANGE_NAME_CITY = "CHANGE_NAME_CITY";
const IS_FEATCH = "IS_FEATCH";

let initialState = {
  nameCity: "",
  isFeatch: false,
  data: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME_CITY:
      return {
        ...state,
        nameCity: action.name,
      };
    case SET_DATA:
      if (state.nameCity.trim() == "") {
        alert('поле не может быть пустым')
        return {
          ...state,
          nameCity: "",
        }
      }
      return {
        ...state,
        data: { ...action.data, nameCity: state.nameCity },
      };
    case IS_FEATCH:
      return {
        ...state,
        isFeatch: action.isFeatchValue,
      };
    default:
      return state;
  }
};

export const getWeatherData = (city) => {
  return (dispatch) => {
    dispatch(isFeatch(true))
    API.weatherApi(city).then((data) => {
      dispatch(setWeatherData(data));
      dispatch(isFeatch(false))
    });
  };
};
export const isFeatch = (isFeatchValue) => ({
  type: IS_FEATCH,
  isFeatchValue,
});
export const setWeatherData = (data) => ({
  type: SET_DATA,
  data,
});
export const changeNameCity = (name) => ({
  type: CHANGE_NAME_CITY,
  name,
});
export default weatherReducer;
