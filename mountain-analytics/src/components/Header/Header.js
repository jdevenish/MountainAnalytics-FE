import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    UncontrolledPopover,
    PopoverHeader,
    PopoverBody
} from 'reactstrap';
import './Header.css';


function Header({loggedIn, setLoggedIn}) {
    const handleLogOut = () => {
        setLoggedIn(false);
        console.log("Logging out")
    };

    return (
        <div className="header">
            <Navbar color="light" light expand="md" className="header-buttons">
                <Link className="navbar-brand" to="/"><img src="https://res.cloudinary.com/doaftkgbv/image/upload/v1589041044/MountainAnalyticsLogo-orange_deea3a.png" alt="Mountain Analytics" className="header-img"/></Link>
                <div className="header-buttons-container">
                    <Nav className="mr-auto header-buttons-container_list">
                        <div className="header-buttons_container">
                        </div>
                        <div className="header-login_and_settings">
                            {loggedIn ?
                                <i className="profile-icon nav-link material-icons" id="PopoverLegacy">person</i>
                                : <Link className="nav-link" to="/login">Log In</Link> }
                            <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
                                <PopoverHeader>User Profile</PopoverHeader>
                                <PopoverBody>
                                    <p>User: Justin Devenish</p>
                                    <p>Email: justin.devenish@gmail.com</p>
                                    <button onClick={handleLogOut}>Log Out</button>
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                    </Nav>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;