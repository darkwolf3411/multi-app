import toDoReducer from './reducers/toDoReducer';
import { combineReducers } from "redux";
import weatherReducer from './reducers/weatherReducer';
import generatePasswordReducer from './reducers/passworGenerateReducer';

export const rootReducer = combineReducers({
    todo: toDoReducer,
    weather: weatherReducer,
    password: generatePasswordReducer,
})