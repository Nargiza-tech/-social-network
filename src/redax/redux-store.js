import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,  //это все обьект его значением будет та функция где мы создали reducer функции
    usersPage: usersReducer,
    auth: authReducer

});

let store = createStore(reducers);





export default store;