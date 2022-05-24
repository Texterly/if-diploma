import userReducer from '../ducks/user/reducers'
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    user: userReducer,
});





