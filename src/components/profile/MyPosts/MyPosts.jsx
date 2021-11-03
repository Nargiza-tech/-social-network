import React from 'react';
import classes from '../MyPosts/myPosts.module.css';
import Post from './Posts/Post';





const MyPosts = (props) => {

    let postsElements = props.posts.map((p)=>{
        return  <Post messege={p.message} id={p.id}  key={p.id} likesCount={p.likesCount}/>




    })
    let newPostsElements = React.createRef();

    let OnAddPost = () => {
        props.addPost()

    }

    let onPostChange = () => {
        let text = newPostsElements.current.value;
       props.updateNewPostText(text);


    }

    return(
        <>
            <div  className={classes.postsBlock}>
               <h3>My posts</h3>

            <div>
                <div>
                <textarea onChange={onPostChange} ref={newPostsElements}  value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={OnAddPost}>Add post</button>
                </div>

            </div>
                <div className={classes.posts}>

                    {
                        postsElements
                    }
                </div>
            </div>
                
          </>
       

)
}

export  default  MyPosts;