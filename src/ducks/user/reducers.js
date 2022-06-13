import{handleActions} from 'redux-actions'
import {login, logout} from "./actions";

export const initialState = {
    email:'pasha@gmail.com',
    password:'pasha',
    isLogged: false,
}

const userReducer = {
    [login]: (state) => ({
        ...state,
        isLogged: true
    }),
    [logout]: (state) => ({
        ...state,
        isLogged: false
    })
}

export default handleActions(userReducer, initialState)