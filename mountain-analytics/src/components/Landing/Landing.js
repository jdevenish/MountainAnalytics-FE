import React, {useContext, useEffect} from 'react';
import { TrackerContext } from '../../App'

import './Landing.css'

function Landing() {
    const sharedStates = useContext(TrackerContext);

    return (
        <div>
            <div className="landing-container">
                <div className="landing-left_padding">

                </div>
                <div className="landing-content_container">
                    <h1>Landing Page</h1>
                </div>

            </div>
        </div>

    );
}

export default Landing;
