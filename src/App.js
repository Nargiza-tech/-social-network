import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Nav';

import {Route} from "react-router-dom";
import Settings from "./components/settings/Settings";
import News from "./components/news/News";
import Music from "./components/music/Music";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";






function App(props) {

    // noinspection JSAnnotator
    return (

        <div className='app-wrapper'>
            <HeaderContainer/>

           <Navbar

               // state={props.state.friendsPage}

           />

            <div className="app-wrapper-content">
                <Route path="/dialogs/" render={() => <DialogsContainer
                    // store={props.store}

                //       state={props.state.dialogsPage}
                // addMessage={props.addMessage}
                //     updateNewMessageText={props.updateNewMessageText}
                />} />

                <Route path="/profile/:userId?" render={() => <ProfileContainer/>
                }/>
                <Route path="/users" render={() => <UsersContainer/>
                }/>
                    {/*// store={props.store}*/}
                    {/*// profilePage={props.state.profilePage}*/}
                    {/*//  dispatch={props.dispatch}*/}

                <Route path="/settings" component={Settings}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
            </div>
        </div>


    )
}


export default App;
