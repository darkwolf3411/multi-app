import { Switch, Route, Redirect } from 'react-router-dom'
import { ToDoPage } from './components/ToDo/ToDoMainPageContainer';
import { Weather } from './components/Weather/WeatherContainer';
import { PasswordGenerateApp } from './components/PasswordGenerateApp/PasswordGenerateContainer';


export const useRouts = () => {
    return(
        <Switch>
            <Route path='/todo' exact>
                <ToDoPage />
            </Route>
            <Route path='/weather' exact>
                <Weather />
            </Route>
            <Route path='/password' exact>
                <PasswordGenerateApp />
            </Route>
            <Redirect to="/todo" />
        </Switch>
    )
}