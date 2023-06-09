import {
    USER_LOGIN_FAILURE, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT,
    USER_DETAILS_FAILURE,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_RESET,
    USER_LIST_FAILURE,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_RESET,
} from '../constants/userConstants'
export const userLoginReducer = (state={}, action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading: true}
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }
        case USER_LOGIN_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        
        case USER_LOGOUT:
            return {

            }
        default:
            return state
    }
}

export const userDetailReducer = (state={user:{}}, action) => {
    switch(action.type){
        case USER_DETAILS_REQUEST:
            return {...state, loading: true}
        case USER_DETAILS_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case USER_DETAILS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case USER_DETAILS_RESET:
            return {
                user: {}
            }
        default:
            return state
    }
}


export const userListReducer = (state={ loading: true, users:[]}, action) => {
    switch(action.type){
        case USER_LIST_REQUEST:
            return { loading: true}

        case USER_LIST_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }

        case USER_LIST_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        case USER_LIST_RESET:
            return {}

        default:
            return state
    }
}

