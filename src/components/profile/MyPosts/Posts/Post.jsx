import React from 'react';
import classes from './post.module.css';

const Post = (props) => {


    return (
        <>
            <div>
                {props.messege} Like {props.likesCount}

        </div>

            <div className={classes.item}>
                <img src="https://mobimg.b-cdn.net/v3/fetch/0e/0e26b1b65946ee36fac9605ae67e4ac8.jpeg" />

                    <div>


                        {/*<span>Like {props.likesCount}</span>*/}
                </div>

            </div>

        </>


    )
}

export default Post;