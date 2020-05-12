import React, {useContext, useState} from 'react';
import {TrackerContext} from '../../App'
import CreateAccount from "./CreateAccount"
import LogIn from "./LogIn"

function Account() {
    const sharedStates = useContext(TrackerContext);

    const [userCreds, setUserCreds] = useState({
        email: "",
        password: "",
        username: ""
    });

    const handleEmailChange = e => {
        let newCreds = {...userCreds};
        newCreds.email = e.target.value;
        setUserCreds(newCreds)
    };

    const handleUserNameChange = e => {
        let newCreds = {...userCreds};
        newCreds.username = e.target.value;
        setUserCreds(newCreds);
    };

    const handlePasswordChange = e => {
        let newCreds = {...userCreds};
        newCreds.password = e.target.value;
        setUserCreds(newCreds);
    };

    return (
        <>
            {sharedStates.createModal ? <CreateAccount
                                            handleUserNameChange={handleUserNameChange}
                                            handlePasswordChange={handlePasswordChange}
                                            handleEmailChange={handleEmailChange}
                                            userCreds={userCreds}/>
                                       : <LogIn
                                            handleUserNameChange={handleUserNameChange}
                                            handlePasswordChange={handlePasswordChange}
                                            handleEmailChange={handleEmailChange}
                                            userCreds={userCreds}/>}
        </>
    );
}

export default Account;
