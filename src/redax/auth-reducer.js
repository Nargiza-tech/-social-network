import {authApi} from "../api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";

// если хочешь видеть редайрект то ставь false перед isAuth

let initialState = {
   userId: null,
    email: null,
    login: null,
    isAuth: false
}
 const authReducer = (state = initialState, action) => {
     switch (action.type) {
         case SET_USER_DATA:
             return {
                 ...state,
                 ...action.payload
             }
         default:
             return state;


         }


     }



export const setAuthUsersData = (userId, email, login, isAuth) => (
    {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    })

export const getAuthUsersData = () =>
    async (dispatch) => {  //thunka
     let response = await  authApi.me()
            if(response.data.resultCode === 0){
                let {id,login,email} = response.data.data;
                dispatch(setAuthUsersData(id, email, login, true));
            }
    }

export const login = (email, password, rememberMe) =>
   async (dispatch) => {  //thunka
     let response = await  authApi.login(email, password, rememberMe);
            if(response.data.resultCode === 0){
               dispatch(getAuthUsersData())
            }else {
              let message =  response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit('login', {_error: message}));

            }

    }



export const logout = () =>
   async (dispatch) => {  //thunka
       let response = await authApi.logout();
            if(response.data.resultCode === 0){
                dispatch(setAuthUsersData(null, null, null, false))
            }
    }


export default authReducer;

