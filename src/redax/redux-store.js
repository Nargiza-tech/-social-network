import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import AppReducer from "./AppReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,  //это все обьект его значением будет та функция где мы создали reducer функции
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: AppReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));





export default store;