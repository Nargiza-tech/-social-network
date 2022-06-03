import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redax/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";



        let mapStateToProps = (state) => {

        return {
            dialogsPage: state.dialogsPage
        }
        }

        let mapDispatchToProps = (dispatch) => {
            return {
                // updateNewMessageBody: (body) => {
                //     dispatch(updateNewMessageBodyCreator(body))
                // },
                sendMessage: (newMessageBody) => {
                    dispatch(sendMessageCreator(newMessageBody))
                }
            }
        }



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
WithAuthRedirect     //это HOC),
)
(Dialogs);