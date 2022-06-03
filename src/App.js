import React from 'react';
import './App.css';
import Navbar from './components/navbar/Nav';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Settings from "./components/settings/Settings";
import News from "./components/news/News";
import Music from "./components/music/Music";
// import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redax/AppReducer";
import Preloader from "./components/coman/preolader/Preloader";
import store from "./redax/redux-store";
import {WithSuspense} from "./components/hoc/WithSuspense";


const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));

const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        // noinspection JSAnnotator
        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs/" render={WithSuspense(DialogsContainer)}/>

                    <Route path="/profile/:userId?" render={WithSuspense(ProfileContainer)}/>

                    <Route path="/users" render={() => <UsersContainer/>}/>

                    <Route path="/login" render={() => <Login/>}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                </div>
            </div>


        )
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


const SamuraiJsApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>

}
export default SamuraiJsApp;