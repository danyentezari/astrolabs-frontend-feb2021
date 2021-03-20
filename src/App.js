import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutRoute from './LayoutRoute'
import MainScreen from './MainScreen';
import AboutScreen from './AboutScreen';


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={MainScreen}  />
                <LayoutRoute path="/about" exact={true} component={AboutScreen}  />
            </Switch>
        </BrowserRouter>
    )    
};

export default App;