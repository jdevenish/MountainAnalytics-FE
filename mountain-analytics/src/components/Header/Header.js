import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
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
        <div>
            <Navbar className="header__navbar--reactStrapOverride">
                <Link className="navbar-brand" to="/">
                    <img src="https://res.cloudinary.com/doaftkgbv/image/upload/v1589041044/MountainAnalyticsLogo-orange_deea3a.png" alt="Mountain Analytics" className="header__brandImg"/>
                </Link>
                <div className="header__btnContainer">
                    <div>
                        {loggedIn ?
                            <i className="header__profileIcon material-icons" id="PopoverLegacy">person</i>
                            : <Link className="header__login" to="/login">Log In</Link> }
                        <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy" className="header__popover--readStrapOverride">
                            <PopoverHeader>User Profile</PopoverHeader>
                            <PopoverBody>
                                <p>User: Justin Devenish</p>
                                <p>Email: justin.devenish@gmail.com</p>
                                <button onClick={handleLogOut}>Log Out</button>
                            </PopoverBody>
                        </UncontrolledPopover>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;