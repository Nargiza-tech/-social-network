import React from 'react';
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../redax/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";








class ProfileContainer extends React.Component {

componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
        userId = this.props.authorizedUserId;
        if(!userId){
            this.props.history.push("/login");
        }
    }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)


             //запрос всегда делается в componenetDidmounte
}

    render() {
    return (
        <div>
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
        </div>


    )
}

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth


});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)




