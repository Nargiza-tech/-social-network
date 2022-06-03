import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return( <header className={classes.header}>
        <img src='data:image/png;base64,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'/>
        <div className={classes.loginBlock}>
            {props.isAuth ? <div> {props.login}  - <button onClick={props.logout}>Log out</button></div>
                :<NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
    )
}

export default Header;