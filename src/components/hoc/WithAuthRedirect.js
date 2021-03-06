import React from 'react';
import {Redirect} from "react-router-dom";
import Dialogs from "../dialogs/Dialogs";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => (
    {
        isAuth: state.auth.isAuth
    }

);

export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render(){
              if(!this.props.isAuth)return  <Redirect to={"/login"}/>


    return <Component {...this.props}/>

        }
    }

    let mapStateToPropsForRedirect = (state) => (
        {
            isAuth: state.auth.isAuth
        }

    );

   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);


    return  ConnectedAuthRedirectComponent;

};

export default WithAuthRedirect;