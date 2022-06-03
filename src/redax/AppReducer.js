import {authApi} from "../api/Api";
import {stopSubmit} from "redux-form";
import {getAuthUsersData} from "./auth-reducer";

const INITIALIZED_SUCCESS= "INITIALIZED_SUCCESS";

// если хочешь видеть редайрект то ставь false перед isAuth

let initialState = {
    initialized: false,

}
const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;

    }


}



export const setInitializedSuccess = () => (
    {
        type: INITIALIZED_SUCCESS,
    })

export const initializeApp = () =>
   (dispatch) => {  //thunka
       let promise =  dispatch(getAuthUsersData());


       Promise.all([promise])
           .then(() => {
           dispatch(setInitializedSuccess());
       });

    }









    // export const login = (email, password, rememberMe) =>
//     (dispatch) => {  //thunka
//         authApi.login(email, password, rememberMe).then(response => {
//             if(response.data.resultCode === 0){
//                 dispatch(getAuthUsersData())
//             }else {
//                 let message =  response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
//                 dispatch(stopSubmit('login', {_error: message}));
//
//             }
//         })
//     }



// export const logout = () =>
//     (dispatch) => {  //thunka
//         authApi.logout().then(response => {
//             if(response.data.resultCode === 0){
//                 dispatch(setAuthUsersData(null, null, null, false))
//             }
//         })
//     }


export default AppReducer;

