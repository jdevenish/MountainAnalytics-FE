import React, {useContext} from 'react';
import {TrackerContext} from '../../App'
import SideNav from "../SideNav/SideNav";

function Settings() {
    const sharedStates = useContext(TrackerContext);

    return (
        <div>
            <div className="main">
                <div className="main__side-menu">
                    <SideNav/>
                </div>
                <div className="main__content">
                    <h1>Settings Page</h1>
                </div>

            </div>
        </div>
    );
}

export default Settings;
