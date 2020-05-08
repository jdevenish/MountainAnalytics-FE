import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from "react-responsive"
import {
    Navbar,
    Nav,
} from 'reactstrap';
import './Header.css';


function Header({loggedIn}) {
    const [collapsed, setCollapsed] = useState(true);
    const isMobile = useMediaQuery({query: "(max-width:813px)"});

    return (
        <div className="header">
            <Navbar color="light" light expand="md" className="header-buttons">
                <Link className="navbar-brand" to="/"><img src="https://res.cloudinary.com/doaftkgbv/image/upload/v1588953138/MountainAnalyticsLogo_qivvgr.png" alt="Mountain Analytics" className="header-img"/></Link>
                <div className="header-buttons-container">
                    <Nav className="mr-auto header-buttons-container_list">
                        <div className="header-buttons_container">
                            {loggedIn ? <Link className="nav-link" to="/dashboard">Dashboard</Link> : ""}
                        </div>
                        <div className="header-login_and_settings">
                            {loggedIn ? <Link className="nav-link material-icons" to="/settings">settings</Link> : ""}
                            {loggedIn ? <Link className="nav-link material-icons" to="/user-profile">person</Link> : <Link className="nav-link" to="/login">Log In</Link> }
                        </div>
                    </Nav>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;