import React from 'react';
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile-reducer";






let mapStateToProps = (state) => {

    return {posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}


let mapToDispatchProps = (dispatch) => {
    return {

        // updateNewPostText: (text) => {
        //     dispatch(updateNewPostTextActionCreator(text))
        // },

        addPost: (newPostsText) => {
            dispatch(addPostActionCreator(newPostsText));
        }

    }
}


const MyPostsContainer = connect(mapStateToProps, mapToDispatchProps) (MyPosts);

export default MyPostsContainer;