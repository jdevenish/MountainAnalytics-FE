import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css'

function SideNav() {

    return (
        <div className="sideNav__container">
            <div>
                <Link to="/dashboard">
                    <p className="sideNav__label"><i className="sideNav__icon material-icons">dashboard</i>Dashboard</p>
                </Link>
            </div>
            <div>
                <Link to="/domains">
                    <p className="sideNav__label"><i className="sideNav__icon material-icons">web</i>Domains</p>
                </Link>
            </div>
            <div>
                <Link to="/settings">
                    <p className="sideNav__label"><i className="sideNav__icon material-icons">settings</i>Settings</p>
                </Link>
            </div>
        </div>
    );
}

export default SideNav;
