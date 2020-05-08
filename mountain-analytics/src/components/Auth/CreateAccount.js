import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { registerNewUser } from '../../services/api-helper-userAuth'
import { TrackerContext } from '../../App'
import "./Account.css";


function CreateAccount({handleUserNameChange, handlePasswordChange, handleEmailChange, userCreds}) {
    const sharedStates = useContext(TrackerContext);

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        console.log("Creating Account: ", userCreds)
        if(userCreds.email.length > 3){
            const json = await registerNewUser(userCreds);
            if(json.status === 200){
                localStorage.setItem("token", json.token);
                sharedStates.setToken(json.token);
                sharedStates.setUserProfile(json.userProfile);
                console.log("User successfully created");
                return <Redirect to="/resources" />
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
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleEmailChange}
                        className="loginContainer-input"/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username "
                        onChange={handleUserNameChange}
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
                <p>Job Tracker does not have access
                    to your password and cannot provide access to your account
                    if you forget it.</p>
            </Form>
        </div>
    );
}

export default CreateAccount;
