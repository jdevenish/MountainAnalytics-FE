import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './SideNav.css'

function SideNav() {
    const [selected, setSelected] = useState(0)

    const handleSelect = (num) => {
      setSelected(num)
    };

    return (
        <div className="sideNav__container">
            <div >
                <Link to="/dashboard">
                    <p className={selected === 1 ? "sideNav__selected" : "sideNav__label"}><i className="sideNav__icon material-icons">dashboard</i>Dashboard</p>
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
