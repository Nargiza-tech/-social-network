import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrent,
   toggleFollowingInProgress,
    unfollow,
    getUsers
} from "../../redax/usersReducer";
import Users from "./Users";
import Preloader from "../coman/preolader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector, getUsersSelectorSuper
} from "../../redax/Users-selectors";



class UsersContainerApiComponent extends React.Component {
    //и если перебрасываем управление от которого наследуемся здесь constructor идет по умалчанию...
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
               //запрос всегда делается в componenetDidmounte
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }

}


// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsersSelectorSuper(state),
        // users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)

    }
}




export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrent,
        toggleFollowingInProgress,
        getUsers}))(UsersContainerApiComponent)
