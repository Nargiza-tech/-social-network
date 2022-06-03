import {ProfileApi as profileApi, userApi} from "../api/Api";

// const UPPDATENEWTEXT = "UPDATE-NEW-POST-TEXT";
const ADDPOST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
    posts: [
        {id: 1, message: 'hi how are you?', likesCount: 15},
        {id: 2, message: 'its my first post', likesCount: 11},
        {id: 3, message: 'how are you', likesCount: 13},
        {id: 4, message: 'Yo!', likesCount: 17},
        {id: 5, message: 'Yo!', likesCount: 10},
        {id: 6, message: 'Yo!', likesCount: 20}
    ],
        // newPostText: 'it-Nargiza.com',
         profile: null,
          status: ""
}
 const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADDPOST: {
            let newPost = {
                id: 5,
                message: action.newPostsText,
                likesCount: 0
            };

            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
                stateCopy.posts.push(newPost);
            stateCopy.newPostsText = ' ';
            return stateCopy;
        }
        // case UPPDATENEWTEXT: {
        //     let stateCopy = {...state}
        //     stateCopy.posts = [...state.posts]
        //     stateCopy.newPostText = action.newPostsElements;
        //     return stateCopy;
        // }
        case SET_STATUS: {
         return {
             ...state,
             status: action.status
         }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        default:   return state;

    }


}


export const addPostActionCreator = (newPostsText) => (
    {
        type: ADDPOST,
        newPostsText
    })




//Убрали слово return и фигурные скобки{} у этих функции потомучто он в одном строке тоесть нет тела функции

// export const updateNewPostTextActionCreator = (text) =>(
//     {
//         type: UPPDATENEWTEXT,
//         newText: text
//
//     })
export const setUserProfile = (profile) => (
    {
        type: SET_USER_PROFILE,
        profile
    })

export const setStatus = (status) =>(
    {
        type: SET_STATUS,
        status: status

    })
export const deletePost = (postId) =>(
    {
        type: DELETE_POST,
        postId: postId

    })




export const getUserProfile = (userId) => (
    (dispatch) => {
        userApi.getProfile(userId).then(response => {
            // debugger;
            dispatch(setUserProfile(response.data))
        })

    }
   )

export const getStatus = (userId) => (
    (dispatch) => {
       profileApi.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })

    }
)

export const updateStatus = (status) => (
    (dispatch) => {
        profileApi.updateStatus(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })

    }
)

export default profileReducer;

