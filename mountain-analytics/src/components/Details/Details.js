import React, {useContext, Fragment} from 'react';
import {TrackerContext} from '../../App'
import SideNav from "../SideNav/SideNav";
import "./Details.css"
function Details() {
    const sharedStates = useContext(TrackerContext);

    const selectedDomain = sharedStates.domains.find(domain => {
        return domain._id === sharedStates.selectedDomain;
    });

    // Copy the URL to user's clipboard
    const handleCopy = e => {
        console.log("Details: ", e.relatedTarget)
        let element = document.getElementById("userScript");
        element.select();
        document.execCommand("copy");
        e.target.focus();
        console.log("Copying item ", element);
    };

    const Script = (
        <Fragment>
            <div className="script">
                <div className="script__directions">
                    <h2>Script for {selectedDomain.name}</h2>
                    <p>Add this script inside the <span>head</span> tag of your website, then check back to see your data come alive!</p>
                </div>
                <div className="script__scriptContainer">
                    <textarea
                           readOnly
                           rows="2"
                           cols="95"
                           id="userScript"
                           value={`<script id="MountainAnalytics" src="https://cdn.jsdelivr.net/gh/jdevenish/MountainAnalytics-BE/cdn_script/analytics.js" async type="text/javascript" siteId="${selectedDomain._id}"></script>`}
                    />
                </div>
                <button
                    className="script__btn"
                    onClick={handleCopy}>Copy Script</button>
            </div>
        </Fragment>
    );

    const deviceType = (
        <Fragment>

        </Fragment>
    );

    const browser = (
        <Fragment>

        </Fragment>
    );

    const loadTimes = (
        <Fragment>

        </Fragment>
    );

    const locale = (
        <Fragment>

        </Fragment>
    );

    return (
        <div>
            <div className="main">
                <div className="main__side-menu">
                    <SideNav/>
                </div>
                <div className="main__content">
                    {Script}
                </div>

            </div>
        </div>
    );
}

export default Details;

