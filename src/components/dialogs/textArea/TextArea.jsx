import React from "react";

import classes from "../dialogs.module.css";

const TextArea = (props) => {
    let newMessages = React.createRef();

    let addMessagesBtn = () =>{
        props.addMessage()

    }

    let onMessageChange = ()=> {
        let textarea = newMessages.current.value;
        props.updateNewMessageText(textarea);
    }
    return(
        <div className={classes.addMessage}>
            <div>
                <textarea onChange={onMessageChange} ref={newMessages}  value={props.newMessageText}/>
            </div>
            <div>
                <button className={classes.addMessageBtn} onClick={addMessagesBtn}>add message</button>
            </div>
        </div>
    )
}

export default TextArea;