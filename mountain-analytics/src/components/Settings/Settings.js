import React, {useContext, useEffect} from 'react';
import { TrackerContext } from '../../App'

function Settings() {
    const sharedStates = useContext(TrackerContext);

    return (
        <div>
            <div className="landing-container">
                <div className="landing-left_padding">

                </div>
                <div className="landing-content_container">
                    <h1>Settings Page</h1>
                </div>

            </div>
        </div>
    );
}

export default Settings;
