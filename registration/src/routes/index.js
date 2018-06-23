import React from 'react'; 
import {
    Router, 
    Route, 
    Switch,
} from 'react-router-dom'

import Auth from './routes/Auth'; 
import Login from './routes/Login'; 
import Register from './routes/Register'; 

export default () => (
    <Router>
        <Switch>
            <Route exact path="/login" render={props => <Login {...props} />}/> 
            <Route exact path="/register" render={props => <Register {...props} />} /> 
            <Route exact path="/auth" render={props => <Auth {...props} />} />
        </Switch>
    </Router> 
); 
