import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'hi how are you?', likesCount: 15},
        {id: 2, message: 'its my first post', likesCount: 11},
        {id: 3, message: 'how are you', likesCount: 13},
        {id: 4, message: 'Yo!', likesCount: 17},
    ]
};



it('newPosts should be incremented', () => {

    //1.исходные данные
    let action = addPostActionCreator("bla bla")


    //2.action
    let newState = profileReducer(state, action);

    //3.ожидаем
   expect(newState.posts.length).toBe(5);

})



it('message of new should be correct', () => {

    //1.исходные данные
    let action = addPostActionCreator("bla bla")
    //2.action
    let newState = profileReducer(state, action);

    //3.ожидаем
    expect(newState.posts[4].message).toBe("bla bla");

})


it('after deleting length of message should be decrement', () => {

    //1.исходные данные
    let action = deletePost(1)
    //2.action
    let newState = profileReducer(state, action);

    //3.ожидаем
    expect(newState.posts.length).toBe(3);

})

it('after deleting length shouldn`t be decrement if id is incorrect', () => {

    //1.исходные данные
    let action = deletePost(1000)
    //2.action
    let newState = profileReducer(state, action);

    //3.ожидаем
    expect(newState.posts.length).toBe(4);

})






