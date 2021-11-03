 const UPPDATEMESSAGEBODY = "UPDATE-NEW-MESSAGE-BODY";
const SENDMESSAGE = "SEND-MESSAGE";

let initialState = {
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
}


 const dialogsReducer = (state = initialState, action) => {

     // stateCopy1.messages = [...state.messages]

switch (action.type){
    case UPPDATEMESSAGEBODY:
      return {...state,
          newMessageBody : action.body
        };

    case SENDMESSAGE:
        let body = state.newMessageBody;
        return {...state,
            newMessageBody : ' ',
            messages: [...state.messages, {id:7, message: body}]

        };

    default : return state;
}


}

export const sendMessageCreator = () => (
    {
        type: SENDMESSAGE
    })


export const updateNewMessageBodyCreator = (body) => (
    {
        type: UPPDATEMESSAGEBODY,
        body: body
    })


export default dialogsReducer;

