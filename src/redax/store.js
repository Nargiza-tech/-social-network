import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidbarReducer";



let store = {
    _state:{
         profilePage:{
            posts: [
                {id: 1, message: 'hi how are you?', likesCount: 15},
                {id: 2, message: 'its my first post', likesCount: 11},
                {id: 3, message: 'how are you', likesCount: 13},
                {id: 4, message: 'Yo!', likesCount: 17},
                {id: 5, message: 'Yo!', likesCount: 10},
                {id: 6, message: 'Yo!', likesCount: 20}
            ],
            newPostText: 'it-Nargiza.com'
        },
        dialogsPage:{
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hello'},
                {id: 3, message: 'how are you'},
                {id: 4, message: 'Yo!'},
                {id: 5, message: 'Yo!'},
                {id: 6, message: 'Yo!'}
            ],
            newMessageBody: "",
            dialogs: [
                {id: 1, name: 'Nargiza'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Viktor'},
                {id: 5, name: 'Valeryi'},
                {id: 6, name: 'Andrey'}
            ]
        },
        sidebar: {},

        friendsPage:{
            friends:[
                {name:'Sasha', id:1},
                {name:'Nargiza', id:2},
                {name:'Vika', id:3}
            ]
        }


    }, _callSubscriber(){
        console.log("State  Changed")
    },
    getState(){
        debugger;
        return this._state;
    },

    addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(store._state)
    }, updateNewPostText(newText){


        this._state.profilePage.newPostText = newText;

        this._callSubscriber(store._state)
    },
    addMessage(){
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText
        }

        store._state.dialogsPage.messages.push(newMessage)
        store._state.dialogsPage.newMessageText = '';
        this._callSubscriber(store._state)
    },updateNewMessageText(newText){
        store._state.dialogsPage.newMessageText = newText;

        this._callSubscriber(store._state)
    },subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch: function (action) {
        profileReducer( this._state.profilePage, action);
        dialogsReducer( this._state.dialogsPage, action)
        sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }


}








export default store;