import React, {useContext, useEffect} from 'react';
import { TrackerContext } from '../../App'
import SideNav from "../SideNav/SideNav";

function Settings() {
    const sharedStates = useContext(TrackerContext);

    return (
        <div>
            <div className="landing-container">
                <div className="landing-left_padding">
                    <SideNav/>
                </div>
                <div className="landing-content_container">
                    <h1>Settings Page</h1>
                </div>

            </div>
        </div>
    );
}

export default Settings;
