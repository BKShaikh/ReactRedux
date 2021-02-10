import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Login from "./Login/Login";
import Home from './Home';
import Dashboard from './Dashboard/DashBoard';
import Error404 from "./Error404";

const MyRoute = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard}  ></PrivateRoute>
            <Route path="/" exact={true} component={Home} />
            <Route path='*' component={Error404} />
        </Switch>
    );
};

export default MyRoute;


