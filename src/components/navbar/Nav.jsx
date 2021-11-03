import React from 'react';
import classes from './Nav.module.css';

import Friends from "./Friends/Friends";
import {NavLink} from "react-router-dom";



const Navbar = (props) => {
    // let friendsElements = props.state.friends.map((f)=>{
    //     return

    // })
  return  (
      <nav className={classes.nav}>
          <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            {/*<a href="/profile">Profile</a>*/}
          </div>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="/dialogs" activeClassName={classes.activeLink}>DialogsMessages</NavLink>
            {/*<a href="/dialogs">DialogsMessages</a>*/}
        </div>
          <div className={`${classes.item} ${classes.active}`}>
              <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
              {/*<a href="/dialogs">DialogsMessages</a>*/}
          </div>
          <div  className={classes.item}>
            <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
          </div>
        <div  className={classes.item}>
            <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
        </div>
        <div  className={classes.item}>
    <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
        </div>
        {/*<div className={classes.friends}>*/}
        {/*    /!*{ friendsElements}*!/*/}
        {/*</div>*/}


    </nav>



  )}


export default Navbar;