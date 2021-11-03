import React from "react";
import classes from "./users.module.css";
import userPhoto from "../assets/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";




let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>

            <div>
                {
                    pages.map(i => {
                        return <span className={props.currentPage === i && classes.selectedPage}
                                     onClick={(e) => {
                                         props.onPageChanged(i)
                                     }}>{i}</span>
                    })

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
                        u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                              props.toggleFollowingInProgress(true, u.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                    headers: {
                                            "API-KEY": "93cd86f2-51fc-46cf-938d-e69b264c9ac0"
                                    }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false, u.id);


                                    })



                        }}>unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                                props.toggleFollowingInProgress(true, u.id);

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "93cd86f2-51fc-46cf-938d-e69b264c9ac0"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false, u.id);

                                    })


                            }} > follow</button>
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