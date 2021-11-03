import React from "react";
import classes from './../dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (<>

        <div className={classes.dialog + ' ' + classes.active}>

            <NavLink to={path}><img src="https://mobimg.b-cdn.net/v3/fetch/0e/0e26b1b65946ee36fac9605ae67e4ac8.jpeg" />{props.name}</NavLink>
        </div>

        </>
    )
}


export default DialogItem;