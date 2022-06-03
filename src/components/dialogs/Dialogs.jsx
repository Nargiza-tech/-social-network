import React from "react";
import classes from './dialogs.module.css';
import Message from "./Massage/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator} from "../../redax/dialogsReducer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredFiled} from "../../utils/validators/Validators";
import {TextArea} from "../coman/FormsControl/FormsControl";


let maxLength50 = maxLengthCreator(50)



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElemnts = state.dialogs.map((d)=>{
        return <DialogItem name={d.name} key={d.id} id={d.id}/>
    })



    let massagesElements = state.messages.map((m) => {
        return  <Message message={m.message} key={m.id} id={m.id}/>
    })

    let newMessageBody = state.newMessageBody;


    let AddNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)

    }

if(!props.isAuth)return  <Redirect to={"/login"}/>
    return (
        <>
        <div className={classes.dialogs}>


            <div className={classes.dialogsItems}>


                {

                    dialogsElemnts


                }
x

            </div>

            <div className={classes.messages}>
                <div>{ massagesElements}</div>

                        <div>
                            <AddMessageFormRedux onSubmit={AddNewMessage}/>
                        </div>
            </div>
        </div>
            </>
    )
}



const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name='newMessageBody' placeholder="Enter your message" validate={[requiredFiled, maxLength50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>

}

const AddMessageFormRedux = reduxForm({form: "dialogMessageForm"})(AddMessageForm);


export default Dialogs;