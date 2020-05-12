import React, {useContext, useState} from 'react';
import {TrackerContext} from '../../App'

function NoAccess() {
    const sharedStates = useContext(TrackerContext);
    const [userCreds, setUserCreds] = useState({
        email: "",
        password: ""
    });

    const handleUserNameChange = e => {
        let newCreds = {...userCreds};
        newCreds.email = e.target.value;
        setUserCreds(newCreds);
    };

    const handlePasswordChange = e => {
        let newCreds = {...userCreds};
        newCreds.password = e.target.value;
        setUserCreds(newCreds);
    };

    return (
        <div>
            <h1>No</h1>
        </div>
    );
}

export default NoAccess;
