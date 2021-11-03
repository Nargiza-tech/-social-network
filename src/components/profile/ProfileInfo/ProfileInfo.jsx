import React from 'react';
import classes from "./profileInfo.module.css"
import Preloader from "../../coman/preolader/Preloader";




const ProfileInfo = (props) => {
    debugger;
    if(! props.profile){
        return <Preloader/>
    }
    return(
        <div>
                <img className={classes.imgFon} src='https://picsum.photos/536/354'/>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />

            </div>
            <span>{props.profile.fullName}</span>


        </div>

)
}

export  default  ProfileInfo;