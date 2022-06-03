import React, {useState} from "react";
import classes from "./users.module.css";
import userPhoto from "../assets/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userApi} from "../../api/Api";




let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.pageSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * props.pageSize + 1;
    let rightPortionNumber = portionNumber * props.pageSize;



    return (
        <div  className={classes.container}>

            <div>
                {
                    portionNumber > 1 &&
                    <button className={classes.btn} onClick={() => {setPortionNumber(portionNumber-1)}}>PREV</button>
                }
                {
                    pages
                        .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                        .map((p) => {
                        return <span className={props.currentPage === p && classes.selectedPage}
                                     onClick={(e) => {
                                         props.onPageChanged(p)
                                     }}>{p}</span>
                    })}



                {
                  portionCount >  portionNumber &&
                  <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>
                }
            </div>

            {

                props.users.map(u => (<div key={u.id}>
            <span>

                <div>
                    <NavLink to={"/profile/" + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.usersPhoto}/>
               </NavLink>

                </div>
            </span>
                        <span>
                <div>
                    {
                        u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {props.unfollow(u.id)}}>unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={ () => {props.follow(u.id)}}>follow</button>
                    }
                </div>
            </span>
                        <span>
              <span>
                  <div>
                    {u.name}
              </div>
                  <div>
                    {u.status}
                  </div>
              </span>

                <span>
                  {/*    <div>{u.location.country}</div>*/}
                    {/*<div>{u.location.city}</div>*/}

                </span>
            </span>
                    </div>)
                )}
        </div>
    )
}

export default Users;