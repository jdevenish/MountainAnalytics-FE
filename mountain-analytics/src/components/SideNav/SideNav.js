import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css'

function SideNav() {

    return (
        <div className="nav-item_container">
            <div>
                <Link to="/dashboard">
                    <p className="nav-item"><i className="icon material-icons">dashboard</i>Dashboard</p>
                </Link>
            </div>
            <div>
                <Link to="/domains">
                    <p className="nav-item"><i className="icon material-icons">web</i>Domains</p>
                </Link>
            </div>
            <div>
                <Link to="/settings">
                    <p className="nav-item"><i className="icon material-icons">settings</i>Settings</p>
                </Link>
            </div>
        </div>
    );
}

export default SideNav;
