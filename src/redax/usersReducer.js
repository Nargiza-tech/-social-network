const FOLLOW = "FOLLOW";

const UNFOLLOW = "UNFOLLOW";

const SET_USERS = "SETUSERS";

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


let initialState = {
    users: [],
    pageSize: 5,    //делим насколько будем показывать, тоесть будем показывать по 5 юзеров на каждой странице
    totalUsersCount: 54,  //всего 20 юзеров в bll
    currentPage: 4, // здесь запрашиваем страницу всегда будем запрашивать 1 страницу
    isFetching: true,
    followingInProgress: []
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })

            }
        case SET_USERS:
            return {...state, users: action.users}


        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state;


    }
}


export const follow = (userId) => (
    {
        type: FOLLOW,
        userId
    })

//Убрали слово return и фигурные скобки{} у этих функции потомучто он в одном строке тоесть нет тела функции

export const unfollow = (userId) => (
    {
        type: UNFOLLOW,
        userId

    })

export const setUsers = (users) => (
    {
        type: SET_USERS,
        users
    })

export const setCurrent = (currentPage) => (
    {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    })


export const setUsersTotal = (totalUsersCount) => (
    {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    })

export const toggleIsFetching = (isFetching) => (
    {
        type: TOGGLE_IS_FETCHING,
        isFetching
    })

export const toggleFollowingInProgress = (isFetching, userId) => (
    {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    })

export default usersReducer;

