import React, {useContext, useState} from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
// import { registerNewUser } from '../../services/api-helper-userAuth'
import { TrackerContext } from '../../App'
import "./Account.css";
import {createNewAccount} from "../../services/api-helper-org";


function CreateAccount() {
    const sharedStates = useContext(TrackerContext);

    const [creds, setCreds] = useState({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        orgName: ""
    });

    const handleEmailChange = e => {
        let newCreds = {...creds};
        newCreds.email = e.target.value;
        setCreds(newCreds)
    };

    const handleFirstNameChange = e => {
        let newCreds = {...creds};
        newCreds.first_name = e.target.value;
        setCreds(newCreds);
    };

    const handleLastNameChange = e => {
        let newCreds = {...creds};
        newCreds.last_name = e.target.value;
        setCreds(newCreds);
    };

    const handlePasswordChange = e => {
        let newCreds = {...creds};
        newCreds.password = e.target.value;
        setCreds(newCreds);
    };

    const handleOrgChange = e => {
        let newCreds = {...creds};
        newCreds.orgName = e.target.value;
        setCreds(newCreds);
    };

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        if(creds.email.length > 3){
            const json = await createNewAccount(creds);
            if(json.status === 200){
                localStorage.setItem("token", json.token);
                sharedStates.setToken(json.token);
                sharedStates.setUserProfile(json.userProfile);
                return <Redirect to="/dashboard" />
            } else{
                sharedStates.setLoggedIn(false);
                console.log("Error creating account: ", json.error)
            }
        }
    };

    return (
        <div className={sharedStates.loggedIn ? "hide" : "loginContainer"}>
            <Form onSubmit={handleCreateAccount}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        onChange={handleFirstNameChange}
                        className="loginContainer-input"/>
                    <Input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        onChange={handleLastNameChange}
                        className="loginContainer-input"/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleEmailChange}
                        className="loginContainer-input"/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input
                        type="text"
                        name="organization"
                        placeholder="Company Name "
                        onChange={handleOrgChange}
                        className="loginContainer-input"/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password (case sensitive)"
                        onChange={handlePasswordChange}
                        className="loginContainer-input"/>
                </FormGroup>
                <Button className="loginContainer-Button">Sign Up</Button>
                <p>Dont' forget your password!</p>
                <p>Mountain Analytics does not have access
                    to your password and cannot provide access to your account
                    if you forget it.</p>
            </Form>
        </div>
    );
}

export default CreateAccount;
