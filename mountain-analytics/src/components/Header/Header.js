import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {
    Navbar,
    PopoverBody,
    PopoverHeader,
    UncontrolledPopover
} from 'reactstrap';
import './Header.css';


function Header({loggedIn, setLoggedIn, userProfile}) {
    const handleLogOut = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);

    };


    let userProfilePopUp = (
        <Fragment>
            <i className="header__profileIcon material-icons" id="PopoverLegacy">person</i>
            <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy" className="header__popover--readStrapOverride">
                <PopoverHeader>User Profile</PopoverHeader>
                <PopoverBody>
                    <p>User: {userProfile.first_name} {userProfile.last_name}</p>
                    <p>Email: {userProfile.email}</p>
                    <button onClick={handleLogOut}>Log Out</button>
                </PopoverBody>
            </UncontrolledPopover>
        </Fragment>
    );

    return (
        <div>
            <Navbar className="header__navbar--reactStrapOverride">
                <Link className="navbar-brand" to="/">
                    <img src="https://res.cloudinary.com/doaftkgbv/image/upload/v1589041044/MountainAnalyticsLogo-orange_deea3a.png" alt="Mountain Analytics" className="header__brandImg"/>
                </Link>
                <div className="header__btnContainer">
                    <div>
                        {loggedIn ? userProfilePopUp : <Link className="header__login" to="/login">Log In</Link> }
                    </div>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;