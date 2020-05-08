import React, {useContext, useEffect} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { TrackerContext } from '../../App'
import Landing from "../Landing/Landing";
import Login from "../Auth/LogIn";
import Dashboard from "../Dashboard/Dashboard";
import Details from "../Details/Details";
import Settings from "../Settings/Settings";

function Main() {
    const sharedStates = useContext(TrackerContext);

    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={sharedStates.loggedIn ? Dashboard : Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/settings" component={Settings} />
            <Route path="/details/:siteId" component={Details} />
            <Redirect to="/" />
        </Switch>
    );
}

export default Main;
