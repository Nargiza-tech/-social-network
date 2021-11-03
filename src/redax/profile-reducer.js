
const UPPDATENEWTEXT = "UPDATE-NEW-POST-TEXT";
const ADDPOST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        {id: 1, message: 'hi how are you?', likesCount: 15},
        {id: 2, message: 'its my first post', likesCount: 11},
        {id: 3, message: 'how are you', likesCount: 13},
        {id: 4, message: 'Yo!', likesCount: 17},
        {id: 5, message: 'Yo!', likesCount: 10},
        {id: 6, message: 'Yo!', likesCount: 20}
    ],
        newPostText: 'it-Nargiza.com',
         profile: null
}
 const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADDPOST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
                stateCopy.posts.push(newPost);
            stateCopy.newPostText = ' ';
            return stateCopy;
        }
        case UPPDATENEWTEXT: {
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:   return state;

    }


}


export const addPostActionCreator = () => (
    {
        type: ADDPOST
    })




//Убрали слово return и фигурные скобки{} у этих функции потомучто он в одном строке тоесть нет тела функции

export const updateNewPostTextActionCreator = (text) =>(
    {
        type: UPPDATENEWTEXT,
        newText: text

    })
export const setUserProfile = (profile) => (
    {
        type: SET_USER_PROFILE,
        profile
    })

export default profileReducer;

