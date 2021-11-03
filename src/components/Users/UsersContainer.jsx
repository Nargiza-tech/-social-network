import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrent,
    setUsers,
    setUsersTotal, toggleFollowingInProgress,
    toggleIsFetching,
    unfollow
} from "../../redax/usersReducer";
import Users from "./Users";
import axios from "axios";
import preloader from "../assets/preloader-3.gif"
import Preloader from "../coman/preolader/Preloader";
import getUsers, {userApi} from "../../api/Api";


class UsersContainerApiComponent extends React.Component {
    //и если перебрасываем управление от которого наследуемся здесь constructor идет по умалчанию...
    componentDidMount() {
        this.props.toggleIsFetching(true)
        userApi.getUsers(this.props.currentPage, this.props.pageSize ).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setUsersTotal(data.totalCount);
            })             //запрос всегда делается в componenetDidmounte
    }

    onPageChanged = (pageNumber) => {
            this.props.setCurrent(pageNumber)
        this.props.toggleIsFetching(true);

        userApi.getUsers(pageNumber, this.props.pageSize )
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }

}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}




export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrent,
    setUsersTotal,
    toggleIsFetching,
    toggleFollowingInProgress
})(UsersContainerApiComponent);


// let mapDispatchToProps = (dispatch) => {   мы первый паз эту функцию передавали в connect
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//
//         }, setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }