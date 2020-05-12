import React, {useContext} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {TrackerContext} from '../../App'
import Landing from "../Landing/Landing";
import Login from "../Auth/LogIn";
import Dashboard from "../Dashboard/Dashboard";
import Details from "../Details/Details";
import Settings from "../Settings/Settings";
import Domains from "../Domains/Domains";

function Main() {
    const sharedStates = useContext(TrackerContext);

    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={sharedStates.loggedIn ? Dashboard : Login} />
            <Route path="/dashboard" component={sharedStates.loggedIn ? Dashboard : Landing} />
            <Route path="/domains" component={sharedStates.loggedIn ? Domains : Landing} />
            <Route path="/settings" component={sharedStates.loggedIn ? Settings : Landing} />
            <Route path="/details/:siteId" component={sharedStates.selectedDomain.length > 1 ? Details: Domains} />
            <Redirect to="/" />
        </Switch>
    );
}

export default Main;
