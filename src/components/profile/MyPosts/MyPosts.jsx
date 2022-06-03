import React from 'react';
import classes from '../MyPosts/myPosts.module.css';
import Post from './Posts/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredFiled} from "../../../utils/validators/Validators";
import {TextArea} from "../../coman/FormsControl/FormsControl";


const maxLength10 = maxLengthCreator(10)


const MyPosts = React.memo(props => {
    console.log("render");
    let postsElements = props.posts.map((p) => {
        return <Post messege={p.message} id={p.id} key={p.id} likesCount={p.likesCount}/>


    })

    let OnAddPost = (values) => {
        props.addPost(values.newPostsText)
        console.log(values.newPostsText)

    }

    return (
        <>

            <div className={classes.postsBlock}>
                <h3>My posts</h3>

                <div>

                    <AddMessageFormRedux onSubmit={OnAddPost}/>

                </div>
                <div className={classes.posts}>

                    {
                        postsElements
                    }
                </div>
            </div>

        </>


    )
});


class AddMyPostsForm extends React.Component {
    render() {
        return <form onSubmit={this.props.handleSubmit}>
            <div>
                <Field component={TextArea} name='newPostsText' placeholder="Enter your message"
                       validate={[requiredFiled, maxLength10]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>

    }
}

const AddMessageFormRedux = reduxForm({form: "myPostsForm"})(AddMyPostsForm);

export  default  MyPosts;