import React, {useContext, useEffect} from 'react';
import { TrackerContext } from '../../App'

function Details() {
    const sharedStates = useContext(TrackerContext);

    return (
        <div>
            <div className="landing-container">
                <div className="landing-left_padding">

                </div>
                <div className="landing-content_container">
                    <h1>Details Page</h1>
                </div>

            </div>
        </div>
    );
}

export default Details;
