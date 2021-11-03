import React from "react";
import classes from './dialogs.module.css';
import Message from "./Massage/Message";
import DialogItem from "./DialogItem/DialogItem";

import TextArea from "./textArea/TextArea";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redax/dialogsReducer";




const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElemnts = state.dialogs.map((d)=>{
        return <DialogItem name={d.name} key={d.id} id={d.id}/>
    })



    let massagesElements = state.messages.map((m) => {
        return  <Message message={m.message} key={m.id} id={m.id}/>
    })

    let newMessageBody = state.newMessageBody;




let onSendMessageClick = () => {
props.sendMessage()

}



let onNewMessageChange = (e) => {
   let body = e.target.value;
   props.updateNewMessageBody(body)

}
    return (
        <>


        <div className={classes.dialogs}>


            <div className={classes.dialogsItems}>


                {

                    dialogsElemnts


                }


            </div>

            <div className={classes.messages}>
                <div>{ massagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder="Enter your message"/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>

            </div>
    {/*<TextArea*/}
    {/*    addMessage={props.addMessage}*/}
    {/*    updateNewMessageText={props.updateNewMessageText}*/}
    {/*    newMessageText={props.state.newMessageText}*/}
    {/*/>*/}
        </div>
            </>
    )
}

export default Dialogs;