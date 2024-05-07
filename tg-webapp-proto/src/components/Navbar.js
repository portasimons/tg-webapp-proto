import React from "react";
import classes from './Navbar.module.css'
import { NavLink } from "react-router-dom"


function Navbar() {
    return (
        <nav className={classes.navbar}>
            <div>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs">Dialogs</NavLink>
            </div>
            {/* <div className={classes.item}>Profile</div>
                <div className={`${classes.item} ${classes.active}`}>
                    Messages
                </div> */}
        </nav>
    )
}

export default Navbar;
